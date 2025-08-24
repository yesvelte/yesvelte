<script>
	import {
		TabList,
		TabItem,
		TabContent,
		TabPanel,
		Tabs,
		Card,
		Button,
		CardHeader,
		CardBody,
	} from 'yesvelte'
	import { El } from 'yesvelte/el/index.js'

	let activeIndex = $state()
</script>

<Card>
	<Tabs bind:activeIndex>
		<CardHeader>
			<TabList>
				<TabItem active>Home</TabItem>
				<TabItem>Profile</TabItem>
			</TabList>
		</CardHeader>
		<CardBody>
			<TabContent>
				<TabPanel>
					<h4>Home tab</h4>
					Here is the content of the first tab.
				</TabPanel>
				<TabPanel>
					<h4>Profile tab</h4>
					Here is the content of the second tab.
				</TabPanel>
			</TabContent>
		</CardBody>
	</Tabs>
</Card>

<El pt="3"></El>
Active Tab index: {activeIndex}
<Button onclick={() => (activeIndex = 1)}>Open Profile Tab</Button>
