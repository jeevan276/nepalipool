<script>
import { Clock, Hammer, Dot, Sparkle, Sparkles, Zap } from "lucide-vue-next";

export default {
  name: "MentorsPage",
  components: {
    Hammer,
    Sparkle,
    Zap,
    Sparkles,
    Clock,
    Dot,
  },
  data() {
    return {
      cardData: [
        {
          icon: Zap,
          title: "Lighting Fast",
          description:
            "Optimized for performance and built with the latest technologies.",
        },
        {
          icon: Sparkles,
          title: "Beautiful Design",
          description:
            "Crafted with attention to detail and modern design principles.",
        },
        {
          icon: Clock,
          title: "Coming Soon",
          description:
            "We're putting the finishing touches. Stay tuned for updates!",
        },
      ],
    };
  },
};
</script>
<template>
  <template class="flex flex-col items-center justify-center p p-10">
    <div
      class="relative size-20 rounded-xl bg-green-600 flex items-center justify-center"
    >
      <Hammer class="text-white size-12" />

      <Sparkle
        class="absolute -top-2 left-16 size-4 text-gray-500 bg-amber-400 rounded-full p-1"
      />
    </div>
    <div class="flex flex-col gap-5">
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-green-600 text-center"
      >
        We're Building Something Amazing
      </h1>
      <p
        class="text-center text-sm px-10 lg:text-2xl sm:text-md md:px-40 lg:px-65"
      >
        This page is currently under construction. Our team is working hard to
        bring you an incredible experience.
      </p>
      <div
        class="flex flex-col md:flex-row md:flex-wrap justify-center gap-10 items-center"
      >
        <div
          v-for="(detail, index) in cardData"
          :key="index"
          class="h-auto w-auto md:h-50 md:w-70 border border-neutral-300 rounded-xl p-5 flex flex-col gap-2 hover:border-green-600 hover:shadow-2xl"
        >
          <component
            :is="detail.icon"
            class="p-3 size-12 bg-green-200 rounded-xl text-green-600"
          />
          <h1 class="font-bold">{{ detail.title }}</h1>
          <p>{{ detail.description }}</p>
        </div>
      </div>
    </div>
    <button
      class="p-2 md:p-3 border border-green-200 shadow-xl rounded-2xl m-6 md:m-10 flex items-center gap-1 md:gap-2"
    >
      <Dot class="w-2 h-2 md:w-3 md:h-3 animate-blink" />
      <Dot class="w-2 h-2 md:w-3 md:h-3 animate-blink [animation-delay:.2s]" />
      <Dot class="w-2 h-2 md:w-3 md:h-3 animate-blink [animation-delay:.4s]" />

      <span class="ml-2 text-xs md:text-sm lg:text-md">
        Development in Progress
      </span>
    </button>
  </template>
</template>
<style scoped>
.dot {
  width: 30px;
  height: 30px;

  animation: blink 1.4s infinite both;
}

.delay-1 {
  animation-delay: 0.2s;
}

.delay-2 {
  animation-delay: 0.4s;
}

@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
