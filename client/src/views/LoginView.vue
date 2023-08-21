<template>
  <div id="login">
    <form v-on:submit.prevent="login">
      <h2>Please Sign In</h2>
      <div id="fields">
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          v-model="user.username"
          required
          autofocus
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          v-model="user.password"
          required
        />
        <div id="submit-div"><button type="submit">Sign in</button></div>
      </div>
      <hr />
      Need an account?
      <router-link v-bind:to="{ name: 'register' }">Register!</router-link>
    </form>
  </div>
</template>

<script>
import authService from "../services/AuthService";

export default {
  name: "LoginView",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      authService
        .login(this.user)
        .then((response) => {
          if (response.status == 200) {
            this.$store.commit("SET_AUTH_TOKEN", response.data.token);
            this.$store.commit("SET_USER", response.data.user);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          const response = error.response;
          if (!response) {
            alert(error);
          } else if (response.status === 401) {
            alert("Invalid username and password!");
          } else {
            alert(response.message);
          }
        });
    },
  },
  created() {
    if (this.$store.state.message != "Logged Out") {
      this.$store.commit("CHANGE_BANNER_MESSAGE", "");
    }
  },
};
</script>

<style scoped>
button {
  margin-top: 10px;
}

#submit-div {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5px;
}

input {
  margin: 5px 0;
}

#fields {
  display: flex;
  flex-direction: column;
  width: 200px;
  
}
</style>
