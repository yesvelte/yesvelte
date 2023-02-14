<script>
	import { TabList, TabItem, TabContent, TabPanel, Tabs, Card, CardHeader, CardBody } from '@ubeac/svelte'
</script>

<Card>
	<Tabs>
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
