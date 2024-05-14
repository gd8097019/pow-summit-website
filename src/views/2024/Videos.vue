<template>
    <!-- hero section with navbar starts here -->
	<section class="proofHeroSecion" v-cloak>
		<Navbar />
		
        <div class="proofOfWorkMainContainer" id="proofOfWorkMainContainer">
            <div class="proofOfWorkContainer">
                <div class="proofMainContainer">
                    <div class="proofOfWorkImg">
                        <img src="@/assets/images/proof-of-work-2024.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="galleryHeroContainer">
            <h1>Proof of Work 2023 Conference VIDEOS - Prague</h1>
        </div>
	</section>
	<!-- hero section with navbar ends here -->

    <section class="videoSection">
        <div class="videoContainer">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12 p-2" v-for="(item, index) in videos" :key="index">
                    <div class="videoCard" @click="openLightboxOnSlide(index + 1)">
                        <img
                            :src="item?.snippet?.thumbnails?.medium?.url"
                            :alt="item?.snippet?.title" />
                        <div class="play"></div>
                        <div class="videoCardContent">
                            <h4>{{ item?.snippet?.title }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FsLightbox :toggler="toggler" :slide="slide" :sources="sources" />
    </section>

	<!-- location section starts here -->
	<Footer />
	<!-- location section ends here -->
</template>
<script>
import Navbar from "@/components/2024/Navbar";
import Footer from "@/components/2024/Footer";
import FsLightbox from "fslightbox-vue/v3";
import axios from 'axios';

export default {
    components: {
		Navbar,
		Footer,
        FsLightbox,
        axios,
	},
    data() {
        return {
            slide: 1,
            videos: [],
            sources: [],
            toggler: false,
        }
    },
    mounted() {
        this.fetchVideos();
    },
    methods: {
        async fetchVideos() {
            const response = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PL6M4J55WQYzxm8Glh8aTIYATArK90hf51&key=AIzaSyDsLvG31mXz6L3cD17_CHmfnp2zz9S5ooE');
            
            this.videos = response.data?.items;
            this.sources = this.videos.map(item => `https://www.youtube.com/watch?v=${item?.snippet?.resourceId?.videoId}`);
            console.log(this.sources)
        },
        openLightboxOnSlide(number) {
            this.slide = number;
            this.toggler = !this.toggler;
        }
    },
}
</script>
<style>
.videoCard {
    position: relative;
}
.videoCard > .play {
    content: '';
    height: 48px;
    width: 68px;
    left: 50%;
    top: 25%;
    margin-left: -34px;
    position: absolute;
    background: url('https://i.ibb.co/j3jcJKv/yt.png') no-repeat;
    cursor: pointer;
}
</style>
