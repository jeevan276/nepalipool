<script>
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
import { TcardDetails } from "../CardData/CardDataTestimonials";

export default {
  components: {
    ArrowLeft,
    ArrowRight,
  },
  data() {
    return {
      TcardDetails,
      currentIndex: 0, // Track the currently visible card
    };
  },
  computed: {
    currentCard() {
      return this.TcardDetails[this.currentIndex];
    },
  },
  methods: {
    prevCard() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.TcardDetails.length - 1; // Loop to last
      }
    },
    nextCard() {
      if (this.currentIndex < this.TcardDetails.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Loop to first
      }
    },
  },
};
</script>

<template>
  <div class="flex flex-col items-center gap-3 px-10">
    <h1 class="text-center text-2xl font-bold md:text-4xl">Testimonials</h1>
    <hr class="w-20 border-2 border-green-600" />

    <!-- Card Navigation -->
    <div
      class="relative h-auto w-auto md:h-50 md:w-150 border border-neutral-300 rounded-xl p-5 flex flex-col gap-5 mt-5"
    >
      <!-- Left Arrow -->
      <button
        @click="prevCard"
        class="absolute -left-5 top-1/2 transform -translate-y-1/2 text-green-600 text-2xl font-bold border border-neutral-400 rounded-full"
      >
        <ArrowLeft />
      </button>

      <!-- Card Content -->
      <div class="flex items-center gap-3">
        <div
          class="size-14 flex justify-center items-center rounded-full bg-white shadow-md"
        >
          <img
            :src="currentCard.profileImg"
            alt="profileImg"
            class="h-10 w-11 rounded-full"
          />
        </div>
        <div class="flex flex-col">
          <h2 class="font-bold text-xl">{{ currentCard.profileText.name }}</h2>
          <span class="text-green-600 text-sm">{{
            currentCard.profileText.status
          }}</span>
        </div>
      </div>

      <p class="text-justify mt-2">{{ currentCard.description }}</p>
      <component :is="currentCard.rate" class="w-20" />

      <!-- Right Arrow -->
      <button
        @click="nextCard"
        class="absolute -right-5 top-1/2 transform -translate-y-1/2 text-green-600 text-2xl font-bold border border-neutral-400 rounded-full"
      >
        <ArrowRight />
      </button>
    </div>
  </div>
</template>
