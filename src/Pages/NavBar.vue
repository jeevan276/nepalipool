<script>
import { Menu, X } from "lucide-vue-next";
import { RouterLink } from "vue-router";

export default {
  name: "NavPage",
  components: {
    Menu,
    X,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
<template>
  <header class="shadow-md px-10 lg:py-4 py-1">
    <nav class="hidden lg:flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-3">
        <img
          src="/logoTransparent.png"
          alt="npl"
          class="size-10 rounded-md shadow-sm"
        />
        <h1 class="font-bold text-xl">NepaliPool</h1>
      </RouterLink>
      <div class="flex gap-10">
        <RouterLink
          to="/"
          class="px-3 py-1 hover:text-green-600 hover:rounded-md"
          :class="
            $route.path === '/'
              ? 'text-green-600 bg-green-50 rounded-md'
              : 'text-black'
          "
        >
          Home
        </RouterLink>
        <RouterLink
          to="/schools"
          class="px-3 py-1 hover:text-green-600 hover:rounded-md"
          :class="
            $route.path === '/schools'
              ? 'text-green-600 bg-green-50 rounded-md'
              : 'text-black'
          "
        >
          Schools
        </RouterLink>
        <RouterLink
          to="/mentors"
          class="px-3 py-1 hover:text-green-600 hover:rounded-md"
          :class="
            $route.path === '/mentors'
              ? 'text-green-600 bg-green-50 rounded-md'
              : 'text-black'
          "
        >
          Mentors
        </RouterLink>
        <RouterLink
          to="/scholarships"
          class="px-3 py-1 hover:text-green-600 hover:rounded-md"
          :class="
            $route.path === '/scholarships'
              ? 'text-green-600 bg-green-50 rounded-md'
              : 'text-black'
          "
        >
          Scholarships
        </RouterLink>
        <RouterLink
          to="/guides"
          class="px-3 py-1 hover:text-green-600 hover:rounded-md"
          :class="
            $route.path === '/guides'
              ? 'text-green-600 bg-green-50 rounded-md'
              : 'text-black'
          "
        >
          Guides
        </RouterLink>
      </div>
      <div class="flex items-center gap-3">
        <RouterLink
          to="/login"
          class="py-2 px-3 rounded-md hover:text-green-600 hover:bg-green-50"
        >
          Login
        </RouterLink>
        <RouterLink
          to="/register"
          class="py-1 px-3 bg-green-700 text-white rounded-md transition-all ease-in-out duration-100 hover:scale-105 hover:bg-green-800"
        >
          Register
        </RouterLink>
      </div>
    </nav>
    <nav class="lg:hidden relative">
      <!-- Top Bar -->
      <div class="flex justify-between items-center py-0.5">
        <RouterLink to="/" class="flex items-center gap-3">
          <img
            src="/logoTransparent.png"
            alt="npl"
            class="size-10 rounded-md shadow-sm"
          />
          <h1 class="font-bold text-md">NepaliPool</h1>
        </RouterLink>

        <button
          @click="toggleSideBar"
          class="cursor-pointer p-1 bg-white/5 border border-neutral-300 rounded-md backdrop-blur-md"
        >
          <Menu v-if="!isShow" />
          <X v-else />
        </button>
      </div>

      <!-- Overlay -->
      <div
        v-show="isShow"
        class="fixed inset-0 bg-black/40 z-40"
        @click="toggleSideBar"
      ></div>

      <!-- Sidebar Menu -->
      <transition name="slide">
        <div
          v-if="isShow"
          class="fixed right-0 top-0 h-full w-60 bg-white shadow-xl p-5 z-50 flex flex-col justify-between"
        >
          <!-- Menu List -->
          <div class="flex flex-col gap-3">
            <div
              class="flex justify-between items-center cursor-pointer border-b border-neutral-400 w-full"
            >
              <h2 class="text-lg font-semibold mb-3">Menu</h2>
              <X
                @click="toggleSideBar"
                class="bg-white/5 border border-neutral-300 rounded-md backdrop-blur-md"
              />
            </div>
            <RouterLink
              to="/"
              class="px-3 py-2 rounded-md hover:bg-green-50"
              :class="
                $route.path === '/'
                  ? 'text-green-600 bg-green-50'
                  : 'text-black'
              "
              @click="toggleSideBar"
            >
              Home
            </RouterLink>

            <RouterLink
              to="/schools"
              class="px-3 py-2 rounded-md hover:bg-green-50"
              :class="
                $route.path === '/schools'
                  ? 'text-green-600 bg-green-50'
                  : 'text-black'
              "
              @click="toggleSideBar"
            >
              Schools
            </RouterLink>

            <RouterLink
              to="/mentors"
              class="px-3 py-2 rounded-md hover:bg-green-50"
              :class="
                $route.path === '/mentors'
                  ? 'text-green-600 bg-green-50'
                  : 'text-black'
              "
              @click="toggleSideBar"
            >
              Mentors
            </RouterLink>

            <RouterLink
              to="/scholarships"
              class="px-3 py-2 rounded-md hover:bg-green-50"
              :class="
                $route.path === '/scholarships'
                  ? 'text-green-600 bg-green-50'
                  : 'text-black'
              "
              @click="toggleSideBar"
            >
              Scholarships
            </RouterLink>
            <RouterLink
              to="/guides"
              class="px-3 py-2 rounded-md hover:bg-green-50"
              :class="
                $route.path === '/guides'
                  ? 'text-green-600 bg-green-50'
                  : 'text-black'
              "
              @click="toggleSideBar"
            >
              Guides
            </RouterLink>
          </div>

          <div class="flex flex-col gap-3">
            <RouterLink
              to="/login"
              class="px-3 py-2 text-center rounded-md hover:bg-green-50"
              @click="toggleSideBar"
            >
              Login
            </RouterLink>

            <RouterLink
              to="/register"
              class="px-3 py-2 text-center rounded-md bg-green-600 text-white hover:bg-green-700"
              @click="toggleSideBar"
            >
              Register
            </RouterLink>
            <RouterLink to="/" class="flex flex-col items-center gap-3">
              <img
                src="/logoTransparent.png"
                alt="npl"
                class="size-10 rounded-md shadow-sm"
              />
              <h1 class="font-bold text-md">Your Dream,Our Success</h1>
            </RouterLink>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>
<style scoped>
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-enter-active {
  transition: transform 0.25s ease;
}

.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}
.slide-leave-active {
  transition: transform 0.25s ease;
}
</style>
