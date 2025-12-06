<script>
import FooterPage from "@/Pages/Footer.vue";
import NavPage from "@/Pages/NavBar.vue";

export default {
  components: {
    NavPage,
    FooterPage,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <NavPage />
  <RouterView />
  <FooterPage />
</template>

<style scoped></style>
