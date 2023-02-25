<script>
	import { Page, Doc, Preview } from '$components'
	import StatusDefault from './StatusDefault.svelte'
	import StatusDots from './StatusDots.svelte'
	import StatusDotsAnimated from './StatusDotsAnimated.svelte'
	import StatusLite from './StatusLite.svelte'
	import StatusLiteAnimated from './StatusLiteAnimated.svelte'
</script>

<Page
	title="Status"
	description="Status dots are particularly useful if you want to make an interface element more noticeable
regardless of limited space.">
	<Doc title="Color">
		<Preview src="./StatusDefault.svelte">
			<div class="custom-class">
				<StatusDefault />
			</div>
		</Preview>
	</Doc>

	<Doc title="Dot">
		<Preview src="./StatusDots.svelte">
			<div class="custom-class">
				<StatusDots />
			</div>
		</Preview>
	</Doc>

	<Doc title="Lite">
		<Preview src="./StatusLite.svelte">
			<div class="custom-class">
				<StatusLite />
			</div>
		</Preview>
	</Doc>

	<Doc title="Animated">
		<Preview src="./StatusDotsAnimated.svelte">
			<div class="custom-class">
				<StatusDotsAnimated />
			</div>
		</Preview>
	</Doc>

	<Doc title="Lite animated dot">
		<Preview src="./StatusLiteAnimated.svelte">
			<div class="custom-class">
				<StatusLiteAnimated />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.u-status) {
		margin-bottom: 0.5rem;
	}
</style>
