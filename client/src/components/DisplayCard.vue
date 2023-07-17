<template>
  <div id="card-container">
    <div id="card" @click="isFront = !isFront">
      <h1 class="side-indicator" v-if="isFront && !displayMessage">Q</h1>
      <h1 class="side-indicator" v-if="!isFront && !displayMessage">A</h1>
      <p id="flip-message" v-if="!displayMessage">click card to flip</p>
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
    <div id="button-div" v-if="!displayMessage">
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
    };
  },
  methods: {
      log(wasCorrect) {
          console.log(this.card);
          cardServ.log(wasCorrect, this.card.cardId).then(() => {
              this.getNextCard();
          })
      },
      getNextCard() {
          cardServ.getNextCard().then((response) => {
          this.card = response.data;
        });
      }
  },
  created() {
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
};
</script>

<style scoped>
#card-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#card {
  border: 1px solid black;
  height: 500px;
  width: 350px;
  border-radius: 10%;
}

#card-text {
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 3em;
  text-align: center;
}

.side-indicator {
  position: relative;
  z-index: 1;
  top: 0em;
  left: 0.2em;
  font-size: 5em;
}

#flip-message {
  position: relative;
  z-index: 2;
  bottom: -400px;
  font-size: 1em;
  font-style: italic;
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