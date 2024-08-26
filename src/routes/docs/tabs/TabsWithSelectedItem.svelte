<script>
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
</script>

<Card>
	<Tabs>
		<CardHeader>
			<TabList>
				<TabItem>Home</TabItem>
				<TabItem active>Profile</TabItem>
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
					second tab is active by default.
				</TabPanel>
			</TabContent>
		</CardBody>
	</Tabs>
</Card>
