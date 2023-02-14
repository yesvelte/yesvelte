<script lang="ts">
	import { Page, Doc, Preview } from '$components'
	import BackgroundColor from './BackgroundColor.svelte'
	import BackgroundGradient from './BackgroundGradient.svelte'
	import BackgroundOpacity from './BackgroundOpacity.svelte'
</script>

<Page
	title="Backgrounds"
	description="You can set background color, gradient, and opacity for any component.">
	<Doc
		title="Background Colors"
		description="You can set background color, gradient, and opacity for any component.">
		<Preview src="BackgroundColor.svelte">
			<BackgroundColor />
		</Preview>
	</Doc>

	<Doc title="Gradient" />
	<Preview src="./BackgroundGradient.svelte">
		<div class="custom-class text-light">
			<BackgroundGradient />
		</div>
	</Preview>

	<Doc title="Opacity" />
	<Preview src="./BackgroundOpacity.svelte">
		<div class="custom-class text-light">
			<BackgroundOpacity />
		</div>
	</Preview>
</Page>

<style>
	.custom-class :global(*) {
		padding: 1rem;
		margin: 1rem;
	}
</style>
