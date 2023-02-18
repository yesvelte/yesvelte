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
		<CardBody>
			<TabContent>
				<TabPanel>
					<slot />
				</TabPanel>
				{#if markup}
					<TabPanel>
						<figure class="highlight">
							<pre><code>{markup}</code></pre>
						</figure>
					</TabPanel>
				{/if}
				{#if script}
					<TabPanel>
						<figure class="highlight">
							<pre><code>{script}</code></pre>
						</figure>
					</TabPanel>
				{/if}
				{#if style}
					<TabPanel>
						<figure class="highlight">
							<pre><code>{style}</code></pre>
						</figure>
					</TabPanel>
				{/if}
				{#if src && false}
					<TabPanel>
						<figure class="highlight">
							<pre><code>{src}</code></pre>
						</figure>
					</TabPanel>
				{/if}
			</TabContent>
		</CardBody>
	</Tabs>
</Card>
