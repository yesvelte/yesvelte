<script lang="ts">
	import BackgroundColor from '../routes/docs/BackgroundColor.svelte'
	export let component = BackgroundColor

	export let markup: string | undefined = undefined
	export let script: string | undefined = undefined
	export let style: string | undefined = undefined
	export let src: string | undefined = undefined
</script>

<svelte:component this={BackgroundColor} />
<h3>Preview</h3>
<div>
	<slot />
</div>
<h3>src</h3>
<pre><code>{@html src}</code></pre>
<h3>Markup</h3>
<pre><code>{markup}</code></pre>
<h3>Script</h3>
<pre><code>{script}</code></pre>
<h3>Style</h3>
<pre><code>{style}</code></pre>
