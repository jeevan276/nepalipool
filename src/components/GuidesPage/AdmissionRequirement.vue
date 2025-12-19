<script>
import { FileText, UsersRound } from "lucide-vue-next";

export default {
  components: {
    FileText,
    UsersRound,
  },
  data() {
    return {
      card1Details: [
        {
          title: "Eligibility Requirements for Applicants",
          description:
            "Applicants must be at least 18 years old and have completed 12 years of formal education, including elementary school, to be eligible for admission to Japanese language schools. Depending on the applicant's nationality, proof of Japanese language proficiency, such as a JLPT N5 certificate or evidence of 150 hours of Japanese language study, may be required. The application process involves submitting several documents, including passport photographs, a copy of the passport, academic transcripts or certificates, and an essay explaining the motivation for studying in Japan. The application periods for enrollments typically occur four times a year, corresponding to the April, July, October, and January intake periods. Applicants from OECD countries generally face a more streamlined documentation process, while those from non-OECD countries might need to provide additional documentation like a birth certificate and proof of financial capability.",
        },
        {
          title: "Application Documents",
          description:
            "Document requirements can differ based on personal situations, with potential requests for extra paperwork. All original documents need a Japanese translation, for which you can seek help from your school. Typically, papers from academic or public bodies should be up-to-date, preferably issued in the last three months.",
        },
      ],
      card2Details: [
        {
          title: "Completed School Application Form",
          description:
            "Applicants are required to fill out and submit the school's specific enrollment application.",
        },
        {
          title: "Final Education Certificate",
          description:
            "This includes either a graduation certificate or a degree from the most recent school or college attended. Applicants currently in school should provide a certificate of enrollment.",
        },
        {
          title: "Latest Academic Transcript",
          description:
            "A transcript from the most recent educational institution the applicant has attended.",
        },
        {
          title: "Recent Photographs",
          description:
            "Six to eight photographs sized 3cm by 4cm, taken within the past three months, with one photo to be attached to the enrollment application.",
        },
        {
          title: "Family Register Copy",
          description: "A copy of the applicant's family register.",
        },
        {
          title: "Proof of Employment",
          description:
            " A certificate issued by the employer, necessary only for applicants who have work experience.",
        },
        {
          title: "Passport Copy",
          description:
            "Required for applicants with a valid passport. Those who have visited Japan before need to include copies of the passport pages showing Japanese entry visas.",
        },
        {
          title: "Japanese Language Proficiency Evidence",
          description:
            "Relevant only for applicants possessing such documentation, like results or score reports from Japanese language exams (e.g., EJU, JLPT, JPT).",
        },
      ],
      card3Details: [
        {
          type: "Sponsor in Japan",
          documents: [
            "Letter of Support to the Minister of Justice with a registered seal or signature",
            "Employment certificate or business registration certificate",
            "Tax payment certificates",
            "Resident register or alien registration card (for foreign residents in Japan)",
            "Seal registration certificate",
            "Proof of relationship with the applicant (e.g., family register, birth certificate)",
            "Bank and income statements in the sponsor's name (JPY or USD), suggested minimum: JPY 2,000,000 – 3,000,000",
          ],
        },
        {
          type: "Sponsor Outside Japan",
          documents: [
            "Letter of Support to the Minister of Justice with a registered seal or signature",
            "Employment certificate or business registration certificate",
            "Tax payment certificates",
            "Proof of relationship with the applicant (e.g., family register, birth certificate)",
            "Tax payment certificate showing earnings/income over the past three years",
            "Bank and income statements in the sponsor's name (JPY or USD), suggested minimum: JPY 2,000,000 – 3,000,000",
          ],
        },
        {
          type: "Self-Financing Applicant",
          documents: [
            "Bank statement in the applicant's name (JPY or USD), suggested minimum: JPY 2,000,000 – 3,000,000",
            "Documentation showing annual income",
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
      School Admission Requirements
    </h1>
    <p class="text-neutral-600">
      Everything you need to know about the application process
    </p>
  </div>
  <div v-for="(card1, index) in card1Details" :key="index">
    <div
      class="flex flex-col gap-4 p-5 md:p-10 bg-green-50 rounded-xl border border-green-500"
    >
      <h1 class="flex gap-2 items-center font-bold text-xl md:text-2xl">
        <FileText class="text-green-600" /> {{ card1.title }}
      </h1>
      <p class="text-justify text-neutral-800">{{ card1.description }}</p>
    </div>
  </div>
  <h1 class="flex items-center gap-2 font-bold text-xl mb-5">
    <FileText /> Documents Required from the Applicant
  </h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <div
      v-for="(card2, index) in card2Details"
      :key="index"
      class="flex flex-col gap-4 p-5 rounded-xl border border-neutral-500 bg-white hover:shadow-lg hover:shadow-green-100 transition-all duration-300 h-full hover:border-green-600"
    >
      <h1 class="font-bold text-lg">{{ card2.title }}</h1>
      <p class="text-neutral-700 flex-1">{{ card2.description }}</p>
    </div>
  </div>

  <h1 class="flex items-center gap-2 font-bold text-xl mt-5">
    <UsersRound class="text-green-600" /> Documents Required from the Sponsor
  </h1>
  <div
    v-for="(card3, index) in card3Details"
    :key="index"
    class="p-5 bg-green-50 rounded-xl border border-green-600"
  >
    <h1 class="font-bold text-green-600">{{ card3.type }}</h1>
    <ul class="list-disc list-inside text-neutral-700">
      <li v-for="(doc, i) in card3.documents">{{ doc }}</li>
    </ul>
  </div>
</template>
