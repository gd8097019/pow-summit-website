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
				href="https://docs.google.com/presentation/d/e/2PACX-1vSqLdy0IZdutg1TND6FnfH-nr2G9bpxyGxSQNgoEGkhXW7n5gJjYRif_mztpmBWf40tnHLTsGYNieHh/pub?start=false&loop=false&delayms=60000&slide=id.g1534bf91b0c_0_105"
				class="text-decoration-none"
				target="_blank"
			>
				<button>BECOME A SPONSOR</button>
			</a>
		</div>
	</section>
</template>
<script>
import { getButton } from "@/config/2023/buttons.js";
export default {
	data() {
		return {
			becomeVolunteerButton: getButton("become_volunteer"),
			becomeSponsorButton: getButton("become_sponsor"),
		};
	},
};
</script>
