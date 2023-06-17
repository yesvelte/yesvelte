<script lang="ts">
	import { El, Icon } from 'yesvelte'

	export let title = ''
	export let description = ''
	$: href = title.replace(/\s/g, '_').replace(/\//g, '_')
</script>

<El mt="3" mb="2">
	<El tag="h2">
		<El
			tag="a"
			d="inline"
			href="#{href}"
			class="doc-title"
			data-href={encodeURIComponent(href)}
			id={href}>
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
	:global(.doc-title) {
		cursor: pointer;
		display: flex;
		align-items: center;
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
