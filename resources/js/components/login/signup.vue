<template>
  <v-form  @submit.prevent="signup">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.name"
            label="Youe Name"
            type="text"
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.email"
            label="E-mail"
            type="email"
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
            required
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="form.password_confirmation"
            label="Password"
            type="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn color="#3fb1ac" type="submit">Sign Up</v-btn>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data(){
        return {
            form:{
                name:null,
                email:null,
                password:null,
                password_confirmation:null
            }
        }
    },
    methods:{
        signup(){
            axios.post('api/auth/signup',this.form)
            .then(res => User.responseAfterLogin(res))
            .catch()
        }
    }
  }
</script>


<style>

</style>