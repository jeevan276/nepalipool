<script>
import NavPage from "@/Pages/NavBar.vue";

export default {
  components: {
    NavPage,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <NavPage />
  <RouterView />
</template>

<style scoped></style>
