<script lang="ts">
	import Prism from 'prismjs'
	import 'prismjs/plugins/line-numbers/prism-line-numbers'
	import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
	import 'prismjs/plugins/toolbar/prism-toolbar'
	import 'prismjs/plugins/toolbar/prism-toolbar.css'
	import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'
	import 'prismjs/themes/prism.css'

	export let language: 'css' | 'javascript' | 'html'
	export let source: string = ''

	let root: HTMLElement

	// check if window is defined, if not, we are in SSR mode
	if (typeof window !== 'undefined') {
		window.Prism = window.Prism || {}
		window.Prism.manual = true
	}

	function highlight(root: HTMLElement, language: string, source: string) {
		root.textContent = source
		Prism.highlightElement(root)
	}

	$: {
		if (root && Prism) {
			highlight(root, language, source)
		}
	}
</script>

<div class="prism--show-copy-button">
	<pre class="line-numbers"><code bind:this={root} class="language-{language}" /></pre>
</div>

<style>
	:global(pre[class*='language-']) {
		margin: 0;
	}

	:global(.y-el-theme-dark) :global([class*='language-']),
	:global([data-bs-theme='dark']) :global([class*='language-']) {
		background-color: transparent !important;
		text-shadow: 0 1px #000000;
		color: white;
	}

	:global(.y-el-theme-dark) :global([class*='language-']) :global(.token.operator),
	:global(.token.entity),
	:global(.token.url),
	:global(.language-css) :global(.token.string),
	:global(.style) :global(.token.string),
	:global([data-bs-theme='dark']) :global([class*='language-']) :global(.token.operator),
	:global(.token.entity),
	:global(.token.url),
	:global(.language-css) :global(.token.string),
	:global(.style) :global(.token.string) {
		color: #9a6e3a;
		background: transparent;
	}
</style>
