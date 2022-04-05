<script lang="ts">
	export let portfolio = undefined;
</script>

<div class="my-2 max-w-sm cursor-pointer group flex flex-col space-y-2 items-center">
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
