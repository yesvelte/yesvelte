import path from 'path'
import watchAndRun from 'vite-plugin-watch-and-run'
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'


export default defineConfig({
	server: { port: 3000 },
	plugins: [
		sveltekit(),
		watchAndRun([
			{
			  name: 'generate styles',
			  watchKind: ['add', 'change', 'unlink'],
			  watch: path.resolve('src/scss/**/*.scss'),
			  run: 'npm run style',
			  delay: 300,
			}
		])
	],
})
