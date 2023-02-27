<script>
	import {
		TabList,
		Icon,
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
				<TabItem icon active>
					<Icon name="home" />
				</TabItem>
				<TabItem icon>
					<Icon name="user" />
				</TabItem>
				<TabItem icon ms="auto">
					<Icon name="settings" />
				</TabItem>
			</TabList>
		</CardHeader>
		<CardBody>
			<TabContent>
				<TabPanel>Here is the content of the first tab.</TabPanel>
				<TabPanel>Here is the content of the second tab.</TabPanel>
				<TabPanel>Here is the content of the third tab.</TabPanel>
			</TabContent>
		</CardBody>
	</Tabs>
</Card>
