<script>
	import { Page, Doc, Preview } from '$components'
	import TabsDefault from './TabsDefault.svelte'
	import TabsGrow from './TabsGrow.svelte'
	import TabsVertical from './TabsVertical.svelte'
	import TabsIcons from './TabsIcons.svelte'
	import TabsEnd from './TabsEnd.svelte'
	import TabsWithSelectedItem from './TabsWithSelectedItem.svelte'
	import TabsOnlyIcons from './TabsOnlyIcons.svelte'
</script>

<Page
	title="Tabs"
	description="Tabs are used to split content between multiple sections. They are useful when you have too much content to fit on a single page.">
	<Doc title="Basic usage">
		{#snippet description()}
			To use tabs, you need to wrap the <code>&lt;Tabs&gt;</code> component around the
			<code>&lt;TabList&gt;</code>
			and <code>&lt;TabContent&gt;</code> components.
			<code>&lt;TabList&gt;</code> is used to display the tabs and <code>&lt;TabContent&gt;</code>
			is used to display the content of the selected tab. To create a tab, you need to use the
			<code>&lt;TabItem&gt;</code>
			component inside the <code>&lt;TabList&gt;</code> component. To display the content of the
			tab, you need to use the <code>&lt;TabPanel&gt;</code> component inside the
			<code>&lt;TabContent&gt;</code> component.
		{/snippet}
		<Preview src="./TabsDefault.svelte">
			<TabsDefault />
		</Preview>
	</Doc>

	<Doc title="Wit Selected Tab">
		{#snippet description()}
			To select another tab instead of first tab initially, you can use <code>active</code> prop.
		{/snippet}
		<Preview src="./TabsWithSelectedItem.svelte">
			<TabsWithSelectedItem />
		</Preview>
	</Doc>

	<Doc title="Grow">
		{#snippet description()}
			To make the tabs grow to fill all the available space, you can use the <code>grow</code> prop.
		{/snippet}
		<Preview src="./TabsGrow.svelte">
			<TabsGrow />
		</Preview>
	</Doc>

	<Doc title="Vertical">
		{#snippet description()}
			To make the tabs vertical, you can use the <code>vertical</code> prop.
		{/snippet}
		<Preview src="./TabsVertical.svelte">
			<TabsVertical />
		</Preview>
	</Doc>

	<Doc title="Icons">
		{#snippet description()}
			To add icons to the tabs, you can use the <code>&lt;Icon&gt;</code> component inside the
			<code>&lt;TabItem&gt;</code> component.
		{/snippet}
		<Preview src="./TabsIcons.svelte">
			<TabsIcons />
		</Preview>
	</Doc>

	<Doc title="Only icons">
		<Preview src="./TabsOnlyIcons.svelte">
			<TabsOnlyIcons />
		</Preview>
	</Doc>

	<Doc title="Tab at the end">
		<Preview src="./TabsEnd.svelte">
			<TabsEnd />
		</Preview>
	</Doc>
</Page>
