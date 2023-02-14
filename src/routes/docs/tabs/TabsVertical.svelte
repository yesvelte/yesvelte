<script>
	import { TabList, TabItem, TabContent, TabPanel, Tabs, Card, CardHeader, Icon, CardBody } from '@ubeac/svelte'
</script>

<Card>
	<Tabs vertical>
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
				<TabItem>
					<Icon name="settings" />
					Settings
				</TabItem>
				<TabItem disabled>
					<Icon name="star" />
					Features
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
