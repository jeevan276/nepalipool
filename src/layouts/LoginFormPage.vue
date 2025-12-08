<script>
import { ArrowLeft } from "lucide-vue-next";

import Login from "./Login.vue";

export default {
  name: "RegisterPage",
  components: {
    ArrowLeft,
    Login,
  },
};
</script>
<template>
  <template class="grid lg:grid-cols-2">
    <div class="flex flex-col px-10">
      <div class="flex md:justify-between gap-20 p-10">
        <RouterLink to="/" class="flex gap-3">
          <img
            src="/logoTransparent.png"
            alt="npl"
            class="size-10 rounded-md shadow-sm"
          />
          <h1 class="font-bold my-2 md:text-xl text-md">NepaliPool</h1>
        </RouterLink>
        <div
          class="px-3 py-1 bg-green-100 hover:bg-green-200 rounded-md h-8 w-12"
        >
          <ArrowLeft
            class="text-green-600 transition-all hover:-translate-x-1"
          />
        </div>
      </div>
      <Login />
    </div>
    <div
      class="hidden lg:flex items-center justify-center bg-neutral-100 min-h-screen"
    >
      <RouterLink to="/" class="shadow-xl">
        <img
          src="/logoTransparent.png"
          alt="npl"
          class="size-50 rounded-md shadow-sm"
        />
      </RouterLink>
    </div>
  </template>
</template>
