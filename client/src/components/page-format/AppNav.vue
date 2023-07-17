<template>
      <nav>
      <ul id="nav-ul">
      <router-link class="nav-link" to="/">Admin</router-link> |
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
}

#nav-ul {
  padding-left: 10px;
}
</style>