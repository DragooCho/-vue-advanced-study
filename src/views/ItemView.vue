<template>
  <div>
    <p>
      {{ viewInfo.title }}
    </p>
    <div>
      {{ viewInfo.content }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    viewInfo() {
      return this.$store.state.item;
    },
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEMS_VIEW", itemId);
  },
};
</script>

<style></style>
