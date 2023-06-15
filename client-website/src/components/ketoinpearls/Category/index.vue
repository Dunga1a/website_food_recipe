<template>
  <div class="flex items-center">
    <router-link to="/" class="flex items-center">
      <img
        src="https://ketoinpearls.com/wp-content/uploads/2022/11/KIP-LOGO-3-web.jpg.webp"
        class="mr-3 w-[255px] h-[170px]"
        alt="Keto in pearls Logo"
      />
    </router-link>
    <button
      data-collapse-toggle="navbar-multi-level"
      type="button"
      class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-multi-level"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-multi-level">
      <ul
        class="uppercase flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
      >
        <li v-for="category in categories" :key="category.id">
          <router-link
            v-if="!category.subCategory"
            to="/"
            class="block py-2 pl-3 pr-4 md:p-0 md:dark:bg-transparent"
            aria-current="page"
            >{{ category.name }}</router-link
          >
          <button
            v-if="category.subCategory && category.id == 2"
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            class="uppercase flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            {{ category.name }}
            <svg
              class="w-5 h-5 ml-1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            v-if="category.subCategory && category.id == 2"
            id="dropdownNavbar"
            class="z-10 hidden min-w-[240px] font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-new w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="py-2 text-gray-700 dark:text-gray-400 font-bold text-xl"
              aria-labelledby="dropdownLargeButton"
            >
              <li
                aria-labelledby="dropdownNavbarLink"
                v-for="subCategory in category.subCategory"
                :key="subCategory.idSub"
              >
                <router-link
                  v-if="subCategory.itemSub === null"
                  :to="{
                    name: 'recipesList',
                    params: { name: `${subCategory.slug}` },
                  }"
                  class="block px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  ><span>
                    {{ subCategory.nameSub }}
                  </span>
                </router-link>

                <button
                  v-if="subCategory.itemSub"
                  id="doubleDropdownButton"
                  :data-dropdown-toggle="subCategory.idSub"
                  data-dropdown-placement="right-start"
                  type="button"
                  class="uppercase flex items-center justify-between w-full px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span>
                    {{ subCategory.nameSub }}
                  </span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  :id="subCategory.idSub"
                  class="z-10 hidden bg-white min-w-[240px] divide-y divide-gray-100 rounded-lg shadow-new w-44 dark:bg-gray-700"
                >
                  <ul
                    v-if="subCategory.itemSub"
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="doubleDropdownButton"
                  >
                    <li v-for="item in subCategory.itemSub" :key="item.idItem">
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        >{{ item.nameItem }}</a
                      >
                    </li>
                    <!-- <li>
                                        <a
                                            href="#"
                                            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                                            >Đồ ăn nhẹ</a
                                        >
                                    </li> -->
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <button
            v-if="category.id == 3"
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            class="uppercase flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            type="button"
          >
            {{ category.name }}
          </button>
          <!-- Dropdown menu -->
          <div
            v-if="category.id == 3"
            id="dropdownHover"
            class="z-10 hidden min-w-[240px] bg-white divide-y divide-gray-100 rounded-lg shadow-new w-44 dark:bg-gray-700"
          >
            <ul
              class="py-2 text-gray-700 dark:text-gray-200 font-bold text-xl"
              aria-labelledby="dropdownHoverButton"
            >
              <li
                v-for="subCategory in category.subCategory"
                :key="subCategory.idSub"
              >
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >{{ subCategory.nameSub }}</a
                >
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const categories = ref([
  {
    id: "1",
    name: "Home",
  },
  {
    id: "2",
    name: "Công thức nấu ăn",
    subCategory: [
      {
        idSub: "1",
        nameSub: "Món khai vị",
        itemSub: [
          {
            idItem: "1",
            nameItem: "Nhúng",
          },
          {
            idItem: "2",
            nameItem: "Đồ ăn nhẹ",
          },
        ],
      },
      {
        idSub: "2",
        nameSub: "Bữa sáng",
        itemSub: null,
        slug: "bua-sang",
      },
      {
        idSub: "3",
        nameSub: "Món tráng miệng",
        itemSub: [
          {
            idItem: "1",
            nameItem: "Bánh",
          },
          {
            idItem: "2",
            nameItem: "Pho mát",
          },
          {
            idItem: "3",
            nameItem: "Sô cô la",
          },
          {
            idItem: "4",
            nameItem: "Bánh quy",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Cuộc sống tự nhiên",
    subCategory: [
      {
        idSub: "1",
        nameSub: "Sản phẩm an toàn",
      },
      {
        idSub: "2",
        nameSub: "Chế độ ăn kiêng",
      },
      {
        idSub: "3",
        nameSub: "Kho lưu trữ chuẩn bị giòn",
      },
    ],
  },
]);
</script>

<style></style>
