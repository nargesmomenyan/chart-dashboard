<template>
  <v-container>
    <v-layout align-space-around>
      <v-flex xs6>
        <form >
          <v-text-field v-model="userName" label="نام کاربری:"></v-text-field>
          <v-text-field v-model="password" label="رمز عبور:" type="password"></v-text-field>

          <v-btn @click="login">ورود</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    login() {
        console.log('login page');
        this.$store.dispatch("authenticateUser", {
            userName :this.userName,
            password:this.password,
            organization:null
        });      
    }
  }
};
</script>

