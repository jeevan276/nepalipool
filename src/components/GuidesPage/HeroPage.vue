<script>
import { FileText, Plane, School } from "lucide-vue-next";
import ApplicationTimeline from "./ApplicationTimeline.vue";
import AdmissionRequirement from "./AdmissionRequirement.vue";
import VisaProcess from "./VisaProcess.vue";

export default {
  components: {
    FileText,
    School,
    Plane,
    ApplicationTimeline,
    AdmissionRequirement,
    VisaProcess,
  },
  data() {
    return {
      activeSection: "timeline",
    };
  },
  methods: {
    showSection(section) {
      this.activeSection = section;
    },
  },
};
</script>
<template>
  <div class="flex flex-col gap-10 px-20">
    <div class="flex flex-col gap-5 items-center text-center">
      <h1 class="font-bold text-3xl sm:text-md md:text-5xl lg:text-6xl">
        Steps to Apply

        <span
          class="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent"
        >
          Japanese</span
        >
        Language School
      </h1>
      <p class="text-md md:text-xl text-neutral-500 text-">
        Your comprehensive guide to study in japan
      </p>
    </div>
    <nav
      class="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 lg:gap-10 p-2 border border-green-400 rounded-xl"
    >
      <Button
        class="flex gap-3 md:gap-2 text-sm lg:px-20 px-5 py-3 focus:text-white focus:bg-green-600 rounded-xl hover:bg-green-50 cursor-pointer hover:text-green-600"
        :class="activeSection === 'timeline' ? 'bg-green-600 text-white' : ''"
        @click="showSection('timeline')"
        ><Plane /> Application Timeline</Button
      >

      <Button
        class="flex gap-3 md:gap-2 text-sm px-5 lg:px-20 py-3 focus:text-white focus:bg-green-600 hover:bg-green-50 rounded-xl cursor-pointer hover:text-green-600"
        @click="showSection('admission')"
        ><School /> Admission Requirements</Button
      >
      <Button
        class="flex gap-3 md:gap-2 text-sm px-5 lg:px-20 py-3 focus:text-white focus:bg-green-600 hover:bg-green-50 rounded-xl cursor-pointer hover:text-green-600"
        @click="showSection('visa')"
        ><FileText /> Visa Process</Button
      >
    </nav>
    <div>
      <div class="flex flex-col gap-10 mb-20">
        <ApplicationTimeline v-if="activeSection == 'timeline'" />
      </div>
      <div class="flex flex-col gap-10 mb-20">
        <AdmissionRequirement v-if="activeSection === 'admission'" />
      </div>
      <div class="flex flex-col gap-10 mb-20">
        <VisaProcess v-if="activeSection === 'visa'" />
      </div>
    </div>
  </div>
</template>
