<script>
export default {
  data() {
    return {
      form: {
        fname: "",
        lname: "",
        email: "",
        password: "",
        ConfirmPassword: "",
        role: "",
      },
      errorMsg: {},
    };
  },
  methods: {
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    submitForm() {
      this.errorMsg = {};
      if (!this.form.fname) {
        this.errorMsg.fname = "First name must be required.";
      }
      if (!this.form.lname) {
        this.errorMsg.lname = "Last name is required";
      }
      if (!this.form.email) {
        this.errorMsg.email = "You must fill email";

        if (this.validateEmail) {
          this.errors.email = "Invalid email";
        } else {
          this.errors.email = "";
        }
      }
      if (!this.form.password) {
        this.errorMsg.password = "Password must be required";
        if (this.form.password.length < 8) {
          this.errorMsg.password = "Password must be at least 8 characters";
        }
      }
      if (!this.form.ConfirmPassword) {
        this.errorMsg.ConfirmPassword = "Confirm your password";
      } else if (this.form.ConfirmPassword !== this.form.password) {
        this.errorMsg.ConfirmPassword = "Password doesn't match";
      }
      if (!this.form.role) {
        this.errorMsg.role = "Please select a role";
      }
    },
  },
};
</script>

<template>
  <div class="max-w-md mx-auto px-4 sm:px-6 md:px-0">
    <div class="flex flex-col text-center mb-6">
      <h1 class="font-bold text-xl md:text-2xl">Create your account</h1>
      <p class="text-neutral-500 text-xs md:text-sm">
        Fill in the form below to create your account
      </p>
    </div>
    <form class="w-full flex flex-col gap-4" @submit.prevent="submitForm">
      <!-- First name and Last name -->
      <div class="flex flex-col sm:flex-row gap-2">
        <div class="flex-1">
          <label for="fname" class="font-bold text-gray-800 md:text-md text-sm"
            >First Name</label
          >
          <input
            type="text"
            id="fname"
            v-model="form.fname"
            placeholder="John"
            class="w-full px-2 py-2 border border-neutral-300 outline-neutral-500 rounded-md"
          />

          <span v-if="errorMsg.fname" class="text-red-500 text-sm">{{
            errorMsg.fname
          }}</span>
        </div>
        <div class="flex-1">
          <label for="lname" class="font-bold text-gray-800 md:text-md text-sm"
            >Last Name</label
          >
          <input
            type="text"
            id="lname"
            v-model="form.lname"
            placeholder="Doe"
            class="w-full px-2 py-2 border border-neutral-300 outline-neutral-500 rounded-md"
          />
          <span v-if="errorMsg.lname" class="text-red-500 text-sm">{{
            errorMsg.lname
          }}</span>
        </div>
      </div>

      <!-- Email -->
      <div class="flex flex-col">
        <label for="email" class="font-bold text-gray-800 md:text-md text-sm"
          >Email</label
        >
        <input
          type="email"
          id="email"
          v-model="form.email"
          placeholder="m@gmail.com"
          class="w-full px-2 py-2 border border-neutral-300 outline-neutral-500 rounded-md"
        />
        <span v-if="errorMsg.email" class="text-red-500 text-sm">{{
          errorMsg.email
        }}</span>
      </div>

      <!-- Password -->
      <div class="flex flex-col">
        <label for="pswd" class="font-bold text-gray-800"
          >Create New Password</label
        >
        <input
          type="password"
          id="pswd"
          v-model="form.password"
          placeholder="At least 8 characters password"
          class="w-full px-2 py-2 border border-neutral-300 outline-neutral-500 rounded-md"
        />
        <span v-if="errorMsg.password" class="text-red-500 text-sm">{{
          errorMsg.password
        }}</span>
      </div>

      <div class="flex flex-col">
        <label for="Confirmpswd" class="font-bold text-gray-800"
          >Confirm Password</label
        >
        <input
          type="password"
          id="Confirmpswd"
          class="w-full px-2 py-2 border border-neutral-300 outline-neutral-500 rounded-md"
        />
        <span v-if="errorMsg.ConfirmPassword" class="text-red-500 text-sm">{{
          errorMsg.ConfirmPassword
        }}</span>
      </div>

      <!-- Select role -->
      <div class="flex flex-col">
        <label for="role" class="font-bold text-gray-800">Role</label>
        <select
          name="role"
          id="role"
          v-model="form.role"
          class="w-full px-2 py-2 border border-neutral-300 outline-neutral-500 rounded-md"
        >
          <span v-if="errorMsg.role" class="text-red-500 text-sm">{{
            errorMsg.role
          }}</span>
          <option value="" disabled selected>Role</option>
          <option value="mentor">Mentor</option>
          <option value="student">Student</option>
        </select>
      </div>

      <!-- Submit Button -->
      <div
        class="px-3 py-2 bg-green-600 text-white text-center rounded-md cursor-pointer"
      >
        <button class="w-full cursor-pointer">Create Account</button>
      </div>

      <!-- Sign in -->
      <div class="flex flex-wrap justify-center gap-1 text-sm">
        <span class="text-neutral-600">Already have an account?</span>
        <button
          @click="this.$router.push('/login')"
          class="text-neutral-600 underline hover:text-black cursor-pointer"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>
