<script>
import { Sparkles } from "lucide-vue-next";
import MentorCard from "./MentorCard.vue";

export default {
  components: {
    Sparkles,
    MentorCard,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div class="flex flex-col gap-10 items-center justify-center px-10">
    <div
      class="flex gap-1 items-center text-green-600 px-3 py-1 rounded-full bg-green-50 border border-green-200 w-auto"
    >
      <Sparkles class="size-4" />
      <span class="text-xs md:text-sm">Connect with Expert Mentors</span>
    </div>

    <div>
      <h1 class="font-bold text-4xl md:text-6xl lg:text-7xl text-center">
        Find Your Perfect <span class="text-green-700">Mentor</span>
      </h1>
      <p class="text-sm md:text-xl text-center text-neutral-600">
        Browse through our curated list of experienced mentors ready to guide
        you on your journey to success
      </p>
    </div>
  </div>
  <MentorCard />
</template>
