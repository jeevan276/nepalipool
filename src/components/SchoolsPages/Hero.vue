<script>
import { GraduationCap, School } from "lucide-vue-next";
import SchoolCard from "./SchoolCard.vue";

export default {
  components: {
    GraduationCap,
    School,
    SchoolCard,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <div
    class="flex flex-col items-center text-center gap-6 px-6 md:px-10 lg:px-20 p-10"
  >
    <!-- Top Button -->
    <button
      class="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 border border-green-300 rounded-xl hover:bg-green-100 transition"
    >
      <GraduationCap class="w-4 h-4" />
      <span class="text-xs font-bold">Education Directory</span>
    </button>

    <!-- Heading & Description -->
    <div class="max-w-3xl">
      <h1 class="text-3xl md:text-4xl lg:text-6xl font-bold">
        Discover Schools
      </h1>
      <p class="mt-4 text-neutral-500 text-sm md:text-base lg:text-lg">
        Explore our comprehensive directory of educational institutions across
        Japan. Find the perfect school for your educational journey.
      </p>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-wrap gap-4 justify-center mt-6">
      <button
        class="flex items-center gap-2 px-4 py-2 border border-green-300 rounded-xl hover:bg-green-50 transition"
      >
        <School class="w-4 h-4 text-green-600" />
        <span class="text-xs font-bold text-neutral-500">Schools</span>
      </button>
      <button
        class="flex items-center gap-2 px-4 py-2 border border-green-300 rounded-xl hover:bg-green-50 transition"
      >
        <School class="w-4 h-4 text-green-600" />
        <span class="text-xs font-bold text-neutral-500">All Prefectures</span>
      </button>
    </div>

    <SchoolCard />
  </div>
</template>
