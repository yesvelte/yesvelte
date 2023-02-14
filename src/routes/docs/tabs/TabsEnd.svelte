<script>
	import { TabList, TabItem, TabContent, TabPanel, Tabs, Card, CardHeader, CardBody, Icon } from '@ubeac/svelte'
</script>

<Card>
	<Tabs>
		<CardHeader>
			<TabList>
				<TabItem active>
					<Icon name="home" />
					Home
				</TabItem>
				<TabItem>
					<Icon name="user" />
					Profile
				</TabItem>
				<TabItem ms="auto">
					<Icon name="settings" />
				</TabItem>
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
