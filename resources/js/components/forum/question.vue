<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >

    <v-card-subtitle class="pb-0">
        <h3 headline mb-0>
            <router-link :to="data.path">
                {{data.title}}
            </router-link>
        </h3>
        <div grey--text>{{data.created_at}}</div>
    </v-card-subtitle>

    <v-card-text class="text--primary mt-4">
      {{data.body}}
    </v-card-text>

  </v-card>
</template>

<script>
export default {
    props:['data']
}
</script>

<style>

</style>