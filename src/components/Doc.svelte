<script lang="ts">
	export let title = ''
	export let description = ''
	$: href = title.replace(/\s/g, '_').replace(/\//g, '_')
</script>

<div class="mt-3 mb-2">
	<a class="h2 link-primary" href="#{href}">#</a>
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
