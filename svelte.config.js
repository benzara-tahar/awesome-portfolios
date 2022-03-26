import adapter from '@sveltejs/adapter-vercel';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import mediaMinMax from 'postcss-media-minmax';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			preserve: ['module'],
			postcss: {
				plugins: [autoprefixer, cssnano, mediaMinMax]
			}
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
