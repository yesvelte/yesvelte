import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import previewProcessor from './scripts/preview.js'

function yesvelteCssPreprocess({ theme = 'tabler', path = '$lib/css' } = {}) {
	return {
		markup: ({ content }) => {
			const hasCSS = content.includes('<!-- @css:')

			// const hasCSS = content.includes('export const css = ')
			if (hasCSS) {
				const cssRegex = /<!-- @css:(.*) -->/

				const match = content.match(cssRegex)

				const name = match[1]

				// const code = content.replace(
				// 	`export const css = '${name}'`,
				// 	`import "${path}/${theme}/${name}.css";`
				// )

				const code = content
					.replace(`<!-- @css:${name} -->`, '')
					.replace(`<script lang="ts">`, `<script lang="ts">import '${path}/${theme}/${name}.css'`)

				// const code =
				// 	`<svelte:head><link rel="stylesheet" href="${path}/${theme}/${name}.css"></svelte:head>` +
				// 	content.replace(`<!-- @css:${name} -->`, '')

				return {
					code,
				}
			}

			if (content.indexOf(`/css/${theme}.min.css`) > 0) {
				console.log('has tabler min css')
				content = content.replace(`/css/${theme}.min.css`, `/css/${theme}/index.css`)
			}
			return { content }
		},
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		previewProcessor(),
		vitePreprocess(),
		// yesvelteCssPreprocess({ theme: 'tabler', path: '$lib/css' }),
	],
	kit: {
		adapter: adapter({}),
		prerender: {
			handleMissingId: 'warn',
		},
		alias: {
			// this will match a file
			$scss: './src/scss',
			$components: './src/components',
			'$components/*': './src/components/*',
			yesvelte: './src/lib',
			'yesvelte/*': './src/lib/*',
		},
	},
}

export default config
