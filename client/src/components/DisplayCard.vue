<template>
  <div id="card-container">
    <div id="card" @click="isFront = !isFront">
      <div id="indicator-message-container">
        <h1 class="side-indicator" v-if="isFront && !displayMessage">Q</h1>
        <h1 class="side-indicator" v-if="!isFront && !displayMessage">A</h1>
        <p id="flip-message" v-if="!displayMessage">click card to flip</p>
      </div>
      <div id="card-text">
        <div v-if="displayMessage">
          <p>{{ message }}</p>
        </div>
        <div v-else>
          <div v-if="isFront">
            <p>{{ card.question }}</p>
          </div>
          <div v-else>
            <p>{{ card.answer }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="button-div" v-if="!isFront && !displayMessage">
      <button @click.prevent="log(true)">I got it</button>
      <button @click.prevent="log(false)">I did not get it</button>
    </div>
  </div>
</template>

<script>
import cardServ from "../services/CardService";

export default {
  name: "current-card",
  data() {
    return {
      card: {},
      message: "",
      displayMessage: false,
      isFront: true
    };
  },
  methods: {
    log(wasCorrect) {
      this.card.expiryTime = new Date();
      if (this.isLoggedIn) {
        cardServ.log(wasCorrect, this.card).then(() => {
          this.checkCardStatus();
        });
      } else {
        if (wasCorrect) {
          this.card.bin++;
          switch (this.card.bin) {
            case (1): //add 5 seconds
              this.card.expiryTime.setSeconds(this.card.expiryTime.getSeconds() + 5);
              break;
            case (2): //add 25 seconds
              this.card.expiryTime.setSeconds(this.card.expiryTime.getSeconds() + 25);
              break;
            case (3): //add 2 minutes
              this.card.expiryTime.setMinutes(this.card.expiryTime.getMinutes() + 2);
              break;
            case (4): //add 10 minutes
              this.card.expiryTime.setMinutes(this.card.expiryTime.getMinutes() + 10);
              break;
            case (5): //add 1 hour
              this.card.expiryTime.setHours(this.card.expiryTime.getHours() + 1);
              break;
            case (6): //add 5 hours
              this.card.expiryTime.setHours(this.card.expiryTime.getHours() + 5);
              break;
            case (7): //add 1 day
              this.card.expiryTime.setDate(this.card.expiryTime.getDate() + 1);
              break;
            case (8): //add 5 days
              this.card.expiryTime.setDate(this.card.expiryTime.getDate() + 5);
              break;
            case (9): //add 25 days
              this.card.expiryTime.setDate(this.card.expiryTime.getDate() + 25);
              break;
            case (10): // add 4 months
              this.card.expiryTime.setDate(this.card.expiryTime.getDate() + + 4 * 30);
              break;
            default:
              this.card.expiryTime = null;
              break;
          }
        } else {
          this.card.bin = 1;
          this.card.timesWrong++;

        }
        this.$store.commit("EDIT_CARD", this.card);
        this.checkCardStatus();
      }
    },
    getNextCard() {
      if (this.isLoggedIn) {
        cardServ.getNextCard(this.$store.state.user).then((response) => {
          this.card = response.data;
        });
      } else {
        this.card = cardServ.getSortedActiveCards(this.$store.state.cards)[0];
      }

    },

    checkCardStatus() {
      this.isFront = true;
      if (this.isLoggedIn) {
        cardServ.checkCardStatus(this.$store.state.user).then((response) => {
          const status = response.data.status;

          if (status == null) {
            this.getNextCard();
          } else {
            this.displayMessage = true;
            this.message = status;
          }
        });
      } else {
        if (cardServ.getSortedActiveCards(this.$store.state.cards).length == 0) {
          this.displayMessage = true;
          this.message = "You are permanently done.";
        } else if (cardServ.getSortedActiveCards(this.$store.state.cards)[0].expiryTime > new Date()) {
          this.displayMessage = true;
          this.message = "You are all done for now";
        } else {
          this.getNextCard();
        }
      }
    },
  },
  created() {
    this.checkCardStatus();
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.token.length > 0;
    }
  }
};
</script>

<style scoped>
#card-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#card {
  position: relative;
  border: 1px solid black;
  height: 500px;
  width: 350px;
  border-radius: 10%;
}

#card-text {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

p {
  font-size: 3em;
  text-align: center;
}

#indicator-message-container {
  position: absolute;
}

.side-indicator {
  position: absolute;
  z-index: 1;
  top: 0em;
  left: 0.2em;
  font-size: 5em;
}

#flip-message {
  position: absolute;
  z-index: 2;
  bottom: -488px;
  font-size: 1em;
  font-style: italic;
  left: 72px;
  width: 200px;
}

#button-div {
  width: 350px;
  display: flex;
  justify-content: space-around;
}

#button-div>button {
  width: 150px;
  height: 3em;
  font-size: 1em;
  font-weight: bold;
}
</style>