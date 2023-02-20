<template>
	<section class="agendaSection">
		<div class="agendaContainer">
			<div class="heading">
				<div class="becomeSpeakerContent" v-html="md(agendaMd)"></div>
			</div>
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				<template v-for="(day, dkey) in agenda" :key="dkey">
					<li v-if="day.key && day.title" class="nav-item" role="presentation">
						<button
							class="nav-link"
							:class="{ active: dkey === 0 }"
							:id="day.key"
							data-bs-toggle="tab"
							:data-bs-target="`#${day.key}-tab-pane`"
							type="button"
							role="tab"
							:aria-controls="`${day.key}-tab-pane`"
							aria-selected="true"
						>
							{{ day.title }}
							<span v-if="day.date">{{ day.date }}</span>
						</button>
					</li>
				</template>
			</ul>
			<div class="tab-content" id="myTabContent">
				<template v-for="(day, dkey) in agenda" :key="dkey">
					<div
						class="tab-pane fade"
						:class="{ active: dkey === 0, show: dkey === 0 }"
						:id="`${day.key}-tab-pane`"
						role="tabpanel"
						:aria-labelledby="`${day.key}-tab`"
						tabindex="0"
					>
						<div v-if="day.events" class="agendaCards">
							<template v-for="(event, ekey) in day.events" :key="ekey">
								<template v-if="event.speaker_name && event.speaker_image">
									<div class="card">
										<div class="agendaTimings">
											<h4 v-if="event.time">{{ event.time }}</h4>
										</div>
										<div class="agendaDetails">
											<img
												v-if="event.speaker_image"
												:src="event.speaker_image"
												alt=""
											/>
											<div class="detailContent">
												<h6 v-if="event.session">{{ event.session }}</h6>
												<p v-if="event.speaker_name">
													{{ event.speaker_name }}
												</p>
											</div>
										</div>
									</div>
								</template>
								<template v-else>
									<div class="card breakCard">
										<h4 v-if="event.session">{{ event.session }}</h4>
									</div>
								</template>
							</template>
						</div>
					</div>
				</template>
			</div>
		</div>
	</section>
</template>
<script>
import agendaMd from "@/md/agenda.md";
import agendaConfig from "@/config/agenda.json";
export default {
	name: "Agenda",
	data() {
		return {
			agendaMd,
			agenda: agendaConfig.data,
		};
	},
};
</script>
