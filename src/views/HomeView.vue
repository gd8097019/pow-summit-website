<template>
	<!-- hero section with navbar starts here -->
	<section class="proofHeroSecion">
		<Navbar />
		<Header />
	</section>
	<!-- hero section with navbar ends here -->

	<!-- speakers section starts here -->
	<Speakers />
	<!-- speakers section ends here -->

	<!-- tickets secyion starts here -->
	<Tickets />
	<!-- tickets secyion ends here -->

	<!-- location section starts here -->
	<Location />
	<!-- location section ends here -->

	<!-- location section starts here -->
	<Footer />
	<!-- location section ends here -->

	<!-- about section starts here -->
	<!--  About /-->
	<!-- about section ends here -->

	<!-- become a speaker section starts here -->
	<!--BecomeSpeaker /-->
	<!-- become a speaker section ends here -->

	<!-- agenda section starts here -->
	<!-- Agenda id="agenda" -->
	<!-- agenda section ends here -->

	<!-- sponsors section starts here -->
	<!-- Sponsors id="partnerships" /-->
	<!-- sponsors section ends here -->
</template>

<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Speakers from "@/components/Speakers";
import Tickets from "@/components/Tickets";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

/*
import About from "@/components/About";

import BecomeSpeaker from "@/components/BecomeSpeaker";

// import Agenda from "@/components/Agenda"; 
import Sponsors from "@/components/Sponsors";

*/

export default {
	name: "HomeView",
	components: {
		Navbar,
		Header,
		Speakers,
		Tickets,
		Location,
		Footer,

		/*
		About,
		BecomeSpeaker,
		//Agenda,
		Sponsors,
		*/
	},
};
</script>
