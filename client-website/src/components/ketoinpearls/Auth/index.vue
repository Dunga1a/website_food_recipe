<template>
    <div class="container" id="container">
        <div class="form-container sign-up-container">
            <!-- Đăng ký -->
            <form action="#">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a
                        href="#"
                        class="social hover:bg-slate-200 p-6 cursor-pointer"
                        ><font-awesome-icon
                            icon="fa-brands fa-google"
                            style="color: #d12b1f"
                            size="xl"
                        />
                    </a>
                </div>
                <span>or use your email for registration</span>
                <input
                    type="text"
                    v-model="registerForm.username"
                    placeholder="Name"
                />
                <input
                    type="email"
                    v-model="registerForm.email"
                    placeholder="Email"
                />
                <input
                    type="password"
                    v-model="registerForm.password"
                    placeholder="Password"
                />
                <button id="btnSignUp" @click.prevent="register">
                    Sign Up
                </button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <!-- Đăng nhập -->
            <form action="#">
                <h1>Sign in</h1>
                <div class="social-container">
                    <a
                        @click.prevent="handleSignInGoogle"
                        class="social cursor-pointer hover:bg-slate-200 p-6"
                    >
                        <font-awesome-icon
                            icon="fa-brands fa-google"
                            style="color: #d12b1f"
                            size="xl"
                        />
                    </a>
                </div>
                <span>or use your account</span>
                <input
                    type="email"
                    v-model="loginForm.email"
                    placeholder="Email"
                />
                <input
                    type="password"
                    v-model="loginForm.password"
                    placeholder="Password"
                />
                <a href="#">Forgot your password?</a>
                <button @click="login">Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your
                        personal info
                    </p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { myAuth } from "./auth";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../FireBase/FirebaseConfig";

onMounted(() => {
    myAuth();
});

console.log(auth);
const registerForm = reactive({
    username: "",
    password: "",
    email: "",
});

const loginForm = reactive({
    email: "",
    password: "",
});

const register = () => {
    // Lưu thông tin đăng ký vào localStorage
    const container = document.getElementById("container");
    //console.log(aa);
    localStorage.setItem("user", JSON.stringify(registerForm));

    container.classList.remove("right-panel-active");

    // Xóa thông tin đăng nhập hiện tại (nếu có)
    localStorage.removeItem("loggedInUser");
};

const login = () => {
    // Kiểm tra xem thông tin đăng nhập có khớp với thông tin đã đăng ký hay không
    const user = JSON.parse(localStorage.getItem("user"));
    if (
        user &&
        user.email === loginForm.email &&
        user.password === loginForm.password
    ) {
        //alert("Ok");
        // Lưu thông tin đăng nhập vào localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(user));
    }
};

const handleSignInGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            console.log(result);
            localStorage.setItem(
                "loggedInUser",
                JSON.stringify(result.user.providerData)
            );
            window.location.reload();
            // ...
        })
        .catch((error) => {
            console.log(error.message);
        });
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

* {
    box-sizing: border-box;
}

h1 {
    font-weight: bold;
    margin: 0;
}

h2 {
    text-align: center;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}

span {
    font-size: 12px;
}

a {
    color: #333;
    font-size: 16px;
    text-decoration: none;
    margin: 15px 0;
}

button {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background-color: transparent;
    border-color: #ffffff;
}

form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
}

input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
}

.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

.overlay {
    background: #ff416c;
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
    background: linear-gradient(to right, #ff4b2b, #ff416c);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
    transform: translateX(50%);
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
}

.overlay-left {
    transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
    transform: translateX(0);
}

.overlay-right {
    right: 0;
    transform: translateX(0);
}

.container.right-panel-active .overlay-right {
    transform: translateX(20%);
}

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}
</style>
