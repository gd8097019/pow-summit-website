<template>
	<section class="eventTicketsSection">
		<div class="mainContainer eventTicketsContainer">
			<div class="heading">
				<h1>Event Tickets</h1>
				<p>Tincidunt ut tortor bibendum fermentum hac sit facilisis.</p>
			</div>
			<div class="ticketCards">
				<div class="row">
					<template v-for="(ticket, tkey) in tickets" :key="tkey">
						<template v-if="tkey % 2 === 0">
							<div class="col-md-6 col-sm-12 mb-4">
								<div class="card generalTicket">
									<div class="ticketData">
										<div class="ticketPrice">
											<p>{{ ticket.type }}</p>
											<h1>{{ ticket.price }}</h1>
										</div>
										<div class="ticketDetails">
											<ul>
												<li
													v-for="(feature, fkey) in ticket.features"
													:key="fkey"
												>
													<img src="@/assets/icons/checkMark.svg" alt="check" />
													{{ feature }}
												</li>
											</ul>
										</div>
									</div>
									<a :href="ticket.buy_ticket_link" target="_parent">
										<button>Buy Tickets</button>
									</a>
								</div>
							</div>
						</template>
						<template v-else>
							<div class="col-md-6 col-sm-12 mb-4">
								<div class="card vipTicket">
									<div class="ticketData">
										<div class="ticketPrice">
											<p>{{ ticket.type }}</p>
											<h1>{{ ticket.price }}</h1>
										</div>
										<div class="ticketDetails">
											<ul>
												<li
													v-for="(feature, fkey) in ticket.features"
													:key="fkey"
												>
													<img
														src="@/assets/icons/checkMark-dark.svg"
														alt="check"
													/>
													{{ feature }}
												</li>
											</ul>
										</div>
									</div>
									<a :href="ticket.buy_ticket_link" target="_parent">
										<button>Buy Tickets</button>
									</a>
								</div>
							</div>
						</template>
					</template>
					<template> </template>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import ticketsConfig from "@/config/tickets.json";
export default {
	data() {
		return {
			tickets: ticketsConfig.data,
		};
	},
};
</script>
