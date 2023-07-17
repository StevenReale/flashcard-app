<template>
  <div>
      <div v-if="displayMessage"><p>{{message}}</p></div>
      <div v-else>
      <p>Question: {{card.question}}</p>
      <p>Answer {{card.answer}}</p>
      </div>
  </div>
</template>

<script>
import cardServ from '../services/CardService';

export default {
    name: 'current-card',
    data () {
        return {
            card: {},
            message: "",
            displayMessage: false
        }
    },
    created() {
        
        cardServ.checkCardStatus().then(response => {
            const status = response.data.status;

            if(status==null) {
                cardServ.getNextCard().then(response => {
                this.card=response.data;
                });
            } else {
                this.displayMessage = true;
                this.message = status;
            }
        });


    }

}
</script>

<style>

</style>