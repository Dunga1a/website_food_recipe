<template>
  <ModalV2
    v-if="showModal"
    :title="'Thêm danh mục'"
    :formFields="formFields"
    @submit="handleSubmit"
    @close="closeModal"
  >
    <template #footer="{ closeModal }">
      <div>
        <button
          @click="closeModal"
          type="button"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </template>
  </ModalV2>
</template>
<script setup>
import { ref, defineEmits } from "vue";
import ModalV2 from "../../../components/Modal/ModalV2.vue";

defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["closeModal"]);

const formFields = ref([
  {
    name: "name_category",
    label: "Tên danh mục",
    type: "text",
    value: "",
  },
  { name: "slug", label: "Link danh mục", type: "text", value: "" },
]);

const handleSubmit = (fromData) => {
  //API request
  console.log(fromData);
};

const closeModal = () => {
  emit("closeModal");
  resetFormFields();
};

const resetFormFields = () => {
  formFields.value.forEach((field) => {
    field.value = "";
  });
};
</script>
<style></style>
