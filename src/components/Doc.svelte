<script lang="ts">
	export let title: string = ''
	export let description: string = ''
	$: href = title.replace(/\s/g, '_').replace(/\//g, '_')
</script>

<div class="mt-3 mb-2">
	<a href="#{href}">#</a>
	<h2 class="d-inline" data-href={encodeURIComponent(href)} id={href}>
		{title}
	</h2>
</div>

<slot name="description">
	<p>
		{description}
	</p>
</slot>

<slot />
