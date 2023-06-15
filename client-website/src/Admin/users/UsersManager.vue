<template>
  <div>
    <ButtonV1
      :label="'Thêm người dùng'"
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
          <th class="border border-collapse border-gray-600">Họ và tên</th>
          <th class="border border-collapse border-gray-600">Username</th>
          <th class="border border-collapse border-gray-600">Email</th>
          <th class="border border-collapse border-gray-600">Ảnh đại diện</th>
          <th class="border border-collapse border-gray-600">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-collapse border-gray-600">Item</td>
          <td class="border border-collapse border-gray-600">Item</td>
          <td class="border border-collapse border-gray-600">Item</td>
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
    <UsersInsert :showModal="showModal" @closeModal="handleClose" />
    <UsersEdit :showModal="showModalEdit" @closeModal="handleClose" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonV1 from "../../components/ButtonV1/index.vue";
import UsersInsert from "./UsersInsert.vue";
import UsersEdit from "./UsersEdit.vue";

const showModal = ref(false);
const showModalEdit = ref(false);

const handleClose = () => {
  showModal.value = false;
  showModalEdit.value = false;
};
</script>

<style></style>
