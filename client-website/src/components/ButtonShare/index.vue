<template>
  <div>
    <p class="mb-3 font-bold">Share this post</p>
    <div class="text-white">
      <button
        @click="PinterestShare"
        class="px-3 py-2 bg-[#77c2a0] hover:opacity-70 mr-2"
        target="_blank"
      >
        <font-awesome-icon icon="fa-brands fa-pinterest-p" />
        Pinterest
      </button>
      <button @click="FbShare" class="px-3 py-2 bg-[#77c2a0] hover:opacity-70 mr-2" target="_blank">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
        Facebook
      </button>
      <button @click="TwitterShare" class="px-3 py-2 bg-[#77c2a0] hover:opacity-70" target="_blank">
        <font-awesome-icon :icon="['fab', 'twitter']" />
        Twitter
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const links = defineProps({
  link: {
    type: String,
    required: true
  }
})

const sublink = ref('')

sublink.value = links.link
// console.log(sublink.value);

const FbShare = () => {
  const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=https://ketoinpearls.com/${sublink.value}`
  openShareWindow(shareUrl)
}
const TwitterShare = () => {
  const shareUrl = `https://twitter.com/intent/tweet?url=https://ketoinpearls.com/${sublink.value}`
  openShareWindow(shareUrl)
}

const PinterestShare = () => {
  const shareUrl = `https://www.pinterest.com/pin/create/button/?url=https://ketoinpearls.com/${sublink.value}`
  openShareWindow(shareUrl)
}

const openShareWindow = (url) => {
  const windowWidth = 600
  const windowHeight = 400
  const windowLeft = window.screen.width / 2 - windowWidth / 2
  const windowTop = window.screen.height / 2 - windowHeight / 2

  window.open(
    url,
    '_blank',
    `width=${windowWidth}, height=${windowHeight}, top=${windowTop}, left=${windowLeft}`
  )
}
</script>

<style></style>
