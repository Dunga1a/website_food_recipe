<template>
  <div>
    <ButtonV1
      :label="'Thêm danh mục'"
      :icon="['fas', 'plus']"
      @click="showModal = true"
    >
    </ButtonV1>
    <table
      class="w-full text-center border-collapse border mt-3 border-gray-600"
    >
      <thead>
        <tr>
          <th class="border border-collapse border-gray-600">STT</th>
          <th class="border border-collapse border-gray-600">Tên danh mục</th>
          <th class="border border-collapse border-gray-600">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-collapse border-gray-600">Item</td>
          <td class="border border-collapse border-gray-600">Item</td>
          <td class="border border-collapse flex items-center justify-center">
            <ButtonV1 :icon="['fas', 'circle-info']" />
            <ButtonV1
              :icon="['fas', 'pen-to-square']"
              @click="showModalEdit = true"
            />
            <ButtonV1 :icon="['fas', 'trash']" />
          </td>
        </tr>
      </tbody>
    </table>
    <InsertParentManager :showModal="showModal" @closeModal="handleClose" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonV1 from "../../../components/ButtonV1/index.vue";
import InsertParentManager from "./InsertParentManager.vue";

const showModal = ref(false);
const showModalEdit = ref(false);

const handleClose = () => {
  showModal.value = false;
  showModalEdit.value = false;
};
</script>

<style></style>
