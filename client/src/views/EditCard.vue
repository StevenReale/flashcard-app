<template>
  <div>
      <h2>Edit Card</h2>
      <table>
          <tr>
              <td class="column" id="card-id-td" >Card Id: </td>
              <td>{{card.cardId}}</td>
          </tr>

          <tr>
              <td class="column">Bin: </td>
              <td><input type="text" v-model="card.bin" /></td>
          </tr>

          <tr>
              <td class="column">Times incorrect: </td>
              <td><input type="text" v-model="card.timesWrong" /></td>
          </tr>

          <tr>
              <td class="column">Question: </td>
              <td><input type="text" v-model="card.question" /></td>
          </tr>

          <tr>
              <td class="column">Answer: </td>
              <td><input type="text" v-model="card.answer" /></td>
          </tr>

          <tr>
              <td class="column">Becomes active: </td>
              <td><input type="text" v-model="card.expiryTime" /></td>
          </tr>

      </table>
      <div id="button-div">
      <button id="update" @click.prevent="update">Update Card</button>
      <button id="cancel" @click.prevent="cancel">Cancel</button>
      </div>
  </div>
</template>

<script>
import cardServ from '../services/CardService';

export default {
    name: 'edit-card',
    data () {
        return {
            card: {}
        }
    },
    created() {
        
        this.card = this.$route.params.card;
        
    },
    methods: {
        update() {
            if (this.isLoggedIn) {
            
            cardServ.updateCard(this.card).then(()=> this.goHome());
            } else {
                this.$store.commit("EDIT_CARD", this.card);
                this.goHome();
            }

        },
        goHome() {
            this.$router.push({name: 'Admin'});
        },
        cancel() {
            this.goHome();
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
    padding-bottom: 3px;
}

#update, #cancel {
    margin-top: 15px;
    display: inline-block;
}

#card-id-td {
    padding-bottom: 6px;
}

#button-div {
    display: flex;
    height: 3em;
    justify-content: space-evenly;
    width: 300px;
}
</style>