<script setup>
import Navbar from "../components/ketoinpearls/Navbar/Navbar.vue";
import Footer from "../components/ketoinpearls/Footer/Footer.vue";
</script>

<template>
  <div>
    <Navbar />
    <main class="max-w-[1200px] mx-auto drop-shadow-xl px-2">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
