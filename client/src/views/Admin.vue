<template>
  <div id="admin-view">
    <h2>Deck Management</h2>
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
  margin-top: 1em;
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
</style>