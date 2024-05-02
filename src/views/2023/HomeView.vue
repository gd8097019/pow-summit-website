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

	<!-- agenda section starts here -->
	<Agenda />
	<!-- agenda section ends here -->

	<!-- tickets secyion starts here -->
	<Tickets />
	<!-- tickets secyion ends here -->

	<!-- active sponsors section starts here -->
	<ActiveSponsors />
	<!-- active sponsors section ends here -->

	<!-- media partners section starts here  -->
	<MediaPartners />
	<!-- media partners section ends here -->

	<!-- sponsors section starts here -->
	<Sponsors />
	<!-- sponsors section ends here -->

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
</template>

<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/2023/Header";
import Speakers from "@/components/2023/Speakers";
import Tickets from "@/components/2023/Tickets";
import Location from "@/components/2023/Location";
import Sponsors from "@/components/2023/Sponsors";
import Agenda from "@/components/2023/Agenda";
import MediaPartners from "@/components/2023/MediaPartners";
import ActiveSponsors from "@/components/2023/ActiveSponsors";
import Footer from "@/components/Footer";

/*
import About from "@/components/About";
import BecomeSpeaker from "@/components/BecomeSpeaker";
*/

export default {
	name: "HomeView",
	components: {
		Navbar,
		Header,
		Speakers,
		Agenda,
		Tickets,
		Location,
		MediaPartners,
		ActiveSponsors,
		Footer,
		/*
			About,
			BecomeSpeaker,
		*/
	},
};
</script>
