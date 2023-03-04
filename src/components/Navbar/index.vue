<template>
	<nav class="navbar navbar-expand-lg">
		<div class="container-fluid navContainer">
			<a class="navbar-brand" href="/#" v-on:click="closeNav()">POW SUMMIT</a>
			<button
				class="navbar-toggler"
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
				ref="navbar"
				class="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul class="navbar-nav mx-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a
							class="nav-link active"
							aria-current="page"
							href="/#speakers"
							v-on:click="closeNav()"
							>Speakers</a
						>
					</li>
					<!-- li class="nav-item">
						<a class="nav-link" href="/#agenda" v-on:click="closeNav()"
							>Agenda</a
						>
					</li -->
					<li class="nav-item">
						<a class="nav-link" href="/#tickets" v-on:click="closeNav()"
							>Tickets</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/#partnerships" v-on:click="closeNav()"
							>Partnerships</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/#location" v-on:click="closeNav()"
							>Location</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/#location" v-on:click="closeNav()"
							>Contact</a
						>
					</li>
				</ul>
				<a href="/#tickets" target="_parent">
					<button class="buyTicketsBtn" type="button">Buy Tickets</button>
				</a>
			</div>
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
