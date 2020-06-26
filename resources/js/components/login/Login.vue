<template>
  <v-form v-model="valid" @submit.prevent="login">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.email"
            label="E-mail"
            type="email"
            :rules="nameRules"
            required
          ></v-text-field>
        </v-col>
                <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.password"
            label="Password"
            type="password"
            :rules="nameRules"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="#3fb1ac" type="submit">Login</v-btn>
      <router-link to="/signup">
        <v-btn color="#9dd0cd">Sign Up</v-btn>
      </router-link>

    </v-container>
  </v-form>
</template>

<script>
  export default {
    data(){
        return {
            valid: false,
            nameRules: [
                v => !!v || 'Name is required',
            ],
            form : {
                email:null,
                password:null
            }
        }
    },
    created() {
      if(User.loggedIn())
      {
        this.$router.push({name:'forum'})
      }
    },
    methods:{
      login(){
          User.login(this.form)
      }
    }
  }
</script>


<style>

</style>