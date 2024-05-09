<template>
	<section class="proofHeroSecion">
		<Navbar />
		<Header />
	</section>

	<Speakers />
	<Agenda />
	<Tickets />
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
		/* Agenda, */
		Tickets,
		Location,
		BecomeSponsor,
		/* Sponsors, */
		/* MediaPartners, */
		Footer,
	},
};
</script>
