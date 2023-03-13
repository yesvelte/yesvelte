<script>
	import { Page, Doc, Preview } from '$components'
	import PopoverComponents from './PopoverComponents.svelte'
	import PopoverDefault from './PopoverDefault.svelte'
	import PopoverDirections from './PopoverDirections.svelte'
	import PopoverHover from './PopoverHover.svelte'
</script>

<Page title="Popover">
	<p slot="description">
		Popovers are used to provide additional information on elements where a simple tooltip is not
		sufficient.
	</p>

	<Doc title="Default Markup">
		<p slot="description">
			To create a default popover you should use <code>Popover</code> component after your target element
			like this:
		</p>

		<Preview src="./PopoverDefault.svelte">
			<PopoverDefault />
		</Preview>
	</Doc>

	<Doc title="Directions">
		<p slot="description">Popover supports these directions:</p>
		<Preview src="./PopoverDirections.svelte">
			<PopoverDirections />
		</Preview>
	</Doc>

	<Doc title="Component inside popover">
		<p slot="description">You can place any components inside popovers:</p>

		<Preview src="./PopoverComponents.svelte">
			<PopoverComponents />
		</Preview>
	</Doc>

	<Doc title="Popover on hover">
		<p slot="description">
			Popover can be triggered manual, with a click and on focus and on hover. This one reacts on
			hover.
		</p>
		<Preview src="./PopoverHover.svelte">
			<PopoverHover />
		</Preview>
	</Doc>
</Page>
