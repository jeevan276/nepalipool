<script>
import { Check } from "lucide-vue-next";

export default {
  components: {
    Check,
  },
};
</script>
<template>
  <div class="flex flex-col items-center gap-3 px-4 md:px-8 lg:px-16">
    <!-- Heading -->
    <h1 class="text-center text-2xl font-bold md:text-4xl">Why Trust Us?</h1>
    <hr class="w-20 border-2 border-green-600" />

    <!-- Features list -->
    <div class="flex flex-col gap-4 mt-4">
      <!-- Feature 1 -->
      <div class="flex items-start gap-3">
        <div
          class="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 flex-shrink-0"
        >
          <Check class="text-white text-lg" />
        </div>
        <p class="text-sm md:text-base">
          Affordable mentorship by real Nepali students who've successfully
          navigated the process
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="flex items-start gap-3">
        <div
          class="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 flex-shrink-0"
        >
          <Check class="text-white text-lg" />
        </div>
        <p class="text-sm md:text-base">
          Verified mentors with proven track records of successful applications
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="flex items-start gap-3">
        <div
          class="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 flex-shrink-0"
        >
          <Check class="text-white text-lg" />
        </div>
        <p class="text-sm md:text-base">
          Comprehensive guidance from application to arrival in Japan
        </p>
      </div>

      <!-- Feature 4 -->
      <div class="flex items-start gap-3">
        <div
          class="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 flex-shrink-0"
        >
          <Check class="text-white text-lg" />
        </div>
        <p class="text-sm md:text-base">
          24/7 support system for all your questions and concerns
        </p>
      </div>

      <!-- Feature 5 -->
      <div class="flex items-start gap-3">
        <div
          class="w-6 h-6 flex items-center justify-center rounded-full bg-green-600 flex-shrink-0"
        >
          <Check class="text-white text-lg" />
        </div>
        <p class="text-sm md:text-base">
          Transparent pricing with no hidden fees or charges
        </p>
      </div>
    </div>
  </div>
</template>
