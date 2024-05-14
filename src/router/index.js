import { createRouter, createWebHistory } from "vue-router";

import HomeView_2023 from "@/views/2023/HomeView";
import HomeView_2024 from "@/views/2024/HomeView";

import CookiePolicy from "@/views/CookiePolicy.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";

import Videos_2023 from "@/views/2023/Videos.vue";
import Videos_2024 from "@/views/2024/Videos.vue";
import Photos_2023 from "@/views/2023/Photos.vue";
import Photos_2024 from "@/views/2024/Photos.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView_2023,
	},
	{
		path: "/2023",
		name: "2023",
		component: HomeView_2023,
	},
	{
		path: "/2024",
		name: "2024",
		component: HomeView_2024,
	},
	{
		path: "/cookie-policy",
		name: "cookie",
		component: CookiePolicy,
	},
	{
		path: "/privacy-policy",
		name: "privacy",
		component: PrivacyPolicy,
	},
	{
		path: "/2024/photos",
		name: "2024photos",
		component: Photos_2024,
	},
	{
		path: "/2024/videos",
		name: "2024videos",
		component: Videos_2024,
	},
	{
		path: "/photos",
		name: "photos",
		component: Photos_2023,
	},
	{
		path: "/videos",
		name: "videos",
		component: Videos_2023,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
