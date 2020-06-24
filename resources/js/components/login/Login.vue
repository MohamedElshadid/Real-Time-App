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
    methods:{
        login(){
            axios.post('api/auth/login',this.form)
            .then(res => console.log(res.data))
            .catch(error => console.log(error.response.data))
        }
    }
  }
</script>


<style>

</style>