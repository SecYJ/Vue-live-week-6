import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { Field, Form, ErrorMessage, defineRule } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
// import VueLoading from "vue-loading-overlay";
// import "vue-loading-overlay/dist/vue-loading-css";

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
app.use(VueLoading);
app.mount("#app");
