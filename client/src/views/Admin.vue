<template>
  <div id="admin-view">

    <h2 class="hide-mobile">Deck Management</h2>

    <div id="intro-div">
    <p id="login-prompt" v-if="!isLoggedIn">Feel free to explore the app's functionality with this dummy data. If you wish to create a persistent card deck, please <router-link :to="{name: 'login'}">login</router-link> or <router-link :to="{name: 'register'}">register</router-link>.</p>
    <p>Flashcards begin in Bin 0. Each time you answer correctly, it moves into the next bin, where there is a longer delay until the card becomes available again. Each time you answer incorrectly, it moves back to Bin 1.</p>
    <p>Once a card lands in Bin 11, or is answered incorrectly 10 times, it becomes inactive</p>
    </div>
    
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
    computed: {
    isLoggedIn() {
      return this.$store.state.token.length > 0;
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

p {
  margin-bottom: 1em;
  font-style: italic;
}

#intro-div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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