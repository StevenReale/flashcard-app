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
          <td>{{card.cardId}}</td>
          <td>{{card.bin}}</td>
          <td>{{card.expiryTime}}</td>
          <td>{{card.timesWrong}}</td>
          <td>{{card.question}}</td>
          <td>{{card.answer}}</td>
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
};
</script>

<style>
</style>