<script lang="ts">
	import { El, Icon } from 'yesvelte'

	export let title = ''
	export let description = ''
	$: href = title.replace(/\s/g, '_').replace(/\//g, '_')
</script>

<El class="y-doc-title-wrapper">
	<El mb="2" tag="h2">
		<El
			tag="a"
			d="inline"
			href="#{href}"
			class="doc-title"
			data-href={encodeURIComponent(href)}
			id={href}
			style="scroll-margin-top: 5rem">
			{title}

			<Icon name="link" />
		</El>
	</El>
</El>

<slot name="description">
	<p>
		{description}
	</p>
</slot>

<slot />

<style>
	:global(.y-doc-title-wrapper) {
		margin-top: 2rem;
	}
	:global(.doc-title) {
		cursor: pointer;
		display: flex !important;
		align-items: center;
		gap: 4px;
	}

	:global(.doc-title) :global(.y-icon) {
		opacity: 0;
		vertical-align: middle;
		/* margin-left: 0.25rem; */
	}

	:global(.doc-title):hover :global(.y-icon) {
		opacity: 1;
	}
</style>
