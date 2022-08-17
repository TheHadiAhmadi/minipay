import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		prerender: {
			default: false,
			entries: []
		},
		
		adapter: adapter({
			fallback: 'index.html',	
		})
	}
};

export default config;
