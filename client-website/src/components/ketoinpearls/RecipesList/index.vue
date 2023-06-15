<template>
    <div>{{ category }}</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { convertToTitleCase } from "../../utils";
const router = useRouter();
const category = ref("");

onMounted(() => {
    const categoryId = router.currentRoute.value.params.name;
    console.log(router.currentRoute.value.params);
    // Lấy tên danh mục từ API hoặc dữ liệu đã có
    console.log(convertToTitleCase(categoryId));
    // Ví dụ: Gọi API để lấy tên danh mục dựa trên categoryId
    // Sau khi có tên danh mục, gán giá trị cho biến category
    category.value = convertToTitleCase(categoryId);
});
</script>

<style></style>
