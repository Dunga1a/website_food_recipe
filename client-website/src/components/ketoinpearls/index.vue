<template>
  <div>
    <Navbar />
    <main class="max-w-[1200px] mx-auto drop-shadow-xl px-2">
      <router-view />
      <Footer />
    </main>
  </div>
</template>

<script>
import Navbar from './Navbar/Navbar.vue'
import Footer from './Footer/Footer.vue'
export default {
  name: 'KetoinIndex',
  components: { Navbar, Footer }
}
</script>

<style></style>
