<template>
	<section class="aboutSection">
		<div class="mainContainer aboutContainer">
			<div id="md-content" v-html="md(about)"></div>
		</div>
	</section>
</template>
<script>
import about from "@/md/about.md";
export default {
	name: "About",
	data() {
		return {
			about,
		};
	},
};
</script>
