<template>
	<section class="becomeSpeakerSection">
		<div class="mainContainer becomeSpeakerContainer">
			<div class="becomeSpeakerContent" v-html="md(becomeSpeaker)"></div>
			<div class="becomeSpeakerContent">
				<a :href="becomeSpeakerButton.url">
					<button>{{ becomeSpeakerButton.title }}</button>
				</a>
			</div>
		</div>
	</section>
</template>
<script>
import becomeSpeaker from "@/md/becomeSpeaker.md";
import { getButton } from "@/config/buttons.js";
export default {
	name: "BecomeSpeaker",
	data() {
		return {
			becomeSpeaker,
			becomeSpeakerButton: getButton("become_speakers"),
		};
	},
};
</script>
