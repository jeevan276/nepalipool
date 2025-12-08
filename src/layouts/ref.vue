<template>
  <div class="max-w-md mx-auto px-4 sm:px-6 md:px-0">
    <div class="flex flex-col text-center mb-6">
      <h1 class="font-bold text-2xl">Create your account</h1>
      <p class="text-neutral-500 text-sm">
        Fill in the form below to create your account
      </p>
    </div>
    <form @submit.prevent="submitForm" class="w-full flex flex-col gap-4">
      <!-- First and Last Name -->
      <div class="flex flex-col sm:flex-row gap-2">
        <div class="flex-1">
          <label for="fname" class="font-bold text-gray-800">First Name</label>
          <input
            type="text"
            id="fname"
            v-model="form.fname"
            class="w-full px-2 py-2 border border-neutral-300 rounded-md"
          />
          <span v-if="errors.fname" class="text-red-500 text-sm">{{
            errors.fname
          }}</span>
        </div>
        <div class="flex-1">
          <label for="lname" class="font-bold text-gray-800">Last Name</label>
          <input
            type="text"
            id="lname"
            v-model="form.lname"
            class="w-full px-2 py-2 border border-neutral-300 rounded-md"
          />
          <span v-if="errors.lname" class="text-red-500 text-sm">{{
            errors.lname
          }}</span>
        </div>
      </div>

      <!-- Email -->
      <div class="flex flex-col">
        <label for="email" class="font-bold text-gray-800">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          class="w-full px-2 py-2 border border-neutral-300 rounded-md"
        />
        <span v-if="errors.email" class="text-red-500 text-sm">{{
          errors.email
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
          class="w-full px-2 py-2 border border-neutral-300 rounded-md"
        />
        <span v-if="errors.password" class="text-red-500 text-sm">{{
          errors.password
        }}</span>
      </div>

      <!-- Confirm Password -->
      <div class="flex flex-col">
        <label for="Confirmpswd" class="font-bold text-gray-800"
          >Confirm Password</label
        >
        <input
          type="password"
          id="Confirmpswd"
          v-model="form.confirmPassword"
          class="w-full px-2 py-2 border border-neutral-300 rounded-md"
        />
        <span v-if="errors.confirmPassword" class="text-red-500 text-sm">{{
          errors.confirmPassword
        }}</span>
      </div>

      <!-- Role -->
      <div class="flex flex-col">
        <label for="role" class="font-bold text-gray-800">Role</label>
        <select
          id="role"
          v-model="form.role"
          class="w-full px-2 py-2 border border-neutral-300 rounded-md"
        >
          <option value="" disabled selected>Role</option>
          <option value="mentor">Mentor</option>
          <option value="student">Student</option>
        </select>
        <span v-if="errors.role" class="text-red-500 text-sm">{{
          errors.role
        }}</span>
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

<script>
export default {
  data() {
    return {
      form: {
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      },
      errors: {},
    };
  },
  methods: {
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    submitForm() {
      this.errors = {};

      // First Name
      if (!this.form.fname) this.errors.fname = "First name is required";
      // Last Name
      if (!this.form.lname) this.errors.lname = "Last name is required";
      // Email
      if (!this.form.email) this.errors.email = "Email is required";
      else if (!this.validateEmail(this.form.email))
        this.errors.email = "Invalid email";
      // Password
      if (!this.form.password) this.errors.password = "Password is required";
      else if (this.form.password.length < 8)
        this.errors.password = "Password must be at least 8 characters";
      // Confirm Password
      if (!this.form.confirmPassword)
        this.errors.confirmPassword = "Confirm your password";
      else if (this.form.confirmPassword !== this.form.password)
        this.errors.confirmPassword = "Passwords do not match";
      // Role
      if (!this.form.role) this.errors.role = "Please select a role";

      // If no errors, submit form
      if (Object.keys(this.errors).length === 0) {
        alert("Form submitted successfully!");
        // Reset form
        this.form = {
          fname: "",
          lname: "",
          email: "",
          password: "",
          confirmPassword: "",
          role: "",
        };
      }
    },
  },
};
</script>
