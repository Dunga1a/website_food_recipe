<template>
  <button
    class="px-4 py-4 rounded-full bg-[#77c2a0] text-[#2b4874] border-[#2b4874] border-[2px] hover:underline"
  >
    {{ this.title }}
  </button>
</template>

<script>
export default {
  name: 'ButtonMore',
  props: {
    title: String
  }
}
</script>

<style></style>
