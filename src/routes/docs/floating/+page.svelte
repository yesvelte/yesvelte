<script>
	import { Page, Doc, Preview } from '$components'
	import FloatingButton from './FloatingButton.svelte'
	import FloatingDefault from './FloatingDefault.svelte'
	import FloatingOffset from './FloatingOffset.svelte'
	import FloatingPlacement from './FloatingPlacement.svelte'
</script>

<Page title="Floating" description="A floating component appears in front of all screen content.">
	<Doc title="Default">
		<Preview src="./FloatingDefault.svelte">
			<FloatingDefault />
		</Preview>
	</Doc>
	<Doc title="Placement">
		<Preview src="./FloatingPlacement.svelte">
			<FloatingPlacement />
		</Preview>
	</Doc>
	<Doc title="Offset">
		<Preview src="./FloatingOffset.svelte">
			<FloatingOffset />
		</Preview>
	</Doc>
	<Doc title="Button">
		<Preview src="./FloatingButton.svelte">
			<FloatingButton />
		</Preview>
	</Doc>
</Page>
