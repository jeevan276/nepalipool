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
  <div>
    <div class="flex justify-end">
      <select
        v-model="selectedCountry"
        name="country"
        class="p-2 bg-green-600 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-300 cursor-pointer"
      >
        <option value="all">All</option>
        <option value="uk">UK</option>
        <option value="japan">Japan</option>
        <option value="usa">USA</option>
        <option value="australia">Australia</option>
      </select>
    </div>
    <h1 class="font-bold text-4xl mt-5">
      {{
        selectedCountry === "all"
          ? "All Scholarships"
          : selectedCountry.toUpperCase()
      }}
    </h1>
    <!--UK Scholarship-->

    <div class="flex flex-wrap justify-center gap-10">
      <div
        v-for="(detail, index) in filterScholarship"
        :key="index"
        class="p-5 w-auto h-auto md:w-100 bg-green-200 flex flex-col gap-3 justify-center rounded-xl shadow hover:shadow-2xl"
      >
        <div class="flex-1">
          <img
            :src="detail.image"
            :alt="detail.title"
            class="w-full aspect-[16/9] object-cover rounded-t-xl"
          />
        </div>
        <h1 class="font-bold">{{ detail.title }}</h1>
        <p class="text-neutral-700 text-justify">{{ detail.description }}</p>
        <div class="flex gap-5">
          <button
            @click="openWebsite(detail.website)"
            class="px-3 py-1 bg-green-600 text-white font-bold rounded-md cursor-pointer"
          >
            View Website
          </button>
          <button
            @click="$router.push('/mentors')"
            class="px-3 py-1 bg-transparent rounded-md font-bold text-green-600 border border-green-600 cursor-pointer"
          >
            Ask Mentor
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
