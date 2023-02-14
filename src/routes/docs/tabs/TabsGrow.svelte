<script>
	import { TabList, TabItem, TabContent, TabPanel, Tabs, Card, CardHeader, CardBody } from '@ubeac/svelte'
</script>

<Card>
	<Tabs>
		<CardHeader>
			<TabList grow>
				<TabItem active>Home</TabItem>
				<TabItem>Profile</TabItem>
				<TabItem>Settings</TabItem>
				<TabItem disabled>Disbaled</TabItem>
			</TabList>
		</CardHeader>
		<CardBody>
			<TabContent>
				<TabPanel>Here is the content of the first tab.</TabPanel>
				<TabPanel>Here is the content of the second tab.</TabPanel>
				<TabPanel>Here is the content of the third tab.</TabPanel>
				<TabPanel>Here is the content of the fourth tab.</TabPanel>
			</TabContent>
		</CardBody>
	</Tabs>
</Card>
