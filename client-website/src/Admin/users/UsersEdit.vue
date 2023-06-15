<template>
  <ModalV2
    v-if="showModal"
    :title="'Chỉnh sửa người người dùng'"
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
import ModalV2 from "../../components/Modal/ModalV2.vue";

defineProps({
  showModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["closeModal"]);

const formFields = ref([
  {
    name: "username",
    label: "Username",
    type: "text",
    value: "Mạnh Dũng",
    readonly: true,
  },
  { name: "password", label: "Password", type: "password", value: "123456" },
  {
    name: "confirm_password",
    label: "Nhập lại mật khẩu",
    type: "password",
    value: "",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    value: "dung@gmail.com",
    // col_span: true,
  },
  {
    name: "image",
    label: "Ảnh đại diện",
    type: "file",
    col_span: true,
    file: null,
    value:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/352808573_1452346372188805_4730541899299372613_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=INj0QwSnN0EAX-jCPwu&_nc_ht=scontent.fhan2-4.fna&oh=00_AfDhdBaq0s-25EwPbhC7Hiv84BWMJqpiH0sISwB1PX-YeQ&oe=648EC17C",
  },
]);

const handleSubmit = (fromData) => {
  //API request
  console.log(fromData);
};

const closeModal = () => {
  emit("closeModal");
};

const resetFormFields = () => {
  formFields.value.forEach((field) => {
    field.value = "";
  });
};
</script>
<style></style>
