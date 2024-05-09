<template>
	<div>
		
	</div>
	<div>
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
							<router-link class="nav-link" active-class="active" to="/">Home</router-link>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/2024/#ourSpeakersSection">Speakers</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/2024/#getTicketSection">Tickets</a>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Media
							</a>
							<ul class="dropdown-menu">
								<li>
									<router-link
										class="dropdown-item"
										aria-current="page"
										to="/photos"
									>
										Photos
									</router-link>
								</li>
								<li>
									<router-link
										class="dropdown-item"
										aria-current="page"
										to="/videos"
									>
										Videos
									</router-link>
								</li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Past Events
							</a>
							<ul class="dropdown-menu">
								<li>
									<router-link
										class="dropdown-item"
										aria-current="page"
										to="/2023"
									>
										2023
									</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<a
					href="https://powsummit2024.eventbrite.ca/"
					class="getTicketsBtn order-lg-3 order-2"
					>GET TICKETS
				</a>
			</div>
		</nav>
	</div>
</template>
<script>
export default {
	data() {
		const now = new Date();
		const powDate = Date.parse("2024-09-27T00:00:00");

		return {
			time: powDate - now,
		};
	},
	methods: {
		closeNav() {
			this.$refs.navbar.classList.remove("show");
		},
	},
};
</script>
