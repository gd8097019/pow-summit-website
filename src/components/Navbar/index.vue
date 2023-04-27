<template>
	<nav class="navbar navbar-expand-lg proofNav">
		<div class="container-fluid">
			<button
				class="navbar-toggler order-lg-1 order-1"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="collapse navbar-collapse order-lg-2 order-3"
				id="navbarSupportedContent"
			>
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link active" aria-current="page" href="/">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#ourSpeakersSection">Speakers</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#getTicketSection">Tickets</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#ourSponsorsSections">Sponsors</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#summitVenueSection">Venue</a>
					</li>
				</ul>
			</div>
			<a href="#getTicketSection" class="getTicketsBtn order-lg-3 order-2"
				>GET TICKETS</a
			>
		</div>
	</nav>
</template>
<script>
export default {
	methods: {
		closeNav() {
			this.$refs.navbar.classList.remove("show");
		},
	},
};
</script>
