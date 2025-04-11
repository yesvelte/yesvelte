<script>
	import { Page, Doc, Preview } from '$components'
	import PopoverComponents from './PopoverComponents.svelte'
	import PopoverDefault from './PopoverDefault.svelte'
	import PopoverDirections from './PopoverDirections.svelte'
	import PopoverHover from './PopoverHover.svelte'
</script>

<Page title="Popover">
	{#snippet description()}
		Popovers are used to provide additional information on elements where a simple tooltip is not
		sufficient.
	{/snippet}

	<Doc title="Default Markup">
		{#snippet description()}
			To create a default popover you should use <code>Popover</code> component after your target element
			like this:
		{/snippet}

		<Preview src="./PopoverDefault.svelte">
			<PopoverDefault />
		</Preview>
	</Doc>

	<Doc title="Directions">
		{#snippet description()}Popover supports these directions:{/snippet}
		<Preview src="./PopoverDirections.svelte">
			<PopoverDirections />
		</Preview>
	</Doc>

	<Doc title="Component inside popover">
		{#snippet description()}You can place any components inside popovers:{/snippet}

		<Preview src="./PopoverComponents.svelte">
			<PopoverComponents />
		</Preview>
	</Doc>

	<Doc title="Popover on hover">
		{#snippet description()}
			Popover can be triggered manual, with a click and on focus and on hover. This one reacts on
			hover.
		{/snippet}
		<Preview src="./PopoverHover.svelte">
			<PopoverHover />
		</Preview>
	</Doc>
</Page>
