<template>
	<!-- hero section with navbar starts here -->
	<div class="mainHeroWrapper">
		<Navbar />
		<Header />
	</div>
	<!-- hero section with navbar ends here -->

	<!-- about section starts here -->
	<About />
	<!-- about section ends here -->

	<!-- speakers section starts here -->
	<Speakers id="speakers" />
	<!-- speakers section ends here -->

	<!-- become a speaker section starts here -->
	<BecomeSpeaker />
	<!-- become a speaker section ends here -->

	<!-- agenda section starts here -->
	<!-- Agenda id="agenda" -->
	<!-- agenda section ends here -->

	<!-- tickets secyion starts here -->
	<Tickets id="tickets" />
	<!-- tickets secyion ends here -->

	<!-- sponsors section starts here -->
	<Sponsors id="partnerships" />
	<!-- sponsors section ends here -->

	<!-- location section starts here -->
	<Location id="location" />
	<!-- location section ends here -->

	<Footer />
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import BecomeSpeaker from "@/components/BecomeSpeaker";
import Tickets from "@/components/Tickets";
/* import Agenda from "@/components/Agenda"; */
import Sponsors from "@/components/Sponsors";
import Location from "@/components/Location";

export default {
	name: "HomeView",
	components: {
		Navbar,
		Header,
		About,
		Speakers,
		BecomeSpeaker,
		Tickets,
		//Agenda,
		Sponsors,
		Location,
		Footer,
	},
};
</script>
