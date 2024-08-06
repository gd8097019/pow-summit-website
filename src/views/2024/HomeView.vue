<template>
	<section class="proofHeroSecion">
		<Navbar />
		<Header />
	</section>

	<Speakers />
	<BecomeSpeaker />
	<Agenda />
	<Tickets />

	<div class="ml-embedded" data-form="124TOn"></div>

	<Sponsors />
	<MediaPartners />
	<BecomeSponsor />
	<Location />
	<Footer />

</template>

<script>
import Navbar from "@/components/2024/Navbar";
import Header from "@/components/2024/Header";
import Speakers from "@/components/2024/Speakers";
import BecomeSpeaker from "@/components/2024/BecomeSpeaker";
import Tickets from "@/components/2024/Tickets";
import Location from "@/components/2024/Location";
import BecomeSponsor from "@/components/2024/BecomeSponsor";
import Agenda from "@/components/2024/Agenda";
import MediaPartners from "@/components/2024/MediaPartners";
import Sponsors from "@/components/2024/Sponsors";
import Footer from "@/components/2024/Footer";

export default {
	name: "HomeView",
	components: {
		Navbar,
		Header,
		Speakers,
		BecomeSpeaker,
		/* Agenda, */
		Tickets,
		Location,
		BecomeSponsor,
		Sponsors,
		MediaPartners,
		Footer,
	},
};
</script>
