<script>
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-vue-next";
import { FaqData } from "../CardData/FAQData";

export default {
  components: {
    ChevronDown,
    ChevronUp,
    ArrowRight,
  },
  data() {
    return {
      FaqData,
      activeIndex: null,
    };
  },
  methods: {
    toggleShoworHide(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null;
      } else {
        this.activeIndex = index;
      }
    },
  },
};
</script>
<template>
  <template class="flex flex-col gap-5 py-5">
    <div class="flex flex-col items-center gap-3 px-10">
      <h1 class="font-bold text-2xl md:text-4xl">Frequently asked questions</h1>
      <p class="text-sm md:text-md text-center">
        Everything you need to know about NepaliPool
      </p>
    </div>
    <div class="px-10 flex flex-col gap-5">
      <div
        v-for="(data, index) in FaqData"
        :key="index"
        class="h-auto w-auto border border-neutral-300 hover:border-green-600 rounded-xl p-5 flex flex-col gap-5 hover:shadow-xl"
      >
        <div
          class="flex justify-between hover:text-green-600"
          @click="toggleShoworHide(index)"
        >
          <h1>{{ data.question }}</h1>
          <span
            class="size-6 flex items-center border border-green-600 rounded-full text-green-600"
          >
            <ChevronUp v-if="activeIndex === index" />
            <ChevronDown v-else />
          </span>
        </div>
        <p
          v-if="activeIndex === index"
          class="text-neutral-600 text-sm text-justify"
        >
          {{ data.answer }}
        </p>
      </div>
    </div>
    <div class="flex flex-col items-center gap-5">
      <button
        class="text-green-600 font-bold px-3 py-2 rounded-xl border-2 border-green-600 hover:bg-green-600 hover:text-white flex items-center gap-2"
        @click="this.$router.push('/faq')"
      >
        <span> View all FAQs </span>
        <ArrowRight />
      </button>
      <div class="flex gap-2">
        <span class="text-neutral-600">Still have questions?</span>
        <button
          @click="this.$router.push('/support')"
          class="text-green-600 underline hover:text-green-800 cursor-pointer"
        >
          Contact our support team
        </button>
      </div>
    </div>
  </template>
</template>
