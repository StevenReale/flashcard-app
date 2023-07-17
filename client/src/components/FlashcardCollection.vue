<template>
  <div>
    <h2>Current Flashcards</h2>
    <table>
      <thead>
        <tr>
          <th>Card Id</th>
          <th>Bin</th>
          <th>Becomes active</th>
          <th>Times incorrect</th>
          <th>Question</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="card in cards" :key="card.cardId">
          <td id="card-id">{{card.cardId}}</td>
          <td id="bin">{{card.bin}}</td>
          <td id="time-stamp">{{formatTimestamp(card.expiryTime)}}</td>
          <td id="incorrect">{{card.timesWrong}}</td>
          <td id="question">{{card.question}}</td>
          <td id="answer">{{card.answer}}</td>
        </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import cardServ from "../services/CardService";

export default {
  name: "flashcard-collection",
  data() {
    return {
      cards: [],
    };
  },
  created() {
    cardServ.getAllCardsByUser().then((response) => {
      this.cards = response.data;
    });
  },
  methods: {
    formatTimestamp(timeStamp) {
      return (timeStamp.slice(0,10) + " " + timeStamp.slice(11, 19))
    }
  }
};
</script>

<style scoped>

th {
  font-weight: bold;
  padding-right: 1em;
  text-align: center;
}

td {
  padding-right: 1em;
}

thead {
  border-bottom: 1px solid black;
}

tbody td {
  padding-top: .5em;
}

#card-id, #bin, #time-stamp, #incorrect {
  text-align: center;
}

</style>