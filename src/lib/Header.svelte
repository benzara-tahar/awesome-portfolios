<script lang="ts">
	import Ring from './Ring.svelte';
</script>

<nav class="max-w-5xl flex justify-between mx-auto p-4 sm:items-center items-start">
	<div class="">
		<div
			style="font-size: clamp(1.5rem, 2vw, 2.8rem);"
			class="flex flex-row flex-wrap  font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400 via-yellow-400  animated-gradient"
		>
			<span> Inspi </span>
			<Ring />
			<span class="pl-7 md:pl-4 lg:pl-5">
				{'{developer}'}
			</span>
			<span class="pl-2"> portfolios </span>
		</div>
		<p class="text-lg text-gray-300 my-2" style="font-size: clamp(0.85rem, 4vw, 1.4rem);">
			A Curated list of developer Portfolios for your inspiration.
		</p>
	</div>
	<a
		href="https://github.com/benzara-tahar/awesome-portfolios"
		target="_blanjk"
		class="text-slate-200 hover:text-white"
		title="contribute to this project on github"
	>
		<svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path fill="none" d="M0 0h24v24H0z" />
				<path
					fill="currentColor"
					d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
				/>
			</g>
		</svg>
	</a>
</nav>
