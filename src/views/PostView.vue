<template>
	<Head>
		<title>{{ title }}</title>
		<meta name="description" :content="description" />

		<!-- Social -->
		<meta property="og:title" :content="title" />
		<meta property="og:description" :content="description" />
		<meta
			property="og:image"
			:content="`${baseUrl}/img/posts/featuredImg/${img}`"
		/>

		<!-- Twitter -->
		<meta name="twitter:title" :content="title" />
		<meta name="twitter:description" :content="description" />
		<meta
			name="twitter:image"
			:content="`${baseUrl}/img/posts/featuredImg/${img}`"
		/>
		<meta name="twitter:card" content="summary_large_image" />
	</Head>
	<Posts>
		<template #header>
			<section class="blogNavSection">
				<Navbar></Navbar>
				<div class="mainContainer blogContainer">
					<div class="blogHeroContent">
						<img :src="`/img/posts/featuredImg/${img}`" alt="Main Image" />
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<section class="newBlogSection">
				<div class="mainContainer newBlogContainer">
					<div class="articleTags">
						<a
							v-for="(tag, tKey) in tags"
							:key="tKey"
							href=""
							class="articleTag"
							>{{ tag }}</a
						>
					</div>
					<div class="blogHeading">
						<h1>
							{{ title }}
						</h1>
					</div>
					<div class="blogAutherAndDate">
						<div class="blogAuthor">
							<h6 class="authorName" v-if="author">{{ author }}</h6>
						</div>
						<div v-if="date" class="blogDate">
							<p>{{ date }}</p>
						</div>
					</div>
					<div class="blogDetailsContainer">
						<div class="shareBlog">
							<ul>
								<li role="button" @click="share('facebook')">
									<img src="@/assets/images/blog-facebook.svg" alt="" />
								</li>
								<li role="button" @click="share('twitter')">
									<img src="@/assets/images/blog-twitter.svg" alt="" />
								</li>
								<li role="button" @click="share('linkedin')">
									<img src="@/assets/images/blog-linkedin.svg" alt="" />
								</li>
								<li role="button" @click="copyClipboard()">
									<img src="@/assets/images/blog-copy.svg" alt="" />
									<p
										v-if="showCopyClipboardText"
										class="text-secondary font-weight-light"
										style="font-size: 10px"
									>
										Copied!
									</p>
								</li>
								<li role="button">
									<a
										:href="`mailto:?subject=${this.title}&amp;body=${this.fullPath}`"
									>
										<img src="@/assets/images/blog-email.svg" alt="" />
									</a>
								</li>
							</ul>
						</div>
						<div class="blogDetailsContent">
							<p v-html="body"></p>
							<h4>Share it on:</h4>
							<div class="postShare">
								<div role="button" @click="share('facebook')">
									<img src="@/assets/images/blog-facebook.svg" alt="" />
								</div>
								<div role="button" @click="share('twitter')">
									<img src="@/assets/images/blog-twitter.svg" alt="" />
								</div>
								<div role="button" @click="share('linkedin')">
									<img src="@/assets/images/blog-linkedin.svg" alt="" />
								</div>
								<div role="button" @click="share('reddit')">
									<img src="@/assets/images/blog-reddit.svg" width="32" height="32" alt="" />
								</div>
							</div>
							<div class="learnMore">
								<h4>Thank you for reading this article!</h4>
								<div class="learnMoreLinks">
									<a target="_blank" href="https://powsummit.com/">
										Learn more about the POW Summit.</a
									>
									<router-link to="/ethereum-classic">
										Learn more about Ethereum Classic.</router-link
									>
									<router-link to="/what-is-etc-cooperative">
										Learn more about ETC Cooperative.</router-link
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</template>
	</Posts>

    <Footer />
</template>
<script>
import { Head, useHead } from "@vueuse/head";
import Posts from "@/layouts/Posts.vue";
import Navbar from "@/components/2024/Navbar/index.vue";
import Footer from "@/components/2024/Footer/index.vue";

