import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "flowbite";
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPinterestP } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faDownLong,
  faPenToSquare,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPrint,
  faEnvelope,
  faReply,
  faRightToBracket,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPinterestP,
  faFacebookF,
  faGoogle,
  faTwitter,
  faDownLong,
  faPrint,
  faInstagram,
  faEnvelope,
  faReply,
  faRightToBracket,
  faPlus,
  faCircleInfo,
  faPenToSquare,
  faTrash
);
createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
