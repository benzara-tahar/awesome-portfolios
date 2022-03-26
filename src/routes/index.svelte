<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import joshuaComeauJpg from '../../static/portfolios/joshua-comeau.jpg';
	import braydonCoyerJpg from '../../static/portfolios/braydon-coyer.jpg';
	import jheyTompkinsJpg from '../../static/portfolios/jhey-tompkins.jpg';
	import adenekanWonderfulJpg from '../../static/portfolios/adenekan-wonderful.jpg';
	import ryanWarnerJpg from '../../static/portfolios/ryan-warner.jpg';
	import brittanyChiangJpg from '../../static/portfolios/brittany-chiang.jpg';
	import jacekJeznachJpg from '../../static/portfolios/jacek-jeznach.jpg';
	import olaoluOlawuyiJpg from '../../static/portfolios/olaolu-olawuyi.jpg';
	import cassidyWilliamsJpg from '../../static/portfolios/cassidy-williams.jpg';
	import adrianZumbrunnenJpg from '../../static/portfolios/adrian-zumbrunnen.jpg';
	import keiranLovettJpg from '../../static/portfolios/keiran-lovett.jpg';
	import rickWaaldersJpg from '../../static/portfolios/rick-waalders.jpg';
	import prachantSaniJpg from '../../static/portfolios/prachant-sani.jpg';
	import souravDeyJpg from '../../static/portfolios/sourav-dey.jpg';
	let portfolios = [
		{
			name: 'Brittany Chiang',
			url: 'https://brittanychiang.com',
			previewPhoto: brittanyChiangJpg
		},
		{
			name: 'Jacek Jeznach',
			url: 'https://jacekjeznach.com',
			previewPhoto: jacekJeznachJpg
		},
		{
			name: 'Jhey Tompkins',
			url: 'https://jhey.dev',
			previewPhoto: jheyTompkinsJpg
		},
		{
			name: 'Braydon Coyer',
			url: 'https://braydoncoyer.dev',
			previewPhoto: braydonCoyerJpg
		},
		{
			name: 'Adenekan Wonderful',
			url: 'https://www.codewonders.dev',
			previewPhoto: adenekanWonderfulJpg
		},
		{
			name: 'Joshua Comeau',
			url: 'https://www.joshwcomeau.com',
			previewPhoto: joshuaComeauJpg
		},

		{
			name: 'Ryan Warner',
			url: 'https://ryan.warner.codes.',
			previewPhoto: ryanWarnerJpg
		},

		{
			name: 'Olaolu Olawuyi',
			url: 'https://olaolu.dev',
			previewPhoto: olaoluOlawuyiJpg
		},

		{
			name: 'Cassidy Williams',
			url: 'https://cassidoo.co',
			previewPhoto: cassidyWilliamsJpg
		},

		{
			name: 'Adrian Zumbrunnen',
			url: 'https://azumbrunnen.me',
			previewPhoto: adrianZumbrunnenJpg
		},

		{
			name: 'Keiran Lovett',
			url: 'https://keiranlovett.com',
			previewPhoto: keiranLovettJpg
		},

		{
			name: 'Rick Waalders',
			url: 'https://www.rickwaalders.com',
			previewPhoto: rickWaaldersJpg
		},

		{
			name: 'Prachant Sani',
			url: 'https://prashantsani.com',
			previewPhoto: prachantSaniJpg
		},

		{
			name: 'Sourav Dey',
			url: 'https://www.souravdey.space',
			previewPhoto: souravDeyJpg
		}
	];
</script>

<svelte:head>
	<title>Curated list of Developer portfolios for your inspiration.</title>
</svelte:head>

<section class="p-8">
	<div
		class="mt-4 grid sm:grid-cols-2 grid-cols-1 gap-4 items-center justify-center justify-items-center sm:justify-items-stretch max-w-4xl mx-auto"
	>
		<div class="sm:col-span-2 w-full">
			<h1
				class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400 via-yellow-400  animated-gradient"
			>
				Creative developer portfolios
			</h1>
			<p class="text-lg text-gray-50 mt-2">
				Curated list of Developer Github Profiles for your inspiration.
			</p>
		</div>
		{#each portfolios as portfolio}
			<div class="my-2 max-w-sm cursor-pointer group flex flex-col space-y-2">
				<a href={portfolio.url} target="_blank">
					<img
						src={portfolio.previewPhoto}
						alt={portfolio.name}
						class="rounded-lg group-hover:transform group-hover:-translate-y-1 transition-transform object-cover grou-hover:shadow-lg shadow-red-500"
					/>
				</a>
				<span class="text-gray-100 group-hover:text-primary-50 text-lg mt-4">
					{portfolio.name}
				</span>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.animated-gradient {
		animation: hue 10s infinite linear;
		-webkit-animation: hue 10s infinite linear;
	}

	@keyframes hue {
		from {
			-webkit-filter: hue-rotate(0deg);
		}
		to {
			-webkit-filter: hue-rotate(-360deg);
		}
	}
</style>
