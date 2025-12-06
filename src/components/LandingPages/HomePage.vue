<script>
import HeroSection from "./HeroSection.vue";
import HowItWorks from "./HowItWorks.vue";
import ParentWhatWeOffer from "../CardData/ParentWhatWeOffer.vue";
import WhyTrustUs from "./WhyTrustUs.vue";
import Testimonials from "./Testimonials.vue";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion.vue";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    HowItWorks,
    ParentWhatWeOffer,
    WhyTrustUs,
    Testimonials,
    FrequentlyAskedQuestion,
  },
};
</script>
<template>
  <div class="flex flex-col gap-10">
    <HeroSection />
    <HowItWorks />
    <ParentWhatWeOffer />
    <div class="flex flex-wrap justify-center lg:flex-nowrap">
      <WhyTrustUs />
      <Testimonials />
    </div>
    <FrequentlyAskedQuestion />
  </div>
</template>
