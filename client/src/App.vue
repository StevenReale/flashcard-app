<template>
  <div id="app">
    <app-header />
    <app-nav />
    
    <main>
    <router-view id="viewport" />
    </main>

    <app-footer />

  </div>
</template>

<script>
import '@/assets/reset.css'
import AppHeader from './components/page-format/AppHeader.vue'
import AppNav from './components/page-format/AppNav.vue'
import AppFooter from './components/page-format/AppFooter.vue'

export default {
  components: {AppHeader, AppNav, AppFooter},
  name: 'App'
}
</script>


<style>

*, body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  font-weight: bold;
  font-size: 1.5em;
  padding-bottom: 1em;
  text-align: center;
}

header {
  display: flex;
  position: fixed;
  height: 120px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #F3BD00;
  padding: 0;
}

nav {
  display: flex;
  position: fixed;
  top: 120px;
  background-color: #f5d564;
  width: 100%;
  height: 30px;
  align-items: center;
 
}

#viewport {
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

}

button {
  background-color: #F3BD00;
}

main {
  padding: 160px 20px 40px 20px;
}

footer {
  position: fixed;
  display: flex;
  align-items: center;
  height: 30px;
  width: 100vw;
  bottom: 0px;
  background-color: #f5d564;
  padding-left: 20px;
}

a.router-link-exact-active {
  background-color: #faefca;
}

</style>
