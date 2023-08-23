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
        this.card = this.$route.params.card;
    },
    methods: {
        deleteCard() {
            if(this.isLoggedIn) {
            cardServ.deleteCard(this.card).then(()=> this.goHome());
            console.log("LOGGED IN");
            } else {
                this.$store.commit('DELETE_CARD', this.card.cardId);
                this.goHome();
            }
        },

        cancel() {
            this.goHome();
        },

        goHome() {
            this.$router.push({name: 'Admin'})
        }
    },
    computed: {
    isLoggedIn() {
      return this.$store.state.token.length > 0;
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