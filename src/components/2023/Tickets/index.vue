<template>
	<section class="getTicketSection" id="getTicketSection">
		<div class="proofMainContainer getTicketContainer">
			<h1>SECURE YOUR TICKET:</h1>
			<div class="row justify-content-between getTicketcards">
				<div class="col-md-6 col-sm-12 mb-4 px-lg-4">
					<div class="ticketCard generalPass text-center">
						<div>
							<span>{{ tickets[0].type }}</span>
							<h2>{{ tickets[0].price }}</h2>
							<p>
								{{ tickets[0].features }}
							</p>
						</div>
						<a :href="tickets[0].buy_ticket_link" target="_parent">
							<button>GET TICKETS</button>
						</a>
					</div>
				</div>
				<div class="col-md-6 col-sm-12 mb-4 px-lg-4">
					<div class="ticketCard vipPass text-center">
						<div>
							<span>{{ tickets[1].type }}</span>
							<h2>{{ tickets[1].price }}</h2>
							<p>
								{{ tickets[1].features }}
							</p>
						</div>
						<a :href="tickets[1].buy_ticket_link" target="_parent">
							<button>GET TICKETS</button>
						</a>
					</div>
				</div>
				<div class="d-flex justify-content-center">
					<div class="buyWithCyrpto">
						<a href="https://app.eukapay.com/templates/tmp_CgDMNxsZWU6I74biuWamGNHsXu">
							<button>Buy With Crypto</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="assocatedEventsSection">
		<div class="proofMainContainer assocatedEventsContainer">
			<div class="title">
				<h1>ASSOCIATED EVENTS</h1>
				<h4>Hackers Congress Paralelní Polis</h4>
				<h5>Sept. 29th - Oct. 1st, 2023</h5>
			</div>
			<div class="row">
				<div class="col-lg-6 pe-lg-4 pe-3 order-lg-1 order-2">
					<a href="https://resistance.hcpp.cz/" target="_blank">
						<img src="@/assets/images/hackers-congress-paralelni-polis.png" alt="" />
					</a>
				</div>
				<div class="col-lg-6 mb-lg-0 mb-5 order-lg-2 order-1 text-center">
					<p>
						Attended by over 500 fans &amp; IT experts from around the 
						world since 2014, HCPP is the flagship event of Paralelní
						Polis.
					</p>
					<p>
						The thematic pillars of the three-day congress are
						Freedom &amp; Cryptoanarchy, Decentralized Economics, &amp;
						Cryptocurrencies, Political Art &amp; Hacking, &amp; Science &amp;
						Technology.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import ticketsConfig from "@/config/2023/tickets.json";
export default {
	data() {
		return {
			tickets: ticketsConfig.data,
		};
	},
};
</script>
