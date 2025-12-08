<template>
  <div
    class="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4"
  >
    <div class="bg-white px-10 py-8 rounded-lg shadow-lg w-full max-w-2xl">
      <form class="flex flex-col gap-6">
        <!-- Basic Information -->
        <h1 class="font-bold text-2xl border-b pb-2 mb-4">Basic Information</h1>
        <div class="flex flex-col md:flex-row gap-5">
          <div class="flex flex-col gap-2 flex-1">
            <label for="fname" class="font-semibold">First Name</label>
            <input
              type="text"
              id="fname"
              placeholder="Ram"
              class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div class="flex flex-col gap-2 flex-1">
            <label for="lname" class="font-semibold">Last Name</label>
            <input
              type="text"
              id="lname"
              placeholder="Thapa"
              class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <label for="email" class="font-semibold">Email</label>
          <input
            type="text"
            id="email"
            placeholder="ramthapa@gmail.com"
            class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="font-semibold">Is Passport Made?</label>
          <div class="flex gap-6 mt-1">
            <label class="flex items-center gap-1"
              ><input type="radio" value="Yes" name="psw" /> Yes</label
            >
            <label class="flex items-center gap-1"
              ><input type="radio" value="No" name="psw" /> No</label
            >
          </div>
        </div>

        <!-- Address -->
        <h1 class="font-bold text-2xl border-b pb-2 mb-4">Address</h1>
        <div class="flex flex-col md:flex-row gap-5">
          <div class="flex flex-col gap-2 flex-1">
            <label for="caddress" class="font-semibold"
              >Temporary Address</label
            >
            <input
              type="text"
              id="caddress"
              class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div class="flex flex-col gap-2 flex-1">
            <label for="Paddress" class="font-semibold"
              >Permanent Address</label
            >
            <input
              type="text"
              id="Paddress"
              class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
        </div>

        <!-- Additional Information -->
        <h1 class="font-bold text-2xl border-b pb-2 mb-4">
          Additional Information
        </h1>
        <div class="flex flex-col md:flex-row gap-5">
          <div class="flex flex-col gap-2 flex-1">
            <label for="passDate10" class="font-semibold"
              >Class 10 Pass Out Date</label
            >
            <input
              type="date"
              id="passDate10"
              class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div class="flex flex-col gap-2 flex-1">
            <label for="passDate12" class="font-semibold"
              >Class 12 Pass Out Date</label
            >
            <input
              type="date"
              id="passDate12"
              class="px-3 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
