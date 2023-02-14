<script>
	import { TabList, Icon, TabItem, TabContent, TabPanel, Tabs, Card, CardHeader, CardBody } from '@ubeac/svelte'
</script>

<Card>
	<Tabs>
		<CardHeader>
			<TabList grow>
				<TabItem active>
					<Icon name="home" />
					Home
				</TabItem>
				<TabItem>
					<Icon name="user" />
					Profile
				</TabItem>
				<TabItem>
					<!-- <Icon name="settings" /> -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon me-2"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><polyline points="5 12 3 12 12 3 21 12 19 12" /><path
							d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
						/><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg
					>
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
