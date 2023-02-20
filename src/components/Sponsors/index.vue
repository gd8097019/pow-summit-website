<template>
	<section class="sponsorsSection">
		<div class="mainContainer sponsorsContainer">
			<div class="heading">
				<h1>Our Sponsors</h1>
			</div>
			<div class="row sponsorsLogos">
				<template v-for="(sponsor, skey) in sponsors" :key="skey">
					<div class="col-sm-3 col-6 mb-sm-0 mb-4 sponsorsLogo">
						<img :src="sponsor.image" alt="sponsorsLogo" />
					</div>
				</template>
			</div>
			<hr />
			<div class="sponsorships">
				<div v-html="md(sponsorsMd)"></div>
				<div class="sponsorOptions">
					<a :href="becomeVolunteerButton.url">
						<button class="volBtn">{{ becomeVolunteerButton.title }}</button>
					</a>
					<a :href="becomeSponsorButton.url">
						<button class="sponBtn">{{ becomeSponsorButton.title }}</button>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import sponsorsConfig from "@/config/sponsors.json";
import sponsorsMd from "@/md/sponsors.md";
import { getButton } from "@/config/buttons.js";
export default {
	data() {
		return {
			sponsorsMd,
			sponsors: sponsorsConfig.data,
			becomeVolunteerButton: getButton("become_volunteer"),
			becomeSponsorButton: getButton("become_sponsor"),
		};
	},
};
</script>
