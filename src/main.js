import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import markdown from "markdown-it";
import markdownAttrs from "markdown-it-attrs";
import "@/assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VueCountdown from "@chenfengyuan/vue-countdown";

const mixins = {
	methods: {
		md: function (input) {
			return markdown().use(markdownAttrs).render(input);
		},
	},
};

createApp(App)
	.mixin(mixins)
	.use(router)
	.component(VueCountdown.name, VueCountdown)
	.mount("#app");
