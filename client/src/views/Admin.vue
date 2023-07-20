<template>
  <div id="admin-view">
    <h2 class="hide-mobile">Deck Management</h2>
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