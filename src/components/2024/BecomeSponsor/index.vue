<template>
	<section class="ourSponsorsSections" id="ourSponsorsSections">
		<div class="proofMainContainer ourSponsorsContainer">
			<h1>BECOME A SPONSOR</h1>
			<p>
				We’d love to partner with you to bring the
				Proof-of-Work Summit to life in Frankfurt!
				Please feel free to reach out with any questions
				to Emma Todd (logistics@powsummit.com)
			</p>
			<a
				href="/POW-2024-Sponsor.pdf"
				class="text-decoration-none"
				target="_blank"
			>
				<button>BECOME A SPONSOR</button>
			</a>
		</div>
	</section>
</template>
<script>
import { getButton } from "@/config/buttons.js";
export default {
	data() {
		return {
			becomeVolunteerButton: getButton("become_volunteer"),
			becomeSponsorButton: getButton("become_sponsor"),
		};
	},
};
</script>
