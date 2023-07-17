<template>
      <nav>
      <ul id="nav-ul">
      <router-link class="nav-link" to="/">Deck Management</router-link> |
      <router-link class="nav-link" :to="{name: 'Study'}">Study Mode</router-link>
      </ul>
    </nav>
</template>

<script>
export default {
    name: 'app-nav'
}
</script>

<style>
a{
  color: black;
  font-weight: bold;
  text-decoration: none;
}

.nav-link {
  display: inline-block;
  line-height: 2em;
  padding-left: 5px;
  padding-right: 5px;
}

#nav-ul {
  padding-left: 10px;
}
</style>