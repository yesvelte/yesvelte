<script>
	import { Page, Doc, Preview } from '$components'
	import TabsDefault from './TabsDefault.svelte'
	import TabsGrow from './TabsGrow.svelte'
	import TabsVertical from './TabsVertical.svelte'
	import TabsIcons from './TabsIcons.svelte'
	import TabsEnd from './TabsEnd.svelte'
	import TabsOnlyIcons from './TabsOnlyIcons.svelte'
</script>

<Page
	title="Tabs"
	description="Tabs are used to split content between multiple sections. They are useful when you have too much content to fit on a single page.">
	<Doc title="Basic usage">
		<p slot="description">
			To use tabs, you need to wrap the <code>&lt;Tabs&gt;</code> component around the
			<code>&lt;TabList&gt;</code>
			and <code>&lt;TabContent&gt;</code> components.
			<code>&lt;TabList&gt;</code> is used to display the tabs and <code>&lt;TabContent&gt;</code>
			is used to display the content of the selected tab. To create a tab, you need to use the
			<code>&lt;TabItem&gt;</code>
			component inside the <code>&lt;TabList&gt;</code> component. To display the content of the
			tab, you need to use the <code>&lt;TabPanel&gt;</code> component inside the
			<code>&lt;TabContent&gt;</code> component.
		</p>
		<Preview src="./TabsDefault.svelte">
			<TabsDefault />
		</Preview>
	</Doc>
	<Doc title="Grow">
		<p slot="description">
			To make the tabs grow to fill all the available space, you can use the <code>grow</code> prop.
		</p>
		<Preview src="./TabsGrow.svelte">
			<TabsGrow />
		</Preview>
	</Doc>
	<Doc title="Icons">
		<p slot="description">
			To add icons to the tabs, you can use the <code>&lt;Icon&gt;</code> component inside the
			<code>&lt;TabItem&gt;</code> component.
		</p>
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

	<Doc title="Basic usage">
		<p slot="description">
			To use tabs, you need to wrap the <code>&lt;Tabs&gt;</code> component around the
			<code>&lt;TabList&gt;</code> and <code>&lt;TabContent&gt;</code> components.
		</p>
		<Preview src="./TabsDefault.svelte">
			<TabsDefault />
		</Preview>
	</Doc>

	<Doc title="Grow">
		<p slot="description">
			To make the tabs grow to fill all the available space, you can use the <code>grow</code> prop.
		</p>
		<Preview src="./TabsGrow.svelte">
			<TabsGrow />
		</Preview>
	</Doc>

	<Doc title="Vertical">
		<p slot="description">
			To make the tabs vertical, you can use the <code>vertical</code> prop.
		</p>
		<Preview src="./TabsVertical.svelte">
			<TabsVertical />
		</Preview>
	</Doc>

	<Doc title="Icons">
		<p slot="description">
			To add icons to the tabs, you can use the <code>&lt;Icon&gt;</code> component inside the
			<code>&lt;TabItem&gt;</code> component.
		</p>
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
