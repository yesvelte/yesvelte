<script lang="ts">
	export let markup: string | undefined = undefined
	export let script: string | undefined = undefined
	export let style: string | undefined = undefined
	export let src: string | undefined = undefined
</script>

<h3>Preview</h3>
<div>
	<slot />
</div>
{#if markup}
	<h3>Markup</h3>
	<pre><code>{markup}</code></pre>
{/if}
{#if script}
	<h3>Script</h3>
	<pre><code>{script}</code></pre>
{/if}
{#if style}
	<h3>Style</h3>
	<pre><code>{style}</code></pre>
{/if}
{#if src && false}
	<h3>Source</h3>
	<pre><code>{src}</code></pre>
{/if}
