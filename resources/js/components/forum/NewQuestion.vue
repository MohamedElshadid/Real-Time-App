<template>
  <v-form  @submit.prevent="create">
    <v-container>
        <v-text-field
        v-model="form.title"
        label="Title"
        type="text"
        required
        ></v-text-field>
        <v-select
        :items="cateories"
        item-text="name"
        item-value="id"
        v-model="form.category_id"
        label="Category"
        autocomplete
        ></v-select>
        <vue-simplemde v-model="form.body"  />
      <v-btn color="#3fb1ac" type="submit">Create Question</v-btn>

    </v-container>
  </v-form>
</template>

<script>
  import VueSimplemde from 'vue-simplemde'
export default {
    components: {
      VueSimplemde
    },
    data(){
        return{
            form:{
                title:null,
                category_id:null,
                body:null
            },
            cateories:{},
            errors:{}
        }
    },
    created(){
        axios.get('/api/category')
        .then(res => this.cateories = res.data.data)
        .catch(error => console.log(error.response.data))
    },
    methods:{
        create(){
            axios.post('/api/question',this.form)
            .then(res => this.$router.push(res.data.path))
            .catch(error => this.errors = error.response.data.error)
        }
    }
}
</script>

<style scoped>
  @import '~simplemde/dist/simplemde.min.css';
</style>