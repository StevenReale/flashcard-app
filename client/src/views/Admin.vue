<template>
  <div>
    <h2>Deck Management</h2>
    <button>Create New Card</button>
    <flashcard-collection />
  </div>
</template>

<script>
import FlashcardCollection from "../components/FlashcardCollection.vue";

export default {
    components: {FlashcardCollection},
    name: 'admin',
};
</script>

<style>
</style>