<template>
    <!-- <h1 class="bg-red-700">hehehehe</h1> -->
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <Category />
            <div class="relative">
                <button @click="openInputSearch">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
                <div class="flex items-center absolute right-1">
                    <input
                        v-if="showInput"
                        type="text"
                        v-model="valueSearch"
                        placeholder="Enter search keywords..."
                        class="rounded w-[300px]"
                    />
                    <button v-if="showInput" @click="closeInputHandler">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                v-if="loggedInUser"
                class="relative"
                ref="menuButton"
                @click.prevent="toggleMenu"
            >
                <div
                    @click="handleMenuClick"
                    class="flex items-center cursor-pointer"
                >
                    <img
                        :src="img"
                        width="50"
                        height="50"
                        class="rounded-full border border-slate-400"
                        alt=""
                    />
                    <span class="text-[16px] font-bold ml-1">
                        {{
                            loggedInUser[0]?.displayName
                                ? loggedInUser[0].displayName
                                : loggedInUser.username
                        }}
                    </span>
                </div>
                <ul
                    v-show="isMenuOpen"
                    ref="menu"
                    class="absolute w-[220px] shadow-new rounded overflow-hidden cursor-pointer"
                >
                    <li class="px-2 py-2 hover:bg-slate-100">
                        Thông tin tài khoản
                    </li>
                    <li
                        class="font-bold px-2 py-2 hover:bg-slate-100"
                        @click="logOut"
                    >
                        <font-awesome-icon
                            icon="fa-solid fa-right-to-bracket"
                            beat
                        />
                        Logout
                    </li>
                </ul>
            </div>
            <button class="font-bold" @click="openModal" v-else>
                <font-awesome-icon icon="fa-solid fa-right-to-bracket" beat />
                Login
            </button>
            <Modal :isActive="activeModal" @closeModal="closeModal" />
        </div>
    </nav>
</template>

<script>
import { computed, onMounted, ref, onUnmounted } from "vue";
import Category from "../Category/index.vue";
import Modal from "../../Modal/index.vue";
export default {
    name: "Navbar",
    components: { Category, Modal },
    setup() {
        const showInput = ref(false);
        const valueSearch = ref("");
        const activeModal = ref(false);
        const loggedInUser = ref(null);
        const isMenuOpen = ref(false);
        const menuButton = ref(null);
        const menu = ref(null);

        onMounted(() => {
            if (localStorage.getItem("loggedInUser")) {
                loggedInUser.value = JSON.parse(
                    localStorage.getItem("loggedInUser")
                );
            }
        });

        const img = computed(() => {
            if (localStorage.getItem("loggedInUser")) {
                if (loggedInUser.value[0]?.photoURL) {
                    return loggedInUser.value[0].photoURL;
                } else {
                    return "https://anhdep123.com/wp-content/uploads/2020/11/avatar-facebook-mac-dinh-nam.jpeg";
                }
            } else {
                console.log("hehe");
            }
        });
        const openInputSearch = () => {
            showInput.value = true;
        };
        const closeInputHandler = () => {
            showInput.value = false;
            //console.log(showInput.value);
            valueSearch.value = "";
        };
        const openModal = () => {
            activeModal.value = true;
        };
        const closeModal = () => {
            activeModal.value = false;
        };

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        const handleOutsideClick = (event) => {
            if (menuButton.value && !menuButton.value.contains(event.target)) {
                console.log("ở đây");
                isMenuOpen.value = false;
            }
        };

        onMounted(() => {
            document.addEventListener("click", handleOutsideClick);
        });

        onUnmounted(() => {
            document.removeEventListener("click", handleOutsideClick);
        });

        const logOut = () => {
            console.log("thoát");
            loggedInUser.value = null;
            localStorage.setItem("loggedInUser", null);
            window.location.reload();
        };
        return {
            showInput,
            valueSearch,
            openInputSearch,
            closeInputHandler,
            activeModal,
            openModal,
            closeModal,
            isMenuOpen,
            menuButton,
            menu,
            img,
            toggleMenu,
            loggedInUser,
            logOut,
        };
    },
};
</script>

<style></style>
