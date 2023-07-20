<template>
  <div>
      <h2 class="hide-mobile">Study Mode</h2>
      <display-card />
  </div>
</template>

<script>
import DisplayCard from '../components/DisplayCard.vue'
export default {
  components: { DisplayCard },
    name: 'study-view'

}
</script>

<style>
@media (max-width: 576px) {
  .hide-mobile {
    display: none;
  }
}
</style>