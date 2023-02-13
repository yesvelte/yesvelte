<script lang="ts">
	import { Page, Doc } from '$components'
	import Preview from '$components/Preview.svelte'
	import BackgroundColor from './BackgroundColor.svelte'
</script>

<Page
	title="Backgrounds"
	description="You can set background color, gradient, and opacity for any component."
>
	<Doc
		title="Background Colors"
		description="You can set background color, gradient, and opacity for any component."
	>
		<Preview src="BackgroundColor.svelte">
			<BackgroundColor />
		</Preview>
	</Doc>
</Page>
