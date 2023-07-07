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
	import { classname } from 'yesvelte/internal'

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
				{#if false && markup}
					<TabItem>Markup</TabItem>
				{/if}
				{#if false && script}
					<TabItem>Script</TabItem>
				{/if}
				{#if false && style}
					<TabItem>Style</TabItem>
				{/if}
				{#if src}
					<TabItem>Source</TabItem>
				{/if}
			</TabList>
		</CardHeader>

		<TabContent>
			<TabPanel>
				<CardBody class={classname('preview-body')}>
					<slot />
				</CardBody>
			</TabPanel>
			{#if false && markup}
				<TabPanel>
					<Prism language="html" source={markup} />
				</TabPanel>
			{/if}
			{#if false && script}
				<TabPanel>
					<Prism language="javascript" source={script} />
				</TabPanel>
			{/if}
			{#if false && style}
				<TabPanel>
					<Prism language="css" source={style} />
				</TabPanel>
			{/if}
			{#if src}
				<TabPanel>
					<Prism language="html" source={[script, markup, style].filter(Boolean).join('\n\n')} />
				</TabPanel>
			{/if}
		</TabContent>
	</Tabs>
</Card>
