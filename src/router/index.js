import { createRouter, createWebHistory } from "vue-router";
import HomeView_2023 from "@/views/2023/HomeView";
import HomeView from "@/views/HomeView";
import CookiePolicy from "@/views/CookiePolicy.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import Videos_2023 from "@/views/Videos.vue";
import Videos from "@/views/Videos.vue";
import Photos_2023 from "@/views/Photos.vue";
import Photos from "@/views/Photos.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/2023",
		name: "2023",
		component: HomeView_2023,
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
		path: "/2023/photos",
		name: "2023photos",
		component: Photos_2023,
	},
	{
		path: "/2023/videos",
		name: "2023videos",
		component: Videos_2023,
	},
	{
		path: "/photos",
		name: "photos",
		component: Photos,
	},
	{
		path: "/videos",
		name: "videos",
		component: Videos,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
