<template>
    <header>
      <h1>Flashcard App</h1>
    </header>
</template>

<script>
export default {
    name: 'app-header'
}
</script>

<style scoped>

h1 {
  font-size: 5em;
  font-weight: bold;
}

@media (max-width: 576px) {
  h1 {
    font-size: 3em;
  }
}

</style>