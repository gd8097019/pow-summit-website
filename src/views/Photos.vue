<template>
    <!-- hero section with navbar starts here -->
	<section class="proofHeroSecion">
		<Navbar />

        <div class="proofOfWorkMainContainer" id="proofOfWorkMainContainer">
            <div class="proofOfWorkContainer">
                <div class="proofMainContainer">
                    <div class="proofOfWorkImg">
                        <img src="@/assets/images/proof-of-work.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="galleryHeroContainer">
            <h1>Proof of Work 2023 Conference Photos - Prague</h1>
        </div>
	</section>

    <!-- hero section with navbar ends here -->
    <section class="gallerySection">
        <div class="galleryContainer">
            <div class="row">
                <template v-for="(item, i) in photos.data" :key="i">
                    <h2>{{ item.title }}</h2>
                    <template v-for="(imageName, j) in item.images" :key="j">
                        <div class="p-2 galleryImg" :class="getImageClass(j)">
                            <img v-lazy="require(`@/assets/images/photos/${imageName}`)" alt="gallery-img" />
                        </div>
                    </template>
                </template>
            </div>
        </div>
    </section>

	<!-- location section starts here -->
	<Footer />
	<!-- location section ends here -->
</template>
<script>
import photos from "@/config/photos.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox';

export default {
    components: {
		Navbar,
		Footer,
        VueEasyLightbox,
	},
    data() {
        return {
            photos,
        }
    },
    methods: {
        getImageClass(index) {
            const modC = Math.ceil((index + 1) / 6) * 6;
            return (index + 1) <= modC - 2 ? 'col-md-3 col-6' : 'col-lg-6 col-12';
        }
    }
}
</script>
<style>
.galleryContainer h2 {
    color: #fff;
    text-align: center;
    padding-top: 40px;
}
</style>