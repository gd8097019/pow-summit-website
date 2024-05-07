<template>
	<footer class="proofFooter">
		<div class="footerContainer">
			<ul class="footerLinks">
				<li>
					<router-link active-class="active" to="/">Home</router-link>
				</li>
				<li>
					<a href="2024/#ourSpeakersSection">Speakers</a>
				</li>
				<li>
					<a href="/2024/#getTicketSection">Tickets</a>
				</li>
				<li>
					<router-link to="/photos">Photos</router-link>
				</li>
				<li>
					<router-link to="/videos">Videos</router-link>
				</li>
			</ul>
			<h1>BROUGHT TO YOU BY</h1>

			<div class="footerLogo">
				<a href="https://etccooperative.org">
					<img src="@/assets/images/footer-logo2.png" alt="" />
				</a>
				<a href="https://litecoin.net">
					<img src="@/assets/images/footer-logo1.png" alt="" />
				</a>
			</div>

			<div class="socialMediaIcons">
				<a href="https://twitter.com/PowSummit">
					<img src="@/assets/images/twitter.svg" alt="" />
					@POWSummit
				</a>
				<a href="https://twitter.com/ETCCooperative">
					<img src="@/assets/images/twitter.svg" alt="" />
					@ETCCooperative
				</a>
				<a href="https://twitter.com/LTCFoundation">
					<img src="@/assets/images/twitter.svg" alt="" />
					@LTCFoundation
				</a>

				<a href="https://www.linkedin.com/company/etc-cooperative/">
					<img src="@/assets/images/linkedin.svg" alt="" />
					ETC Cooperative
				</a>
				<a href="https://www.linkedin.com/company/litecoin-foundation/">
					<img src="@/assets/images/linkedin.svg" alt="" />
					Litecoin Foundation
				</a>
			</div>
		</div>
	</footer>
</template>
