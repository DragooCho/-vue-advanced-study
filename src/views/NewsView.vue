<template>
  <div>
    <div v-for="user in fetchedNews" v-bind:key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedNews"]),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS_LIST");
    // newsList()
    //   .then((response) => {
    //     this.users = response.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>

<style></style>
