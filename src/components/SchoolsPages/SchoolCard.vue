<script>
import { ArrowRight, Search } from "lucide-vue-next";
import { schoolDetails } from "../CardData/SchoolsCardData";

export default {
  components: {
    ArrowRight,
    Search,
  },
  data() {
    return {
      schoolDetails,
      searchSchool: "",
    };
  },
  computed: {
    filterSchool() {
      const query = this.searchSchool.trim().toLowerCase();
      if (!query) {
        return this.schoolDetails;
      }
      return this.schoolDetails.filter(
        (school) =>
          school.name.toLowerCase().includes(query) ||
          school.city.toLowerCase().includes(query) ||
          school.street.toLowerCase().includes(query)
      );
    },
  },
};
</script>
<template>
  <div
    class="flex gap-2 p-1 rounded-xl bg-green-50 border border-neutral-200 focus-within:border-green-200"
  >
    <Search class="text-neutral-400 w-full" />
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search for schools..."
      class="outline-none"
      v-model="searchSchool"
    />
  </div>
  <div class="flex flex-wrap gap-10 justify-center">
    <div
      v-for="(detail, index) in filterSchool"
      :key="index"
      class="h-auto w-auto md:w-90 border border-neutral-400 rounded-xl bg-green-100 hover:bg-green-200 hover:border-green-400 hover:scale-105 transition-all duration-300 shadow-xl"
    >
      <img
        :src="detail.image"
        :alt="detail.name"
        class="w-full aspect-[16/9] object-cover rounded-t-xl"
      />

      <div class="px-5 py-2 flex flex-col gap-2 justify-center">
        <h1 class="font-bold">{{ detail.name }}</h1>

        <div class="flex flex-col text-justify">
          <span class="flex gap-1">
            <component :is="detail.icon" class="text-green-600 size-5" />
            <h2 class="text-neutral-900 text-sm text-justify">
              {{ detail.street }}
            </h2>
          </span>
          <h2 class="text-neutral-600 text-sm ml-5">{{ detail.city }}</h2>
        </div>

        <button
          class="px-3 py-2 rounded-xl flex items-center cursor-pointer gap-2 group"
        >
          <span class="text-green-500 group-hover:text-green-600 text-sm"
            >View details</span
          >
          <ArrowRight
            class="size-5 text-green-600 group-hover:translate-x-2 transition-all duration-200"
          />
        </button>
      </div>
    </div>
  </div>
</template>
