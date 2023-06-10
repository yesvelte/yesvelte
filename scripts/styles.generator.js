import postcss from 'postcss'
import replace from 'postcss-selector-replace'
import fs from 'fs'
import path from 'path'
import cssNano from 'cssnano'
import postcssFilterRules from 'postcss-filter-rules'
import sass from 'sass'

const components = [
	'app',
	'app-body',
	'app-header',
	'app-footer',
	'accordions',
	'accordion',
	'alert',
	'autocomplete',
	'avatar',
	'avatar-list',
	'badge',
	'button',
	'button-group',
	'breadcrumb',
	'card',
	'checkbox',
	'checkbox-group',
	'date-picker',
	'divider',
	'dot',
	'dropdown',
	'editor',
	'el',
	'fieldset',
	'form-autocomplete',
	'file-upload',
	'floating',
	'footer',
	'icon',
	'input',
	'label',
	'menu',
	'modal',
	'modal-container',
	'nav',
	'navbar',
	'offcanvas',
	'page',
	'page-body',
	'page-header',
	'pagination',
	'popover',
	'popup',
	'progress',
	'slider',
	'radio',
	'radio-group',
	'ribbon',
	'select',
	'sidebar',
	'spinner',
	'stamp',
	'steps',
	'step-item',
	'status',
	'switch',
	'tabs',
	'tab',
	'table',
	'table-row',
	'table-cell',
	'textarea',
	'toast',
	'tooltip',
	// Form
	'form-field',
	'form-fieldset',
	'form-input',
	'form-checkbox',
	'form-editor',
	'form-file-upload',
	'form-checkbox-group',
	'form-radio-group',
	'form-switch',
	'form-select',
	'form-textarea',
]

const destinations = ['./static/css', './src/lib/css']

function compileScss(file) {
	console.log(`Compiling ${file}...`)
	const { css } = sass.compile(file, {
		/** @type {import ('sass').FileImporter<'sync'>[]} */
		importers: [
			{
				findFileUrl(url) {
					console.log(`Compiling ${url}...`)
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
		.process(css)
		.then(async (result) => {
			return result.css
		})
}

async function filterCss(css, filter) {
	return postcss([
		postcssFilterRules({
			// clean rules
			filter,
		}),
		// cssNano({ preset: 'default' }), // minify
	])
		.process(css, { from: undefined })
		.then((result) => result.css)
}

async function getBaseStyles(css) {
	return filterCss(css, (selector, parts) => {
		return !selector.startsWith('.')
	})
}

async function getComponentStyles(css, componentName) {
	console.log('get component style', componentName)
	return filterCss(css, (selector, parts) => {
		return parts.find((part) => part.includes('.y-' + componentName))
	})
}

async function generateStyles(style) {
	console.log('generate styles for ' + style)

	const before = `./src/scss/${style}/${style}.scss`
	const beforeCss = compileScss(before)

	const placeholderCss = await classToPlaceholder(beforeCss)
	fs.writeFileSync(`./src/scss/${style}/${style}.placeholder.scss`, placeholderCss)

	const index = `./src/scss/${style}/index.scss`
	const indexCss = compileScss(index)

	fs.writeFileSync(`./src/scss/${style}/index.all.css`, indexCss)

	// filter rules
	const base = await getBaseStyles(indexCss)

	if (!fs.existsSync(`./src/lib/css/${style}`)) {
		fs.mkdirSync('./src/lib/css/' + style)
	}
	fs.writeFileSync(`./src/lib/css/${style}/index.css`, base)

	for (const component of components) {
		const componentCss = await getComponentStyles(indexCss, component)

		if (!fs.existsSync(`./src/lib/css/${style}`)) {
			fs.mkdir('./src/lib/css/' + style)
		}

		fs.writeFileSync(`./src/lib/css/${style}/${component}.css`, componentCss)
	}

	// const base = await getBaseStyles(result.css)

	// fs.writeFileSync('./src/scss/tabler/tabler.scss', result.css)
	// fs.writeFileSync('./src/scss/tabler/tabler.base.scss', base)

	// const css = compile(before)

	// 1 compile scss
	// 2 get base css
	// 3 get css of components...
}
const styles = ['tabler']

for (let style of styles) {
	generateStyles(style)
}

// import sass from 'sass'
// import cssNano from 'cssnano'
// import postcssFilterRules from 'postcss-filter-rules'

// async function generateTablerCss() {
// 	const css = compile('before-tabler')
// 	return new Promise((resolve) => {
// 		postcss([
// 			replace({
// 				before: [/\./g],
// 				after: ['%'],
// 			}),
// 		])
// 			.process(css)
// 			.then(async (result) => {
// 				const base = await getBaseStyles(result.css)

// 				fs.writeFileSync('./src/scss/tabler/tabler.scss', result.css)
// 				fs.writeFileSync('./src/scss/tabler/tabler.base.scss', base)
// 			})
// 	})
// }
// generateTablerCss()

// // TODO: Optimize (only compile one)
// // const files = ['tabler', 'daisyui']
// const files = ['tabler']

// function compile(file) {
// 	console.log(`Compiling ${file}...`)
// 	const { css } = sass.compile(`./src/scss/${file}/index.scss`, {
// 		/** @type {import ('sass').FileImporter<'sync'>[]} */
// 		importers: [
// 			{
// 				findFileUrl(url) {
// 					console.log(`Compiling ${url}...`)
// 					if (url.startsWith('@') || url.startsWith('~')) {
// 						url = path.resolve('node_modules', url.substr(1))
// 					}
// 					if (url.startsWith('../../node_modules/')) {
// 						url = path.resolve('node_modules', url.replace('../../node_modules/', ''))
// 					}
// 					return new URL('file://' + url)
// 				},
// 			},
// 		],
// 		loadPaths: ['node_modules'],
// 	})
// 	return css
// }

// const prefixes = ['.y-', '.ql-']

// async function clean(css) {
// 	return postcss([
// 		postcssFilterRules({
// 			// clean rules
// 			filter: (selector, parts) => {
// 				console.log({ selector, parts })
// 				return prefixes.some((prefix) => selector.startsWith(prefix)) || !selector.startsWith('.')
// 			},
// 		}),
// 		cssNano({ preset: 'default' }), // minify
// 	])
// 		.process(css, { from: undefined })
// 		.then((result) => result.css)
// }

// async function getBaseStyles(css) {
// 	return postcss([
// 		postcssFilterRules({
// 			// clean rules
// 			filter: (selector, parts) => {
// 				console.log({ selector, parts })
// 				return !selector.startsWith('.')
// 			},
// 		}),
// 		cssNano({ preset: 'default' }), // minify
// 	])
// 		.process(css, { from: undefined })
// 		.then((result) => result.css)
// }

// for (const file of files) {
// 	const css = compile(file)
// 	// checking if the folder doesn't exist yet and creating it
// 	if (!fs.existsSync('./static/css')) {
// 		fs.mkdirSync('./static/css', { recursive: true })
// 	}
// 	fs.writeFileSync(`./static/css/${file}.css`, css, {})

// 	if (!fs.existsSync('./src/lib/css')) {
// 		fs.mkdirSync('./src/lib/css', { recursive: true })
// 	}
// 	fs.writeFileSync(`./src/lib/css/${file}.css`, css, {})

// 	clean(css).then((minCss) => {
// 		fs.writeFileSync(`./static/css/${file}.min.css`, minCss, {})
// 		fs.writeFileSync(`./src/lib/css/${file}.min.css`, minCss, {})
// 	})
// }
