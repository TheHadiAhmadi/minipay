import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			default: false,
			entries: []
		},
		adapter: adapter()
	}
};

export default config;