export default {
	components: {
		Head,
		Posts,
		Navbar,
        Footer,
	},
	data() {
		return {
			body: null,
			title: null,
			description: null,
			img: null,
			author: null,
			date: null,
			tags: [],
			baseUrl: null,
			fullPath: null,
			mayAlsoLikeArticles: [],
			showCopyClipboardText: false,
		};
	},
	watch: {
		
		showCopyClipboardText: function (val) {
			setTimeout(() => {
				if (val === true) {
					this.showCopyClipboardText = false;
				}
			}, 3000);
		},
	},
	methods: {
		getContent() {
			let sourceFile = `${this.$route.params.alias}/index.md`;

			import(`@/contents/posts/${sourceFile}`)
				.then((module) => {
					const { html, meta } = this.md(module.default);
					this.body = html;
					this.title = meta.title || null;
					this.description =
						meta.description || "See latest post from ETC Cooperative";
					this.img = meta.featuredImage || null;
					this.author = meta.author || null;
					this.tags = meta.tags || [];
					this.baseUrl = window.location.origin;
					this.fullPath = new URL(this.$route.href, this.baseUrl).href;
					this.date = this.tryParseDateFromAlias(this.$route.params.alias);
				})
				.catch(() => {
					// load default locale (en)
					import(`@/contents/posts/${sourceFile}`).then((module) => {
						const { html, meta } = this.md(module.default);
						this.body = html;
						this.title = meta.title || null;
						this.description =
							meta.description || "See latest post from ETC Cooperative";
						this.img = meta.featuredImage || null;
						this.author = meta.author || null;
						this.tags = meta.tags || [];
						this.baseUrl = window.location.origin;
						this.fullPath = new URL(this.$route.href, this.baseUrl).href;
						this.date = this.tryParseDateFromAlias(this.$route.params.alias);
					});
				});
		},
		getMayAlsoLikeArticles(locale) {
			import(`@/contents/posts.home.${locale}.json`).then((module) => {
				let latestArticles = module.default;
				latestArticles = latestArticles.filter((latestArticle) => {
					let alias = this.$route.params.alias;
					if (latestArticle.alias !== alias) {
						return latestArticle;
					}
				});
				this.mayAlsoLikeArticles = latestArticles.slice(0, 3);
			});
		},
		tryParseDateFromAlias(alias) {
			let dateText = "";

			if (alias) {
				const monthNames = [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December",
				];
				const splited = alias.split("-");

				if (splited.length > 3) {
					const year = splited[0] || null;
					const month = splited[1] || null;
					const day = splited[2] || null;

					const date = new Date(`${year}-${month}-${day}`);

					if (Object.prototype.toString.call(date) === "[object Date]") {
						// it is a date
						if (isNaN(date)) {
							// d.getTime() or d.valueOf() will also work
							// date object is not valid
							dateText = "";
						} else {
							dateText = `${monthNames[date.getUTCMonth()]} ${String(
								date.getUTCDate()
							).padStart(2, "0")}, ${date.getUTCFullYear()}`;
						}
					} else {
						dateText = "";
					}
				}
			}

			return dateText;
		},
		share(platform) {
			let path = "";
			switch (platform) {
				case "twitter":
					path = `https://twitter.com/intent/tweet?url=${this.clearTitle(
						this.title
					)} ${this.fullPath}`;
					break;
				case "facebook":
					path = `https://www.facebook.com/sharer.php?u=${this.fullPath}`;
					break;
				case "linkedin":
					path = `https://www.linkedin.com/sharing/share-offsite/?url=${this.fullPath}`;
					break;
				case "reddit":
					path = `https://www.reddit.com/submit?url=` + encodeURIComponent(`${this.fullPath}&title=${this.clearTitle(this.title)}`);
					break;
			}

			if (path) {
				window.open(path, "POW Summit", "width=650,height=650");
			}
		},
		clearTitle(title) {
			return title
				.replaceAll(
					"#", //this character makes url as anchor and broke everything
					" "
				)
				.replaceAll(
					"?", //this character makes url as parameter and broke everything
					" "
				)
				.replaceAll(
					"&", //this character makes url as paramater too and broke everything
					" "
				);
		},
		async copyClipboard() {
			try {
				await navigator.clipboard.writeText(this.fullPath);
				this.showCopyClipboardText = true;
			} catch (err) {}
		},
	},
	mounted() {
		this.getContent();
		// this.getMayAlsoLikeArticles(locale);
	},
	beforeRouteLeave(to, from, next) {
		// revert all metadata when you leaving page
		useHead({
			title: "POW Summit",
			meta: [
				{
					name: "description",
					content: "Proof of Work Summit - Securing blockchain's future",
				},
				{
                    property: "og:title",
                    content: "POW Summit"
                },
				{
					property: "og:description",
					content: "Proof of Work Summit - Securing blockchain's future",
				},
				{
					property: "og:image",
					content: "https://powsummit.com/img/social-2024.png",
				},
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:title", content: "POW Summit" },
				{
					name: "twitter:description",
					content: "Proof of Work Summit - Securing blockchain's future",
				},
				{
					name: "twitter:image",
					content: "https://powsummit.com/img/social-2024.png",
				},
			],
		});
		next();
	},
};
</script>
