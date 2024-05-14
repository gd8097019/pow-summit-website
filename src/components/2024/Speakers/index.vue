<template>
	<section class="ourSpeakersSection" id="ourSpeakersSection">
		<div class="proofMainContainer ourSpeakersContainer">
			<div class="ourSpeakersHead">
				<h1>OUR SPEAKERS</h1>
				<p>
					The bravest and the brightest.
				</p>
			</div>
			<div class="speakerCards">
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
							<div v-if="speaker.social" class="speakerCardSocial">
								<template v-if="speaker.social.website">
									<a target="_blank" :href="speaker.social.website">
										<img src="@/assets/images/website.svg" alt="" />
									</a>
								</template>
								<template v-if="speaker.social.twitter">
									<a target="_blank" :href="speaker.social.twitter">
										<img src="@/assets/images/twitter.svg" alt="" />
									</a>
								</template>
								<template v-if="speaker.social.linkedin">
									<a target="_blank" :href="speaker.social.linkedin">
										<img src="@/assets/images/linkedin.svg" alt="" />
									</a>
								</template>
								<template v-if="speaker.social.discord">
									<a target="_blank" :href="speaker.social.discord">
										<img src="@/assets/images/discord.svg" alt="" />
									</a>
								</template>
								<template v-if="speaker.social.youtube">
									<a target="_blank" :href="speaker.social.youtube">
										<img src="@/assets/images/youtube.svg" alt="" />
									</a>
								</template>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import speakersConfig from "@/config/2024/speakers.json";

export default {
	data() {
		return {
			speakers: speakersConfig.data,
		};
	},
};
</script>
