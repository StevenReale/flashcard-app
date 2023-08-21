<template>
  <h1>Logout</h1>
</template>

<script>
export default {
  name: "LogoutView",
  created() {
    this.$store.commit("LOGOUT");
    this.$store.commit("CHANGE_BANNER_MESSAGE", "Logged Out");
    this.$router.push("/login");
    
  }
};
</script>
