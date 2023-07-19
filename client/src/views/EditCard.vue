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
      <button id="update" @click.prevent="update">Update Card</button>
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
        cardServ.getCardById(this.$route.params.cardId).then(response => {
            this.card = response.data;
        });
        console.log(this.card);
    },
    methods: {
        update() {
            cardServ.updateCard(this.card).then(()=> this.$router.push({name: 'Admin'}));
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

#update {
    margin-top: 15px;
}

#card-id-td {
    padding-bottom: 6px;
}
</style>