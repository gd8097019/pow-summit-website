<template>
	<section class="registerSpeakerSection" id="registerSpeakerSection">
		<div class="proofMainContainer registerSpeakerContainer">
			<h1>BECOME A SPEAKER</h1>
			<p>
				If you would like to speak at POW Summit 2024,
				please use our Call-for-Proposals page to
				make a proposal:
			</p>
		    <br/>
			<a
				href="https://cfp.powsummit.com/2024"
				class="text-decoration-none"
				target="_blank"
			>
				<button>BECOME A SPEAKER</button>
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
