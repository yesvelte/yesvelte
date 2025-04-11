<script>
	import { Doc, Page, Preview } from '$components'
	import ForwardEventsDefault from './ForwardEventsDefault.svelte'
	import ForwardEventsModifiers from './ForwardEventsModifiers.svelte'
</script>

<Page title="Event Forwarding">
	{#snippet description()}
		All YeSvelte components support Event forwarding which you can use <code
			>on:(all DOM events)</code> on any component that you want.
	{/snippet}

	<Doc title="Default">
		<Preview src="./ForwardEventsDefault.svelte">
			<ForwardEventsDefault />
		</Preview>
	</Doc>

	<Doc title="With Modifiers">
		{#snippet description()}
			You can also use event modifiers with YeSvelte components, instead of | (pipe operator) you
			should use <code>!</code> operator
		{/snippet}
		<Preview src="./ForwardEventsModifiers.svelte">
			<ForwardEventsModifiers />
		</Preview>
	</Doc>
</Page>
