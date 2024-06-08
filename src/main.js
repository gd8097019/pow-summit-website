import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import markdown from "markdown-it";
import markdownAttrs from "markdown-it-attrs";
import metadataBlock from "markdown-it-metadata-block";
import yaml from "yaml";
import "@/assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VueCountdown from "@chenfengyuan/vue-countdown";
import VueLazyLoad from 'vue3-lazyload';
import VueEasyLightbox from 'vue-easy-lightbox';

import { createHead } from "@vueuse/head";

const mixins = {
	methods: {
		md: function (input) {
			const meta = {};
			const html = markdown({
				html: true,
				linkify: true,
				typographer: true,
			})
				.use(markdownAttrs)
				.use(metadataBlock, {
					parseMetadata: yaml.parse,
					meta,
				})
				.render(input);

			return { html, meta };
		},
	},
};

createApp(App)
	.mixin(mixins)
	.use(createHead())
	.use(router)
	.use(VueLazyLoad)
	.use(VueEasyLightbox)
	.component(VueCountdown.name, VueCountdown)
	.mount("#app");
