import fs from 'fs'
import path from 'path'
import sass from 'sass'
import cssNano from 'cssnano'
import postcss from 'postcss'
import postcssFilterRules from 'postcss-filter-rules'

// TODO: Optimize (only compile one)
const files = ['tabler', 'daisyui']

function compile(file) {
	console.log(`Compiling ${file}...`)
	const { css } = sass.compile(`./src/scss/${file}/index.scss`, {
		/** @type {import ('sass').FileImporter<'sync'>[]} */
		importers: [
			{
				findFileUrl(url) {
					console.log(`Compiling ${url}...`)
					if (url.startsWith('@') || url.startsWith('~')) {
						url = path.resolve('node_modules', url.substr(1))
					}
					if (url.startsWith('../../node_modules/')) {
						url = path.resolve('node_modules', url.replace('../../node_modules/', ''))
					}
					return new URL('file://' + url)
				},
			},
		],
		loadPaths: ['node_modules'],
	})
	return css
}

const prefixes = ['.y-', '.noUi-']

async function clean(css) {
	return postcss([
		postcssFilterRules({
			// clean rules
			filter: (selector, parts) => {
				return prefixes.some((prefix) => selector.startsWith(prefix)) || !selector.startsWith('.')
			},
		}),
		cssNano({ preset: 'default' }), // minify
	])
		.process(css, { from: undefined })
		.then((result) => result.css)
}

for (const file of files) {
	const css = compile(file)
	// checking if the folder doesn't exist yet and creating it
	if (!fs.existsSync('./static/css')) {
		fs.mkdirSync('./static/css', { recursive: true })
	}
	fs.writeFileSync(`./static/css/${file}.css`, css, {})

	if (!fs.existsSync('./src/lib/css')) {
		fs.mkdirSync('./src/lib/css', { recursive: true })
	}
	fs.writeFileSync(`./src/lib/css/${file}.css`, css, {})

	clean(css).then((minCss) => {
		fs.writeFileSync(`./static/css/${file}.min.css`, minCss, {})
		fs.writeFileSync(`./src/lib/css/${file}.min.css`, minCss, {})
	})
}
