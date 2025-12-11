<script>
import { ArrowRight, Search } from "lucide-vue-next";
import { mentorDetails } from "../CardData/MentorCardData";

export default {
  components: {
    ArrowRight,
    Search,
  },
  data() {
    return {
      mentorDetails,
      searchMentor: "",
    };
  },
  computed: {
    filterMentor() {
      const query = this.searchMentor.trim().toLowerCase();
      if (!query) {
        return this.mentorDetails;
      }
      return this.mentorDetails.filter(
        (mentor) =>
          mentor.name.toLowerCase().includes(query) ||
          mentor.city.toLowerCase().includes(query)
      );
    },
  },
};
</script>
<template>
  <template class="flex flex-col justify-center items-center gap-10 p-10">
    <div
      class="flex items-center gap-2 p-1 rounded-xl bg-green-50 border border-neutral-200 focus-within:border-green-200"
    >
      <Search class="text-neutral-400 size-4 w-full" />
      <input
        type="search"
        name="search"
        class="outline-none"
        placeholder="Search for mentor with city, name..."
        v-model="searchMentor"
      />
    </div>

    <div class="flex flex-wrap gap-10 items-center justify-center">
      <div
        v-for="(detail, index) in filterMentor"
        :key="index"
        class="h-auto w-auto md:w-80 border border-neutral-400 rounded-xl bg-green-100 hover:border-green-400 hover:scale-105 transition-all duration-300 shadow-xl flex flex-col items-center p-5"
      >
        <div class="relative">
          <img
            :src="detail.profile"
            class="rounded-full border border-green-600"
          />
          <Component
            :is="detail.BadgeIcon"
            class="size-5 text-white rounded-full absolute top-15 -right-1 bg-green-600"
          />
        </div>
        <div class="text-center">
          <h1 class="font-bold">{{ detail.name }}</h1>
          <span class="text-neutral-600 text-sm">{{ detail.city }}</span>
        </div>
        <div class="flex flex-col items-center text-center">
          <div class="flex items-center gap-1 text-neutral-800">
            <Component :is="detail.webIcon" class="text-green-600 size-4" />
            <span>{{ detail.nationality }}</span>
          </div>
          <p class="italic">"{{ detail.description }}"</p>
          <span>⭐{{ detail.rate }}</span>
        </div>
        <button
          class="px-3 py-1 w-full bg-green-500 rounded-xl flex gap-2 items-center justify-center cursor-pointer"
        >
          <span>View Profile </span>
          <ArrowRight class="size-5" />
        </button>
      </div>
    </div>
  </template>
</template>
s
