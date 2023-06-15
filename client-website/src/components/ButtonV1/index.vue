<template>
  <button
    type="button"
    class="flex items-center text-base font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg px-5 py-2.5 text-center mr-2 my-2"
  >
    {{ label }}
    <font-awesome-icon :icon="icon" beat-fade class="ml-1 text-[18px]" />
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["label", "icon"]);

// Import the necessary FontAwesomeIcon component

// Register the FontAwesomeIcon component globally
</script>

<style></style>

<style scoped></style>
