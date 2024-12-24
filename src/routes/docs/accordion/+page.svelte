<script>
	import { Page, Doc, Preview } from '$components'
	import AccordionBind from './AccordionBind.svelte'
	import AccordionDefault from './AccordionDefault.svelte'
	import AccordionOpen from './AccordionOpen.svelte'
	import AccordionPersistent from './AccordionPersistent.svelte'
</script>

<Page
	title="Accordion"
	description="Accordions are used to organize content into collapsable sections. ">
	<Doc title="Default">
		{#snippet description()}
			Click the accordions below to expand/collapse the accordion content.</p>
		{/snippet}
		<Preview src="./AccordionDefault.svelte">
			<AccordionDefault />
		</Preview>
	</Doc>

	<Doc title="Open">
		{#snippet description()}
			Open by default with <code>open</code> attribute.</p>
		{/snippet}
		<Preview src="./AccordionOpen.svelte">
			<AccordionOpen />
		</Preview>
	</Doc>

	<Doc title="Persistent">
		{#snippet description()}
			Open ONLY one item at the same time.</p>
		{/snippet}
		<Preview src="./AccordionPersistent.svelte">
			<AccordionPersistent />
		</Preview>
	</Doc>
	<Doc title="Bind open to variables">
		{#snippet description()}
			You can bind open/close state of accordion to boolean variables.</p>
		{/snippet}
		<Preview src="./AccordionBind.svelte">
			<AccordionBind />
		</Preview>
	</Doc>
</Page>
