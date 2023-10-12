import postcss from 'postcss'
import rtlCss from 'postcss-rtlcss'
import replace from 'postcss-selector-replace'
import { mkdir, stat, writeFile } from 'fs/promises'
import path from 'path'
import cssNano from 'cssnano'
import sass from 'sass'

const defaultThemes = ['tabler', 'daisyui']
const destinations = ['./static/css', './src/lib/css']

async function exists(f) {
	try {
		await stat(f)
		return true
	} catch {
		return false
	}
}

async function compileScss(file) {
	// console.log(`Compiling ${file}...`)
	return sass
		.compileAsync(file, {
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
		.then((res) => res.css)
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

async function generateRtl(css) {
	return postcss([cssNano({ preset: 'default' }), rtlCss({ source: 'ltr' })])
		.process(css)
		.then((res) => {
			return res.css
		})
}

async function generateStyles(style) {
	console.log('Generate styles for ' + style + '...\n')

	const before = `./src/scss/${style}/${style}.scss`
	if (await exists(before)) {
		console.log(`Generate ${style}.placeholder.css...`)

		const beforeCss = await compileScss(before)

		const placeholderCss = await classToPlaceholder(beforeCss)
		await writeFile(
			`./src/scss/${style}/_${style}.placeholder.scss`,
			`/* This file is auto generated, do not edit */\n` + placeholderCss
		)
	}

	const index = `./src/scss/${style}/index.scss`
	if (await exists(index)) {
		console.log(`Generate ${style}.css and ${style}.min.css...`)

		const indexCss = await compileScss(index)

		for (let destination of destinations) {
			if (!(await exists(destination))) {
				await mkdir(destination)
			}

			await writeFile(`${destination}/${style}.css`, indexCss)
			console.log(`File "${destination}/${style}.css" successfully created!`)

			minifyCss(indexCss)
				.then((minCss) => writeFile(`${destination}/${style}.min.css`, minCss))
				.then((res) => {
					console.log(`File "${destination}/${style}.min.css" successfully created!`)
				})

			generateRtl(indexCss)
				.then((rtl) => writeFile(`${destination}/${style}.rtl.min.css`, rtl))
				.then((res) => {
					console.log(`File "${destination}/${style}.rtl.min.css" successfully created!`)
				})
		}
	} else {
		console.log(`[Error] Theme "${style}" doesn'exists!`)
	}
	console.log('\n')
}

let styles = process.argv.slice(2)
if (styles.length === 0) styles = defaultThemes

for (let style of styles) {
	generateStyles(style)
}
