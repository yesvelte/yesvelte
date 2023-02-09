import { parse, walk } from 'svelte/compiler'
import path from 'path'
import fs from 'fs'
import magicString from 'magic-string'

const styleRegex = /(<style(\s[^]*?)?>([^]*?)<\/style>)/gi
const scriptRegex = /(<script(\s[^]*?)?>([^]*?)<\/script>)/gi

/**
 *
 * @param {string} content
 * @returns {{markup: string, script: string, style: string}}
 */
function spliteSections(content) {
	const script = content.match(scriptRegex)?.join('').trim() ?? ''
	const style = content.match(styleRegex)?.join('').trim() ?? ''
	const markup = content.replace(styleRegex, '').replace(scriptRegex, '').trim()

	return {
		script,
		style,
		markup,
	}
}

/** @return {import('svelte-preprocess/dist/types').PreprocessorGroup} */
export default function previewProcessor() {
	return {
		markup({ content, filename }) {
			if (!filename) return

			const { markup, style, script } = spliteSections(content)

			const hasPreviewRegex = /<Preview[^>]+({src}|src=[{"'`])[^>]*>/g
			const hasPreview = markup.match(hasPreviewRegex)
			if (!hasPreview) return

			const result = new magicString(markup)
			const ast = parse(markup)

			walk(ast.html, {
				enter(node) {
					if (node.type !== 'InlineComponent' || node.name !== 'Preview') return

					/** @type {import('svelte/types/compiler/interfaces').Attribute} */
					const srcAttribute = node.attributes.find(
						(/** @type {any} */ node) => node.name === 'src'
					)
					if (!srcAttribute) throw Error("Preview doesn't have src prop")

					/** @type {string} */
					const relativeSrc = srcAttribute.value[0]?.data
					if (!relativeSrc) throw Error("Preview's src should be path to example source code")

					const absoluteSrc = path.resolve(path.dirname(filename), relativeSrc)
					if (!absoluteSrc) throw Error('Cannot locate file: ' + relativeSrc)

					const sourceCode = fs.readFileSync(absoluteSrc, 'utf-8')
					if (!sourceCode) throw Error('Cannot load ' + relativeSrc)

					const {
						markup: previewMarkup,
						script: previewScript,
						style: previewStyle,
					} = spliteSections(sourceCode)

					result.remove(srcAttribute.start - 1, srcAttribute.end)

					const index = node.start + node.name.length + 1

					result.appendRight(index, ` src="${absoluteSrc}"`)
					result.appendRight(index, ' markup={`' + previewMarkup + '`}')

					if (previewScript) {
						console.log(previewScript)
						let escaped = previewScript.replace(/\$\{/g, '\\${').replace(/\`/g, '\\`')

						if (escaped.match(/^<script\slang="ts">/)) {
							escaped = escaped.replace(/<script\slang="ts">/, '<script>')
						}

						result.appendRight(index, ' script={`' + escaped + '`}')
					}

					if (previewStyle) result.appendRight(index, ' style={`' + previewStyle + '`}')
				},
			})

			// attach script and style tags
			if (script) result.prependLeft(0, script)
			if (style) result.appendRight(result.length(), style)
			console.log(result.toString())
			return {
				code: result.toString(),
				map: result.generateMap({ hires: true, file: filename }),
			}
		},
	}
}
