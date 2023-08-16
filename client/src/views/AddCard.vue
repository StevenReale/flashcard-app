<template>
  <div id="container">
    <div id="add-card">
      <label id="question-label" for="question">Add new question</label>
      <input id="question" name="question" type="text" v-model="question" />
      <label id="answer-label" for="answer">Add new answer</label>
      <input id="answer" name="answer" type="text" v-model="answer" />
      <div id="button-div">
        <button @click="addQuestion">Submit</button>
        <button @click="returnToAdmin">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
//import cardServ from "../services/CardService";
import timeServ from "../services/TimeService";

export default {
    name: 'add-card',
    methods: {
        addQuestion() {

            const utcDate = timeServ.nowUTC().toISOString();
            console.log(utcDate);
            const card = {
                userId: 1,
                expiryTime:utcDate,
                question: this.question,
                answer: this.answer,
                bin: 0,
                timesWrong: 0
            }

            if (this.login) {
            // cardServ.addCard(card).then( () => {
            //     this.returnToAdmin();
            // });
            console.log("THIS SHOULD NOT HAPPEN!");
          } else {
            //mutate datastore
            this.$store.commit("ADD_CARD", card);
            this.returnToAdmin();
          }
        },
        returnToAdmin() {
            this.$router.push('/');
        }
    },
    data() {
        return {
            question: "",
            answer: "",
            login: false
        }
    }

}
</script>

<style>
#container {
  margin-top: 3em;
  display: flex;
  justify-content: center;
}

#add-card {
  width: 40vw;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 2.5fr;
  grid-template-areas:
    "question-label question"
    "answer-label answer"
    "button button";
}

#question-label {
  grid-area: question-label;
}

#question {
  grid-area: question;
}

#answer-label {
  grid-area: answer-label;
}

#answer {
  grid-area: answer;
}

#button-div {
  margin-top: 1.5em;
  grid-area: button;
  justify-self: center;
  width: 100px;
  display: flex;
}

button {
  display: inline;
  padding-left: 1em;
  padding-right: 1em;
  margin-right: 0.5em;
  margin-left: 0.5em;
}
</style>