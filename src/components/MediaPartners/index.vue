<template>
	<section class="mediaPartnersSection">
		<h1>Media Sponsors</h1>
		<div class="mediaPartnersContainer">
			<a target="_blank" href="https://icoholder.com/">
				<img src="@/assets/images/icoholder.png" alt="Icoholder" />
			</a>
			<a target="_blank" href="https://www.cryptonewsz.com/">
				<img src="@/assets/images/cryptonewsz.png" alt="CryptoNewsZ" />
			</a>
			<a target="_blank" href="https://coinpedia.org/">
				<img src="@/assets/images/coinpedia.png" alt="Coinpedia" />
			</a>
		</div>
	</section>
</template>

<style>
.mediaPartnersSection {
	background: #00d55a;
	padding: 85px;
}

.mediaPartnersContainer {
	padding: 50px 0px 20px 0px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	gap: 40px;
}

.mediaPartnersSection img {
	width: 300px;
	height: auto;
	object-fit: contain;
	display: flex;
}

.mediaPartnersSection h1 {
	font-style: normal;
	font-weight: 700;
	font-size: 60px;
	text-align: center;
	letter-spacing: 0.05em;
	color: #ffffff;
	margin-bottom: 25px;
}

@media screen and (max-width: 991px) {
	.mediaPartnersSection {
		padding: 50px 20px !important;
	}
}

@media screen and (max-width: 400px) {
	.summitVenueContainer h1 {
		font-size: 52px !important;
		line-height: 50px;
		margin-bottom: 20px;
	}
}

@media screen and (max-width: 400px) {
	.mediaPartnersSection h1 {
		font-size: 52px !important;
		line-height: 50px;
		margin-bottom: 20px;
	}

	.mediaPartnersContainer {
		padding: 30px 0px 30px 0px;
	}

	.mediaPartnersSection img {
		width: 260px;
		height: 100px;
		object-fit: contain;
	}
}
</style>
