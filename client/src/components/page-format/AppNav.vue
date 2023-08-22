<template>
      <nav>
      <ul id="nav-ul">
        <li>
      <router-link class="nav-link" to="/">Deck Management</router-link> |
      <router-link class="nav-link" :to="{name: 'Study'}">Study Mode</router-link>
    </li>
    <li>
          <router-link class="nav-link" v-bind:to="{ name: 'logout' }" v-if="$store.state.token">Logout</router-link>
          <router-link class="nav-link" v-bind:to="{ name: 'login' }" v-else>Login</router-link>
        </li>
    </ul>
    </nav>
</template>

<script>
export default {
    name: 'app-nav'
}
</script>

<style>

nav {
  z-index: 10;
}

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
  display: flex;
  list-style: none;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%
}
</style>