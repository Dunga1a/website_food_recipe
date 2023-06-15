<template>
    <div
        v-if="isActive"
        class="fixed z-10 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center"
        @click="closeModal"
    >
        <Auth @click.stop />
    </div>
</template>

<script>
import Auth from "../ketoinpearls/Auth/index.vue";
export default {
    name: "Modal",
    components: { Auth },
    props: {
        isActive: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit("closeModal");
        },
    },
};
</script>

<style></style>
