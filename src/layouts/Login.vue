<script>
export default {
  data() {
    return {};
  },
};
</script>
<template>
  <div class="w-full flex items-center justify-center">
    <form action="" class="flex flex-col gap-5">
      <div class="flex flex-col text-center mb-6">
        <h1 class="font-bold md:text-2xl text-xl">Login to your account</h1>
        <p class="text-neutral-500 md:text-sm text-xs">
          Enter your email below to login to your account
        </p>
      </div>
      <div class="flex flex-col flex-1 gap-2">
        <label for="email" class="text-sm">Email</label>
        <input
          type="email"
          placeholder="m@example.com"
          class="px-2 py-1 outline-none focus:ring-2 focus:ring-neutral-400 rounded-md border border-neutral-300"
        />
      </div>
      <div class="flex flex-col flex-1 gap-2">
        <label for="password" class="flex justify-between">
          <h2 class="text-sm">Password</h2>
          <button class="text-sm hover:underline cursor-pointer">
            Forgot your password?
          </button>
        </label>
        <input
          type="password"
          placeholder=""
          class="px-2 py-1 outline-none focus:ring-2 focus:ring-neutral-400 rounded-md border border-neutral-300"
        />
      </div>
      <div class="px-3 py-2 text-center text-white bg-green-600 rounded-xl">
        <button>Login</button>
      </div>
      <div class="flex flex-wrap justify-center gap-1 text-sm">
        <span class="text-neutral-600">Don't have an account?</span>
        <button
          @click="this.$router.push('/register')"
          class="text-neutral-600 underline hover:text-black cursor-pointer"
        >
          Sign up
        </button>
      </div>
    </form>
  </div>
</template>
