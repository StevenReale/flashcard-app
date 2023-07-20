<template>
  <div>
      <h2>Delete Card</h2>
      <table>
          <tr>
              <td class="column" id="card-id-td" >Card Id: </td>
              <td>{{card.cardId}}</td>
          </tr>

          <tr>
              <td class="column">Bin: </td>
              <td>{{card.bin}}</td>
          </tr>

          <tr>
              <td class="column">Times incorrect: </td>
              <td>{{card.timesWrong}}</td>
          </tr>

          <tr>
              <td class="column">Question: </td>
              <td>{{card.question}}</td>
          </tr>

          <tr>
              <td class="column">Answer: </td>
              <td>{{card.answer}}</td>
          </tr>

          <tr>
              <td class="column">Becomes active: </td>
              <td>{{card.expiryTime}}</td>
          </tr>

      </table>
      <div id = "button-div">
      <button id="delete" @click.prevent="deleteCard">Delete Card</button>
      <button id="cancel" @click.prevent="cancel">Cancel</button>
      </div>
  </div>
</template>

<script>
import cardServ from '../services/CardService';

export default {
    name: 'delete-card',
    data () {
        return {
            card: {}
        }
    },
    created() {
        cardServ.getCardById(this.$route.params.cardId).then(response => {
            this.card = response.data;
        });
    },
    methods: {
        deleteCard() {
            cardServ.deleteCard(this.card).then(()=> this.goHome());
        },

        cancel() {
            this.goHome();
        },

        goHome() {
            this.$router.push({name: 'Admin'})
        }
    }
}
</script>

<style scoped>
.column {
    font-weight: bold;
}

td {
    padding-bottom: 4px;
}

#update {
    margin-top: 15px;
}

#button-div {
    display: flex;
    height: 2em;
    justify-content: space-evenly;
    width: 300px;
}
</style>