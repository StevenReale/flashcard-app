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
      isFront: true,
      login: false
    };
  },
  methods: {
    log(wasCorrect) {
      this.card.expiryTime = new Date();
      if (this.login) {
      cardServ.log(wasCorrect, this.card).then(() => {
        this.checkCardStatus();
      });
    } else {
      if (wasCorrect) {
            //do stuff
        } else {
            this.card.bin = 1;
            this.card.timesWrong++;
            this.$store.commit("EDIT_CARD", this.card);
        }
        this.isFront = true;
        this.getNextCard();
    }
    },
    getNextCard() {
      if(this.login) {
        console.log("THIS SHOULD NOT HAPPEN");
        cardServ.getNextCard().then((response) => {
          this.card = response.data;
        });
      } else {
        this.card = cardServ.getSortedActiveCards(this.$store.state.cards)[0];
      }

    },

    checkCardStatus() {
      this.isFront = true;  
      cardServ.checkCardStatus().then((response) => {
        const status = response.data.status;

        if (status == null) {
          this.getNextCard();
        } else {
          this.displayMessage = true;
          this.message = status;
        }
      });
    },
  },
  created() {
    //this.checkCardStatus();
    this.getNextCard();
  },
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

#button-div > button {
  width: 150px;
  height: 3em;
  font-size: 1em;
  font-weight: bold;
}
</style>