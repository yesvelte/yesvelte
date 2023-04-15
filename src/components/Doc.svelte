<script lang="ts">
	import { El } from 'yesvelte'

	export let title = ''
	export let description = ''
	$: href = title.replace(/\s/g, '_').replace(/\//g, '_')
</script>

<El mt="3" mb="2">
	<El tag="h2" class="link-primary">
		<El tag="a" href="#{href}" textColor="primary">#</El>
		<El d="inline" data-href={encodeURIComponent(href)} id={href}>
			{title}
		</El>
	</El>
</El>

<slot name="description">
	<p>
		{description}
	</p>
</slot>

<slot />
