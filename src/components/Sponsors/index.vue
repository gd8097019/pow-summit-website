<template>
	<section class="ourSponsorsSections" id="ourSponsorsSections">
		<div class="proofMainContainer ourSponsorsContainer">
			<h1>BECOME A SPONSOR</h1>
			<p>
				The Summit offers a range of sponsorship packages, ​suited your
				company’s marketing needs and budget.
			</p>
			<p class="mt-4">To ​learn more, please submit an enquiry.</p>
			<a
				href="mailto:hello@mmhgroup.io"
				class="text-decoration-none"
				target="_blank"
			>
				<button>BECOME A SPONSOR</button>
			</a>
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
