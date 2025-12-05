<script>
import { MessageCircle, User, UserSearch, ChevronRight } from "lucide-vue-next";
import WhatWeOffer from "../LandingPages/ChildWhatWeOffer.vue";

export default {
  components: {
    WhatWeOffer,
  },
  data() {
    return {
      CardDetail: [
        {
          icon: MessageCircle,
          title: "One-to-One Chat",
          description:
            "Get personal guidance from mentors who are already studying abroad.",
          button: {
            buttonText: "Connect With Mentor",
            ChevronRightSymbol: ChevronRight,
          },
          route: "/mentors",
        },
        {
          icon: User,
          title: "Weekly Group Sessions",
          description:
            "Join interactive weekly sessions led by experienced mentors to learn together.",
          button: {
            buttonText: "Check Sessions",
            ChevronRightSymbol: ChevronRight,
          },
          route: "/sessions",
        },
        {
          icon: UserSearch,
          title: "Explore Mentors",
          description:
            "Browse mentors who have studied abroad and find the right guidance for you.",
          button: {
            buttonText: "View Mentors",
            ChevronRightSymbol: ChevronRight,
          },
          route: "/mentors",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="flex flex-col items-center gap-3 px-10">
    <h1 class="font-bold text-2xl md:text-4xl">What We Offer</h1>
    <p class="text-sm md:text-md text-center">
      Personalized guidance to help you achieve your study abroad goals.
    </p>
  </div>
  <div class="flex flex-wrap gap-10 px-10 justify-center">
    <WhatWeOffer
      v-for="(detail, index) in CardDetail"
      :key="index"
      :icon="detail.icon"
      :title="detail.title"
      :description="detail.description"
      :buttonText="detail.button.buttonText"
      :ChevronRight="detail.button.ChevronRightSymbol"
      :route="detail.route"
      class="flex flex-col items-center bg-white h-auto md:h-70 w-80 md:w-90 p-5 rounded-md border-2 border-neutral-100 hover:border-b-green-600 shadow-2xl shadow-green-200 hover:shadow-green-400"
    />
  </div>
</template>
