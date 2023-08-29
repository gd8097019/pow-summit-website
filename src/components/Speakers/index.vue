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
			<div class="speakerCards">
				<div class="d-flex justify-content-center align-items-center">
					<div class="swiper-button-prev-unique">
						<img src="@/assets/images/arrow-left.svg" alt="" />
					</div>
					<swiper
						:grid="{
							rows: 2,
							fill: 'column',
						}"
						:loop="false"
						:slides-per-view="1"
						:slidesPerGroup="1"
						:autoplay="{
							delay: 3000,
							pauseOnMouseEnter: true,
							disableOnInteraction: true,
						}"
						:navigation="{
							nextEl: '.swiper-button-next-unique',
							prevEl: '.swiper-button-prev-unique',
						}"
						:space-between="5"
						:breakpoints="{
							'640': {
								grid: {
									fill: 'row',
									rows: 1,
								},
								slidesPerView: 3,
								spaceBetween: 10,
								slidesPerGroup: 4,
								loop: true,
							},
							'768': {
								grid: {
									fill: 'row',
									rows: 1,
								},
								slidesPerView: 3,
								spaceBetween: 30,
								slidesPerGroup: 4,
								loop: true,
							},
							'1024': {
								grid: {
									fill: 'row',
									rows: 1,
								},
								slidesPerView: 4,
								spaceBetween: 50,
								slidesPerGroup: 4,
								loop: true,
							},
						}"
						:modules="modules"
						:pagination="{
							dynamicBullets: true,
							clickable: true,
						}"
						@slideChange="slideChange"
					>
						<swiper-slide v-for="(speaker, skey) in speakers" :key="skey">
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
						</swiper-slide>
					</swiper>
					<div class="swiper-button-next-unique">
						<img src="@/assets/images/arrow-right.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay, Grid } from "swiper/modules";
import speakersConfig from "@/config/speakers.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			modules: [Pagination, Navigation, Autoplay, Grid],
			speakers: speakersConfig.data,
		};
	},
	methods: {
		slideChange(e) {
			if (e.isEnd) {
				e.slideTo(0);
			}
		},
	},
};
</script>

<style>
.ourSpeakersSection .swiper-pagination-bullet-active {
	background-color: #000000 !important;
}

.ourSpeakersSection .speakerCard .speakerCardImg img {
	border-radius: 50%;
}

.ourSpeakersSection .swiper-pagination-bullet {
	background-color: #ffffff;
	opacity: 1 !important;
}

.swiper-button-next-unique img {
	cursor: pointer;
	width: 30px;
	height: auto;
	margin: 60px;
}

.swiper-button-prev-unique img {
	cursor: pointer;
	width: 30px;
	height: auto;
	margin: 60px;
}

@media screen and (max-width: 1025px) {
	.speakerCardContent h3 {
		font-size: 25px !important;
	}

	.swiper-button-next-unique img {
		width: 20px !important;
		margin: 30px !important;
	}

	.swiper-button-prev-unique img {
		width: 20px !important;
		margin: 30px !important;
	}
}

@media screen and (max-width: 769px) {
	.speakerCard {
		padding: 10px;
	}

	.swiper-button-next-unique img {
		width: 20px !important;
		margin: 20px !important;
	}

	.swiper-button-prev-unique img {
		width: 20px !important;
		margin: 20px !important;
	}

	.ourSpeakersSection .speakerCard {
		margin-bottom: 0px !important;
	}

	.ourSpeakersSection .swiper-wrapper {
		padding-bottom: 40px !important;
	}
}

@media screen and (max-width: 400px) {
	.speakerCard {
		padding: 0px !important;
	}

	.speakerCardContent p {
		font-size: 13px !important;
	}

	.speakerCardContent h3 {
		font-size: 17px !important;
	}

	.ourSpeakersContainer .ourSpeakersHead {
		margin-bottom: 20px !important;
	}

	.speakerCard .speakerCardImg img {
		width: 60% !important;
	}

	.swiper-button-next-unique img {
		width: 20px !important;
		margin: 10px !important;
	}

	.swiper-button-prev-unique img {
		width: 20px !important;
		margin: 10px !important;
	}
}
</style>
