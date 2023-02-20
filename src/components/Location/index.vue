<template>
	<section class="locationSection">
		<div class="mainContainer locationContainer">
			<div class="row">
				<div class="col-lg-6 mb-lg-0 mb-5">
					<div class="heading">
						<div v-html="md(locationMd)"></div>
					</div>
				</div>
				<div class="col-lg-6 mb-lg-0 mb-5">
					<div class="map">
						<img src="@/assets/images/map.png" alt="map" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import locationMd from "@/md/location.md";
export default {
	data() {
		return {
			locationMd,
		};
	},
};
</script>
