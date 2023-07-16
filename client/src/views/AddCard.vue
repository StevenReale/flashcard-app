<template>
  <div>
      <label for="question">Add new question</label>
      <input id ="question" name="question" type="text" v-model="question" />
      <label for="answer">Add new answer</label>
      <input id ="answer" name="answer" type="text" v-model="answer" />
      <button @click="addQuestion">Submit</button>
  </div>
</template>

<script>
import cardServ from "../services/CardService";

export default {
    name: 'add-card',
    methods: {
        addQuestion() {
            const card = {
                userId: 1,
                question: this.question,
                answer: this.answer
            }
            cardServ.addCard(card).then( () => {
                this.$router.push('/');
            })
        }
    },
    data() {
        return {
            question: "",
            answer: ""
        }
    }

}
</script>

<style>

</style>