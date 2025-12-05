<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    ChevronRight: {
      type: Object,
      required: true,
    },
    route: {
      type: String,
      required: false,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {
    goToRoute() {
      if (this.route) {
        this.$router.push(this.route);
      }
    },
  },
};
</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <component
      :is="icon"
      class="size-12 p-1 rounded-md text-white bg-gradient-to-r from-emerald-600 to-green-600"
    />

    <h1 class="font-bold text-md md:text-xl text-center">{{ title }}</h1>
    <p class="text-justify text-neutral-500">{{ description }}</p>
    <button
      @click="goToRoute"
      class="px-4 py-2 bg-green-600 rounded-md text-white cursor-pointer flex items-center"
    >
      <span>
        {{ buttonText }}
      </span>
      <component :is="ChevronRight" class="size-5" />
    </button>
  </div>
</template>
