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
