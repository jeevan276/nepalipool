<script>
import { CardDetails } from "../CardData/CardDataHowItWOrks.js";

export default {
  data() {
    return {
      detailsList: CardDetails,
    };
  },
};
</script>

<template>
  <section class="flex flex-col gap-10">
    <div class="flex flex-col items-center gap-3">
      <h1 class="text-center text-2xl font-bold md:text-4xl">How It Works</h1>
      <hr class="w-20 border-2 border-green-600 text-green-600" />
    </div>
    <div class="flex flex-wrap justify-center gap-10 px-10">
      <div
        v-for="(detail, index) in detailsList"
        :key="index"
        class="h-auto w-60 sm:h-60 p-5 bg-white/5 backdrop-blur-md border-2 shadow-xl rounded-md flex flex-col gap-3 border-transparent hover:border-b-green-600 hover:border-green-200 hover:shadow-2xl transition-all duration-300"
      >
        <button
          class="w-fit py-2 px-4 text-white text-xl shadow-md rounded-xl bg-green-600"
        >
          {{ detail.id }}
        </button>
        <h1 class="font-bold">{{ detail.title }}</h1>
        <p class="text-justify">{{ detail.description }}</p>
      </div>
      <hr />
    </div>
  </section>
</template>
