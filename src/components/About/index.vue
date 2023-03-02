<template>
	<section class="aboutSection">
		<div class="row">
			<div
				class="offset-sm-0 offset-md-1 offset-lg-1 col-sm-12 col-md-5 col-lg-5 align-self-center"
			>
				<div class="aboutContainer p-4">
					<div id="md-content" v-html="md(about)"></div>
				</div>
			</div>
			<div class="col-sm-12 col-md-6 col-lg-6">
				<div class="aboutImgContainer">
					<img
						src="@/assets/images/about-img.png"
						class="aboutImg img-fluid"
						alt="About"
					/>
					<div class="aboutImgOverlay"></div>
				</div>
			</div>
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
