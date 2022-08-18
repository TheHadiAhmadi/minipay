import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		prerender: {
			default: false,
			entries: []
		},
		adapter: adapter()
	}
};

export default config;
