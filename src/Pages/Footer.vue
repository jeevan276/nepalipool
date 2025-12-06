<script>
import { Facebook, Github, Instagram, Youtube } from "lucide-vue-next";

export default {
  components: {
    Facebook,
    Youtube,
    Instagram,
    Github,
  },
  data() {
    return {};
  },
};
</script>
<template>
  <footer class="border border-neutral-300">
    <section
      class="flex flex-col md:flex-row md:justify-around md:items-start p-4 gap-6"
    >
      <div>
        <RouterLink to="/" class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <img
              src="/logoTransparent.png"
              alt="npl"
              class="size-10 rounded-md shadow-md border border-neutral-100"
            />
            <h1 class="font-bold text-xl">NepaliPool</h1>
          </div>
          <hr class="w-20 border-2 border-green-600" />
          <span>Connecting dreams to reality</span>
        </RouterLink>
        <div>
          <h2 class="font-bold">Follow Us</h2>
          <div class="flex gap-5">
            <button
              class="p-2 border border-neutral-400 rounded-xl text-neutral-700 cursor-pointer hover:text-white hover:bg-green-700"
            >
              <Facebook />
            </button>
            <button
              class="p-2 border border-neutral-400 rounded-xl text-neutral-700 cursor-pointer hover:text-white hover:bg-green-700"
            >
              <Instagram />
            </button>
            <button
              class="p-2 border border-neutral-400 rounded-xl text-neutral-700 cursor-pointer hover:text-white hover:bg-green-700"
            >
              <Youtube />
            </button>
            <button
              class="p-2 border border-neutral-400 rounded-xl text-neutral-700 cursor-pointer hover:text-white hover:bg-green-700"
            >
              <Github />
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1 class="font-bold">Explore</h1>
        <nav class="flex flex-col">
          <router-link to="/" class="hover:text-green-600">Home</router-link>
          <router-link to="/about" class="hover:text-green-600"
            >About Us</router-link
          >
          <router-link to="/pricing" class="hover:text-green-600"
            >Pricing</router-link
          >
          <router-link to="/schools" class="hover:text-green-600"
            >Schools</router-link
          >
          <router-link to="/mentors" class="hover:text-green-600"
            >Mentors</router-link
          >
          <router-link to="/blogs" class="hover:text-green-600"
            >Blogs</router-link
          >
        </nav>
      </div>
      <div>
        <h1 class="font-bold">Details</h1>
        <nav class="flex flex-col">
          <router-link to="/blogs" class="hover:text-green-600"
            >Blogs</router-link
          >
          <router-link to="/faq" class="hover:text-green-600">FAQs</router-link>
          <router-link to="/support" class="hover:text-green-600"
            >Support</router-link
          >
          <router-link to="/developers" class="hover:text-green-600"
            >Developers</router-link
          >
        </nav>
      </div>
      <div>
        <h1 class="font-bold">Legal</h1>
        <nav class="flex flex-col">
          <router-link to="/terms" class="hover:text-green-600">
            Terms</router-link
          >
          <router-link to="/privacy-policy" class="hover:text-green-600"
            >Privacy Policy</router-link
          >
          <router-link to="/refund-POlicy" class="hover:text-green-600"
            >Refund Policy</router-link
          >
          <router-link to="/cancellation" class="hover:text-green-600"
            >Cancellation</router-link
          >
        </nav>
      </div>
      <div>
        <h1 class="font-bold">Contact Us</h1>
        <nav class="flex flex-col gap-1">
          <span>Butwal, Nepal</span>
          <span>9800000000</span>
          <span>9800000000</span>
          <a
            href="mailto:support@nepalipool.com"
            class="hover:text-blue-600 hover:underline"
          >
            support@nepalipool.com
          </a>
        </nav>
      </div>
    </section>
    <div class="m-3 p-3 bg-red-100 rounded-xl border border-red-200">
      <p class="text-sm text-justify text-red-500">
        महत्वपूर्ण: यो प्लेटफर्म विद्यार्थीहरूलाई mentor सँग जोडेर आफैं
        application गर्न सिकाउने शैक्षिक माध्यम हो। हामी कन्सल्टेन्सी वा भिसा
        एजेन्सी होइनौं। भिसा पाउने कि नपाउने भन्ने कुरा पूर्ण रूपमा embassy र
        immigration को निर्णयमा निर्भर गर्दछ।
      </p>
    </div>
  </footer>
  <h3 class="text-center p-5">
    Copyright © 2025 NepaliPool. All rights reserved.
  </h3>
</template>
