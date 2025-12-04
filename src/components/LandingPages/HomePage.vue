<script>
import HeroSection from "./HeroSection.vue";
import HowItWorks from "./HowItWorks.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    HowItWorks,
  },
};
</script>
<template>
  <div class="flex flex-col gap-10">
    <HeroSection />
    <HowItWorks />
  </div>
</template>
