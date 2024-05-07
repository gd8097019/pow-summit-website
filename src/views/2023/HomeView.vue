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
	<Sponsors />
	<!-- active sponsors section ends here -->

	<!-- media partners section starts here  -->
	<MediaPartners />
	<!-- media partners section ends here -->

	<!-- become sponsor section starts here -->
	<BecomeSponsor />
	<!-- become sponsor section ends here -->

	<!-- location section starts here -->
	<Location />
	<!-- location section ends here -->

	<!-- location section starts here -->
	<Footer />
	<!-- location section ends here -->

</template>

<script>
import Navbar from "@/components/2023/Navbar";
import Header from "@/components/2023/Header";
import Speakers from "@/components/2023/Speakers";
import Tickets from "@/components/2023/Tickets";
import Location from "@/components/2023/Location";
import BecomeSponsor from "@/components/2023/BecomeSponsor";
import Agenda from "@/components/2023/Agenda";
import MediaPartners from "@/components/2023/MediaPartners";
import Sponsors from "@/components/2023/Sponsors";
import Footer from "@/components/2023/Footer";

export default {
	name: "HomeView",
	components: {
		Navbar,
		Header,
		Speakers,
		Agenda,
		Tickets,
		Location,
		BecomeSponsor,
		MediaPartners,
		Sponsors,
		Footer,
	},
};
</script>
