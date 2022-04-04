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
	import christopherCherupilJpg from '../../static/portfolios/christopher-cherupil.jpg';
	import bentonBoychukChorneyJpg from '../../static/portfolios/benton-boychuk-chorney.jpg';

	import Ring from '$lib/Ring.svelte';
	import PortfolioCard from '$lib/PortfolioCard.svelte';
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
		},

		{
			name: 'Christopher Cherupil',
			url: 'https://cherupil.com',
			previewPhoto: christopherCherupilJpg
		},
		{
			name: 'Benton Boychuk-Chorney',
			url: 'https://www.benten.ca',
			previewPhoto: bentonBoychukChorneyJpg
		}
	];
</script>

<svelte:head>
	<title>Curated list of Developer portfolios for your inspiration.</title>
</svelte:head>

<section class="container p-4 mx-auto">
	<div
		class="mt-6  grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center  justify-items-center  max-w-5xl mx-auto"
	>
		{#each portfolios as portfolio}
			<PortfolioCard {portfolio} />
		{/each}
	</div>
</section>
