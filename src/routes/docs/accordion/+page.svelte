<script>
	import { Page, Doc, Preview } from '$components'
	import AccordionDefault from './AccordionDefault.svelte'
	import AccordionOpen from './AccordionOpen.svelte'
	import AccordionPersistent from './AccordionPersistent.svelte'
</script>

<Page
	title="Accordion"
	description="Accordions are used to organize content into collapsable sections. ">
	<Doc title="Default">
		<p slot="description">Click the accordions below to expand/collapse the accordion content.</p>
		<Preview src="./AccordionDefault.svelte">
			<AccordionDefault />
		</Preview>
	</Doc>

	<Doc title="Open">
		<p slot="description">Open by default with <code>open</code> attribute.</p>
		<Preview src="./AccordionOpen.svelte">
			<AccordionOpen />
		</Preview>
	</Doc>

	<Doc title="Persistent">
		<p slot="description">Open ONLY one item at the same time.</p>
		<Preview src="./AccordionPersistent.svelte">
			<AccordionPersistent />
		</Preview>
	</Doc>
</Page>
