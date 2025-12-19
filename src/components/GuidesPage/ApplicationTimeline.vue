<script>
import { CircleCheck } from "lucide-vue-next";

export default {
  components: {
    CircleCheck,
  },
  data() {
    return {
      timelineCard: [
        {
          title: "Find School",
          description:
            "Begin checking the school's information, admission guidelines, and specific requirements together for the application process around 8–12 months in advance.",
        },
        {
          title: "Submit & Apply to School",
          description:
            "complete the application documents and apply for the school. Pay the application fee. 8-12 months before.",
        },
        {
          title: "Apply to COE(Certificate of Eligibility)",
          description:
            "Upon the approval of COE and acceptance of enrollment, make the payment of fees including tuition and accommodation. 1-3 months before.",
        },
        {
          title: "Make the Payment",
          description:
            "Upon the approval of COE and acceptance of enrollment, make the payment of fees including tuition and accommodation. 1-3 months before.",
        },
        {
          title: "Apply to Student Visa",
          description:
            "With the COE documents, apply for visa at the embassy/consulate-general of Japan in your country. 1 months before.",
        },
        {
          title: "Travel Preparation",
          description:
            "Get a flight ticket and insurance. Prepare daily essentials for you to explore your story in Japan.",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="flex flex-col gap-3 text-center">
    <h1 class="font-bold text-2xl md:text-4xl">Application TimeLine</h1>
    <p class="text-neutral-600">
      Follow these Application to smooth application journey
    </p>
  </div>
  <div
    v-for="(card, index) in timelineCard"
    :key="index"
    class="relative group"
  >
    <!-- Circle marker -->
    <div
      class="absolute bg-gradient-to-r from-green-600 to-green-400 h-8 w-12 rounded-full text-white flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
    >
      {{ index }}
    </div>

    <!-- Vertical gradient line -->
    <div
      class="absolute top-9 left-5 w-0.5 h-full bg-gradient-to-b from-green-600 to-green-100"
    ></div>

    <!-- Timeline card -->
    <div
      class="flex flex-col gap-3 p-3 ml-16 border border-green-200 shadow-sm hover:shadow-xl rounded-xl relative transition-all duration-300"
    >
      <h1 class="font-bold text-md lg:text-xl">{{ card.title }}</h1>
      <p class="text-neutral-600">{{ card.description }}</p>
    </div>
  </div>
  <div>
    <div
      class="absolute bg-gradient-to-r from-green-600 to-green-400 size-10 rounded-full text-white flex items-center justify-center z-10"
    >
      <CircleCheck />
    </div>
    <div
      class="flex flex-col gap-3 p-3 ml-16 border border-green-200 shadow-sm hover:shadow-xl rounded-xl"
    >
      <h1 class="font-bold text-md lg:text-xl">Welcome to Japan!!!</h1>
    </div>
  </div>
</template>
