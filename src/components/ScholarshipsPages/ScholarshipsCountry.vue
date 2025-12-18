<script>
import { australiaCardData } from "../CardData/ScholarshipsCardData/AustraliacardData";
import { japanCardData } from "../CardData/ScholarshipsCardData/japanCardData";
import { ukCardData } from "../CardData/ScholarshipsCardData/UKCardData";
import { usaCardData } from "../CardData/ScholarshipsCardData/usaCardData";

export default {
  data() {
    return {
      selectedCountry: "all",

      ukCardData,
      japanCardData,
      usaCardData,
      australiaCardData,
    };
  },
  methods: {
    openWebsite(url) {
      window.open(url, "_blank");
    },
  },
  computed: {
    filterScholarship() {
      if (this.selectedCountry === "all") {
        return [
          ...this.ukCardData,
          ...this.japanCardData,
          ...this.usaCardData,
          ...this.australiaCardData,
        ];
      }
      const map = {
        uk: this.ukCardData,
        japan: this.japanCardData,
        usa: this.usaCardData,
        australia: this.australiaCardData,
      };
      return map[this.selectedCountry];
    },
  },
};
</script>
<template>
  <div class="px-4 sm:px-6 lg:px-10">
    <!-- Filter -->
    <div class="flex justify-end mb-4">
      <select
        v-model="selectedCountry"
        name="country"
        class="p-2 bg-green-600 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-green-300 cursor-pointer text-sm sm:text-base"
      >
        <option value="all">All</option>
        <option value="uk">UK</option>
        <option value="japan">Japan</option>
        <option value="usa">USA</option>
        <option value="australia">Australia</option>
      </select>
    </div>

    <!-- Heading -->
    <h1 class="font-bold text-2xl sm:text-3xl lg:text-4xl mb-6">
      {{
        selectedCountry === "all"
          ? "All Scholarships"
          : selectedCountry.toUpperCase()
      }}
    </h1>

    <!-- Scholarship Cards -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <div
        v-for="(detail, index) in filterScholarship"
        :key="index"
        class="bg-green-200 rounded-xl shadow hover:shadow-2xl transition duration-300 flex flex-col"
      >
        <!-- Image -->
        <img
          :src="detail.image"
          :alt="detail.title"
          class="w-full aspect-[16/9] object-cover rounded-t-xl"
        />

        <!-- Content -->
        <div class="p-4 flex flex-col flex-1 gap-3">
          <h1 class="font-bold text-lg">{{ detail.title }}</h1>

          <p class="text-neutral-700 text-sm text-justify flex-1">
            {{ detail.description }}
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 mt-3">
            <button
              @click="openWebsite(detail.website)"
              class="px-2 py-2 bg-green-600 text-white font-bold rounded-md w-full sm:w-auto"
            >
              View Website
            </button>

            <button
              @click="$router.push('/mentors')"
              class="px-2 py-2 border border-green-600 text-green-600 font-bold rounded-md w-full sm:w-auto"
            >
              Ask Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
