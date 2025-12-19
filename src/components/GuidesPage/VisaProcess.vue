<script>
import { CircleCheck } from "lucide-vue-next";

export default {
  components: {
    CircleCheck,
  },
  data() {
    return {
      applicationCard: [
        {
          title: "Application Submission",
          description:
            "Start with filling out the school's application form thoroughly. Then, submit all necessary documents as previously mentioned, which encompass academic certificates, transcripts, photographs, and any other required paperwork. This step is crucial for a successful application process.",
        },
        {
          title: "Document Review and Submission",
          description:
            "After receiving your documents, our team and school will review them. If additional information is required or corrections are needed, we will guide you through this process.",
        },
        {
          title: "Waiting for COE Approval",
          description:
            "The COE approval process by immigration typically takes about 2-3 months. Be aware that applications can be rejected for various reasons, such as falsified documents, incorrect application details, inaccurate educational history, or insufficient financial backing from the sponsor.",
        },
        {
          title: "Post-Approval Steps",
          description:
            "Once the COE is approved (usually 5-6 weeks before the course starts), the school will send you a copy of your COE, an invoice for tuition (and any other requested fees), and an acceptance letter. It's crucial to make the payment by the due date to receive the original COE via mail.",
        },
        {
          title: "Apply to Student Visa",
          description:
            "With the COE documents, apply for visa at the embassy/consulate-general of Japan in your country. 1 months before.",
        },
      ],
      studentVisaDetails: [
        {
          type: "Student Visa Documents",
          documents: [
            "The original COE",
            "The acceptance letter from the school",
            "A valid passport",
            "A recent passport-sized photo taken within the last six months",
            "The completed student visa application form",
          ],
        },
      ],
    };
  },
};
</script>
<template>
  <div class="flex flex-col gap-3 text-center">
    <h1 class="font-bold text-2xl md:text-4xl">
      Student Visa Application Process
    </h1>
    <p class="text-neutral-600">
      Your step-by-step guide to obtaining your student visa
    </p>
    <div
      class="text-left px-10 lg:px-20 py-5 bg-green-50 border border-green-600 text-neutral-600 rounded-xl flex flex-col gap-5"
    >
      <p>
        Selecting the right school is crucial and should be based on factors
        like teaching style, course offerings, and location.
      </p>
      <p>
        the school application and submitting all required documents, the school
        applies for a Certificate of Eligibility (COE) on the student's behalf,
        which typically takes 2-3 months to process.
      </p>
      <p>
        Once the COE is granted, the student can then apply for a student visa
        at the nearest Japanese embassy or consulate, providing the COE, a valid
        passport, and other necessary documents. After completing
      </p>
    </div>
  </div>

  <div
    v-for="(card, index) in applicationCard"
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
      v-for="(item, i) in studentVisaDetails"
      :key="i"
      class="flex flex-col gap-3 p-3 ml-16 border border-green-200 shadow-sm hover:shadow-xl rounded-xl"
    >
      <h1 class="font-bold text-md lg:text-xl">
        {{ item.type }}
      </h1>
      <ul class="list-disc ml-10">
        <li
          v-for="(list, i) in item.documents"
          :key="i"
          class="text-neutral-600"
        >
          {{ list }}
        </li>
      </ul>
    </div>
  </div>
</template>
