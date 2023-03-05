<script lang="ts">
	import {
		TabList,
		TabItem,
		TabContent,
		TabPanel,
		Tabs,
		Card,
		CardHeader,
		CardBody,
	} from 'yesvelte'
	import Prism from './Prism.svelte'

	export let markup: string | undefined = undefined
	export let script: string | undefined = undefined
	export let style: string | undefined = undefined
	export let src: string | undefined = undefined
</script>

<Card>
	<Tabs>
		<CardHeader>
			<TabList>
				<TabItem active>Preview</TabItem>
				{#if markup}
					<TabItem>Markup</TabItem>
				{/if}
				{#if script}
					<TabItem>Script</TabItem>
				{/if}
				{#if style}
					<TabItem>Style</TabItem>
				{/if}
				{#if src && false}
					<TabItem>Source</TabItem>
				{/if}
			</TabList>
		</CardHeader>

		<TabContent>
			<TabPanel>
				<CardBody>
					<slot />
				</CardBody>
			</TabPanel>
			{#if markup}
				<TabPanel>
					<Prism language="html" source={markup} />
				</TabPanel>
			{/if}
			{#if script}
				<TabPanel>
					<Prism language="javascript" source={script} />
				</TabPanel>
			{/if}
			{#if style}
				<TabPanel>
					<Prism language="css" source={style} />
				</TabPanel>
			{/if}
			{#if src && false}
				<TabPanel>
					<Prism language="html" source={src} />
				</TabPanel>
			{/if}
		</TabContent>
	</Tabs>
</Card>
