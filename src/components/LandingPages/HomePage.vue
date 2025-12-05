<script>
import HeroSection from "./HeroSection.vue";
import HowItWorks from "./HowItWorks.vue";
import ParentWhatWeOffer from "../CardData/ParentWhatWeOffer.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    HowItWorks,
    ParentWhatWeOffer,
  },
};
</script>
<template>
  <div class="flex flex-col gap-10">
    <HeroSection />
    <HowItWorks />
    <ParentWhatWeOffer />
    <br />
    <br />
    <br />
  </div>
</template>
