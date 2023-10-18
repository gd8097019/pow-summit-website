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
            <h1>Proof of Work 2023 Conference VIDEOS - Prague</h1>
        </div>
	</section>
	<!-- hero section with navbar ends here -->

    <section class="videoSection">
        <div class="videoContainer">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12 p-2" v-for="(item, index) in videos" :key="index">
                    <div class="videoCard">
                        <div class="youtube-player" :data-id="item"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

	<!-- location section starts here -->
	<Footer />
	<!-- location section ends here -->
</template>
<script>
import videos from "@/config/videos.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
    components: {
		Navbar,
		Footer,
	},
    data() {
        return {
            videos,
        }
    },
    mounted() {
        var self = this;
        var playerElements = document.querySelectorAll('.youtube-player');
        for (var n = 0; n < playerElements.length; n++) {
            var videoId = playerElements[n].dataset.id;
            var div = document.createElement('div');
            div.setAttribute('data-id', videoId);
            var thumbNode = document.createElement('img');
            thumbNode.src = '//i.ytimg.com/vi/ID/hqdefault.jpg'.replace('ID', videoId);
            div.appendChild(thumbNode);
            var playButton = document.createElement('div');
            playButton.setAttribute('class', 'play');
            div.appendChild(playButton);
            div.onclick = function () {
                self.labnolIframe(this);
            };
            playerElements[n].appendChild(div);
        }
    },
    methods: {
        labnolIframe(div) {
            var iframe = document.createElement('iframe');
            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&amp;controls=0');
            iframe.setAttribute('width', 400)
            iframe.setAttribute('height', 258)
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '1');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            div.parentNode.replaceChild(iframe, div);
        }
    },
}
</script>
<style>
.youtube-player {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
    margin: 5px;
}

.youtube-player iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: transparent;
}

.youtube-player img {
    object-fit: cover;
    display: block;
    left: 0;
    bottom: 0;
    margin: auto;
    max-width: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    height: auto;
    cursor: pointer;
    -webkit-transition: 0.4s all;
    -moz-transition: 0.4s all;
    transition: 0.4s all;
}

.youtube-player img:hover {
    -webkit-filter: brightness(75%);
}

.youtube-player .play {
    height: 48px;
    width: 68px;
    left: 50%;
    top: 50%;
    margin-left: -34px;
    margin-top: -24px;
    position: absolute;
    background: url('https://i.ibb.co/j3jcJKv/yt.png') no-repeat;
    cursor: pointer;
}
</style>
