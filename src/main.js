import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, min, max } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
import VueLoading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);

configure({
	generateMessage: localize({ zh_TW: zhTW }),
});

setLocale("zh_TW");

const app = createApp(App);
app.use(router);
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
app.use(VueLoading);
app.mount("#app");
