<script>
import ParentWhatWeOffer from "../CardData/ParentWhatWeOffer.vue";
import HeroPage from "./HeroPage.vue";
import ScholarshipsCountry from "./ScholarshipsCountry.vue";

export default {
  name: "ScholarshipsPage",
  components: {
    ParentWhatWeOffer,
    HeroPage,
    ScholarshipsCountry,
  },
};
</script>
<template>
  <HeroPage class="bg-green-300 pt-30 p-10" />
  <div class="pt-30 p-10">
    <ScholarshipsCountry class="pb-20" />
    <ParentWhatWeOffer />
  </div>
</template>
