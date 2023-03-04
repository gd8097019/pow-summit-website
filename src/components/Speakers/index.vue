<template>
	<section class="speakersSection">
		<div class="mainContainer speakersContainer">
			<div class="heading">
				<h1>Our Speakers</h1>
			</div>
			<div class="row justify-content-end speakerCards">
				<div
					v-for="(speaker, skey) in speakers"
					:key="skey"
					class="col-lg-3 col-md-6 col-sm-6 col-12 mb-2"
				>
					<div class="card">
						<div class="imgBox">
							<img v-if="speaker.image" :src="speaker.image" alt="speaker1" />
						</div>
						<div class="speakersDetails">
							<div v-if="speaker.social" class="socialLinks">
								<a v-if="speaker.social.twitter" :href="speaker.social.twitter">
									<img src="@/assets/icons/twitter-icon.svg" alt="twitter" />
								</a>
								<a
									v-if="speaker.social.linkedin"
									:href="speaker.social.linkedin"
								>
									<img src="@/assets/icons/linkedin-icon.svg" alt="linkedin" />
								</a>
								<a
									v-if="speaker.social.telegram"
									:href="speaker.social.telegram"
								>
									<img src="@/assets/icons/telegram-icon.svg" alt="telegram" />
								</a>
								<a v-if="speaker.social.discord" :href="speaker.social.discord">
									<img src="@/assets/icons/discord-icon.svg" alt="discord" />
								</a>
							</div>
							<div class="speakerInfo">
								<h5 v-if="speaker.name">{{ speaker.name }}</h5>
								<p v-if="speaker.title" class="speakersTitle">
									{{ speaker.title }}
								</p>
								<p v-if="speaker.company" class="speakersCompany">
									{{ speaker.company }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
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
