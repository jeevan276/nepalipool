<script>
import RegisterPage from "@/layouts/RegisterPage.vue";

export default {
  name: "HomePage",
  components: {
    RegisterPage,
  },
};
</script>
<template>
  <div class="flex flex-col gap-5">
    <section class="px-4 sm:px-6 lg:px-12 py-7 lg:py-15">
      <div class="max-w-4xl mx-auto">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center lg:text-left"
        >
          Your Trusted Mentor to Study
          <span
            class="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
          >
            Abroad
          </span>
          From
          <span
            class="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent"
          >
            Nepal
          </span>
        </h1>
      </div>
    </section>
    <p
      class="text-center text-sm px-10 lg:text-2xl sm:text-md md:px-40 lg:px-65"
    >
      Helping Nepali students choose the right college, city, and future — with
      expert guidance from someone who's been there.
    </p>
    <div class="flex justify-center item-center gap-5">
      <RouterLink
        to="/register"
        class="p-3 rounded-md bg-green-600 shadow-2xl text-white font-bold"
        >Start as a Mentor</RouterLink
      >
      <!-- Using Button -->
      <!-- <button @click="this.$router.push('/register')" class="cursor-pointer"> 
        Start as a Mentor
      </button>
      -->
      <RouterLink
        to="/register"
        class="p-3 rounded-md font-bold text-green-600 border-2 border-green-600 shadow-2xl"
        >Start as a Student</RouterLink
      >
    </div>
  </div>
</template>
