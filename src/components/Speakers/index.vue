<template>
	<section class="ourSpeakersSection" id="ourSpeakersSection">
		<div class="proofMainContainer ourSpeakersContainer">
			<div class="ourSpeakersHead">
				<h1>OUR SPEAKERS</h1>
				<p>
					Join the "OG's" of cryptocurrency as we discuss the birth, growth, and
					future of Proof-of-Work.
				</p>
			</div>
			<div class="spearkerCards">
				<div class="row justify-content-center">
					<div
						v-for="(speaker, skey) in speakers"
						:key="skey"
						class="col-lg-4 col-md-4 col-sm-6 d-flex flex-column align-items-center"
					>
						<div class="speakerCard">
							<div class="speakerCardImg">
								<img v-if="speaker.image" :src="speaker.image" alt="" />
							</div>
							<div class="speakerCardContent">
								<h3 v-if="speaker.name">{{ speaker.name }}</h3>
								<p v-if="speaker.title">{{ speaker.title }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="registerSpeakerSection">
		<div class="proofMainContainer registerSpeakerContainer">
			<h1>MORE SPEAKERS ARE ABOUT TO LAND</h1>
			<p>
				Our speakers have diverse voices, with distinct perspectives on
				proof-of-work. They'll be covering topics from ‘advancements in mining’
				to ‘changes in policy.’
			</p>
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLSeSzqNQrnJ7bo3fLdx-XKDlOopzncXis1unOPhmWT-1AvYG4Q/viewform"
				class="text-decoration-none"
				target="_blank"
			>
				<button>REGISTER YOUR<br />SPEAKER INTEREST</button>
			</a>
		</div>
	</section>
</template>
<script>
import speakersConfig from "@/config/speakers.json";
export default {
	data() {
		return {
			speakers: speakersConfig.data,
		};
	},
};
</script>
