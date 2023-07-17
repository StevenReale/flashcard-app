<template>
  <div id="card-container">
    <div id="card" @click="isFront = !isFront">
      <h1 class="side-indicator" v-if="isFront && !displayMessage">Q</h1>
      <h1 class="side-indicator" v-if="!isFront && !displayMessage">A</h1>
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
  created() {
    cardServ.checkCardStatus().then((response) => {
      const status = response.data.status;

      if (status == null) {
        cardServ.getNextCard().then((response) => {
          this.card = response.data;
        });
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
  justify-content: center;
}
#card-text {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  height: 500px;
  width: 350px;
  border-radius: 10%;
}

p {
  font-size: 3em;
  text-align: center;
}

.side-indicator {
    position: relative;
    top: 1em;
    left: 0.2em;
    font-size: 5em;
}
</style>