<script>
import ParentWhatWeOffer from "../CardData/ParentWhatWeOffer.vue";
import HeroPage from "./HeroPage.vue";

export default {
  name: "ScholarshipsPage",
  components: {
    ParentWhatWeOffer,
    HeroPage,
  },
};
</script>
<template>
  <div class="pt-30 p-10">
    <HeroPage />
    <ParentWhatWeOffer />
  </div>
</template>
