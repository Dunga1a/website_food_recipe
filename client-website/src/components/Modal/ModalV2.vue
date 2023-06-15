<template>
  <div
    class="fixed z-50 left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.3)] flex items-center justify-center transition-opacity ease-in"
    @click="closeModal"
    :class="{ 'opacity-0': isOpen, 'opacity-100': !isOpen }"
  >
    <div
      class="bg-white relative w-full max-w-3xl rounded-xl overflow-hidden transition-opacity ease-in duration-1000"
      @click.stop
    >
      <div
        class="hover:overflow-scroll max-h-[600px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
      >
        <div
          class="flex items-start justify-between p-4 border-b rounded-xl dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {{ this.title }}
          </h3>

          <slot name="footer" :closeModal="closeModal"></slot>
        </div>

        <!-- Hiển thị các trường form -->
        <form @submit.prevent="submitForm" class="p-6 space-y-6">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div
              v-for="field in formFields"
              :key="field.name"
              :class="`${field.col_span === true ? 'col-span-2' : ''}`"
            >
              <label
                class="block mb-2 text-lg font-semibold text-gray-700 dark:text-white"
                :for="field.name"
                >{{ field.label }}</label
              >
              <input
                v-if="field.type !== 'file'"
                :class="`block w-full p-2 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 ${
                  field.readonly ? 'bg-gray-300 cursor-not-allowed' : ''
                } ${field.type === 'file' ? 'p-0' : ''}`"
                :type="field.type"
                :id="field.name"
                v-model="field.value"
                @change="handleFileChange(field, $event.target.files[0])"
                :readonly="field.readonly"
              />
              <span v-else>{{ field.value }}</span>
              <input
                v-if="field.type === 'file'"
                :class="`block w-full rounded-lg bg-gray-50 border border-gray-300 text-gray-900 ${
                  field.readonly ? 'bg-gray-300 cursor-not-allowed' : ''
                }`"
                type="file"
                :id="field.name"
                @change="handleFileChange(field, $event.target.files[0])"
                :readonly="field.readonly"
              />
              <img
                v-if="field.name === 'image'"
                :src="field.value ? field.value : ''"
                alt="Selected Image"
                class="mt-2 w-40 h-40 object-cover"
              />
            </div>
          </div>

          <button
            type="submit"
            class="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    formFields: Array,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    submitForm() {
      // Xử lý logic khi submit form
      // Ví dụ: Gửi dữ liệu form lên server
      // Sau khi xử lý xong, trả về kết quả
      const formData = this.formFields.reduce((data, field) => {
        data[field.name] = field.value;
        return data;
      }, {});

      this.$emit("submit", formData);
    },

    handleFileChange(field, file) {
      const oldValue = field.value;
      field.file = file;
      field.value = URL.createObjectURL(file);
      if (!field.value && oldValue) {
        field.value = oldValue;
      } // Đặt giá trị của trường input thành rỗng
    },
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.$emit("close");
      this.isOpen = false;
    },
  },
  // computed: {
  //   fieldImage() {
  //     const imageField = this.formFields.find(
  //       (field) => field.name === "image"
  //     );
  //     return imageField ? imageField.value : "";
  //   },
  // },
};
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background-color: #f7fafc;
}

::-webkit-scrollbar-thumb {
  background-color: #cbd5e0;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a0aec0;
}
</style>
