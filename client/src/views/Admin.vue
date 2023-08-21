<template>
  <div id="admin-view">

    <h2 class="hide-mobile">Deck Management</h2>

    <p id="login-prompt" v-if="!login">Feel free to explore the app's functionality with this dummy data. If you wish to create a persistent card deck, please <router-link :to="{name: 'login'}">login</router-link></p>
    
    <button id="create" @click.prevent="create">Create New Card</button>
    <flashcard-collection />
  </div>
</template>

<script>
import FlashcardCollection from "../components/FlashcardCollection.vue";

export default {
    components: {FlashcardCollection},
    name: 'admin',
    methods: {
      create() {
        this.$router.push('/create');
      }
    },
    data() {
      return {
        login: false
      }
    }
};
</script>

<style>
#admin-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#create {
  width: 150px;
  height: 2em;
  margin-bottom: 4em;
  
}

#login-prompt {
  margin-bottom: 2em;
  font-style: italic;
}

@media (max-width: 576px) {
  .hide-mobile {
    display: none;
  }

  #create {
    margin-top: 1em;
    margin-bottom: 2em;
  }
}
</style>