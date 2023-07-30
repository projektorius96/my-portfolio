// Credits to CaptainCodeman : @https://github.com/CaptainCodeman/svelte-theme-select/blob/master/svelte.config.js
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({
		postcss: {
			plugins: [
				import("tailwindcss").then(()=>true), 
				import("autoprefixer").then(()=>true), 
			]
		}
	})],
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null,
		}),
		paths: {
			base: '',
		},
	},
}

export default config