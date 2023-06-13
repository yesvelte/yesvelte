import postcss from 'postcss'
import replace from 'postcss-selector-replace'
import fs from 'fs'
import path from 'path'
import cssNano from 'cssnano'
import sass from 'sass'

const defaultThemes = ['tabler', 'daisyui']
const destinations = ['./static/css', './src/lib/css']

function compileScss(file) {
	// console.log(`Compiling ${file}...`)
	const { css } = sass.compile(file, {
		/** @type {import ('sass').FileImporter<'sync'>[]} */
		importers: [
			{
				findFileUrl(url) {
					if (url.startsWith('@') || url.startsWith('~')) {
						url = path.resolve('node_modules', url.substring(1))
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

async function classToPlaceholder(css) {
	return postcss([
		replace({
			before: [/\./g],
			after: ['%'],
		}),
	])
		.process(css, { from: undefined })
		.then(async (result) => {
			return result.css
		})
}

async function minifyCss(css) {
	return postcss([
		cssNano({ preset: 'default' }), // minify
	])
		.process(css, { from: undefined })
		.then(async (result) => {
			return result.css
		})
}

async function generateStyles(style) {
	console.log('Generate styles for ' + style + '...\n')

	const before = `./src/scss/${style}/${style}.scss`
	if (fs.existsSync(before)) {
		console.log(`Generate ${style}.placeholder.css...`)

		const beforeCss = compileScss(before)

		const placeholderCss = await classToPlaceholder(beforeCss)
		fs.writeFileSync(
			`./src/scss/${style}/_${style}.placeholder.scss`,
			`/* This file is auto generated, do not edit */\n` + placeholderCss
		)
	}

	const index = `./src/scss/${style}/index.scss`
	if (fs.existsSync(index)) {
		console.log(`Generate ${style}.css and ${style}.min.css...`)

		const indexCss = compileScss(index)

		for (let destination of destinations) {
			if (!fs.existsSync(destination)) {
				fs.mkdirSync(destination)
			}

			fs.writeFileSync(`${destination}/${style}.css`, indexCss)
			console.log(`File "${destination}/${style}.css" successfully created!`)

			minifyCss(indexCss).then((minCss) =>
				fs.writeFileSync(`${destination}/${style}.min.css`, minCss)
			)
			console.log(`File "${destination}/${style}.min.css" successfully created!`)
		}
	} else {
		console.log(`[Error] Theme "${style}" doesn't exists!`)
	}
	console.log('\n')
}

let styles = process.argv.slice(2)
if (styles.length === 0) styles = defaultThemes

for (let style of styles) {
	generateStyles(style)
}
