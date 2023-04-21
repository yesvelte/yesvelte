<script lang="ts">
	import Avatar from '$lib/avatar/Avatar.svelte'
	import CardBody from '$lib/card/CardBody.svelte'
	import {
		El,
		Card,
		Progress,
		ProgressBar,
		Icon,
		Dropdown,
		DropdownMenu,
		DropdownItem,
	} from 'yesvelte'
</script>

<El row>
	<El colMd="6" border>
		<Card>
			<CardBody alignItems="center">
				<El row>
					<El col="3"><El tag="img" src="/images/food-deliver.png" rounded /></El>
					<El col>
						<El tag="h3">Food Deliver UI dashboards</El>
						<El textMuted>Updated 2 hours ago</El>
						<El row alignItems="center" mt="2">
							<El col="auto">25%</El>
							<El col>
								<Progress size="sm">
									<ProgressBar value="25" />
								</Progress>
							</El>
						</El>
					</El>
					<El col="auto">
						<Dropdown placement="bottom-end" arrow={false}>
							<Icon name="dots-vertical" slot="target" />
							<DropdownMenu>
								<DropdownItem href="#">Import</DropdownItem>
								<DropdownItem href="#">Export</DropdownItem>
								<DropdownItem href="#">Download</DropdownItem>
								<DropdownItem href="#" textColor="danger">Delete</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</El>
				</El>
			</CardBody>
		</Card>
	</El>
	<El colMd="6" border>
		<Card>
			<CardBody alignItems="center">
				<El row>
					<El col="3"><El tag="img" src="/images/project-dashboard.png" rounded /></El>
					<El col>
						<El tag="h3">Projects Dashboards</El>
						<El textMuted>Updated 2 hours ago</El>
						<El row alignItems="center" mt="2">
							<El col="auto">76%</El>
							<El col>
								<Progress size="sm">
									<ProgressBar value="76" />
								</Progress>
							</El>
						</El>
					</El>
					<El col="auto">
						<Dropdown placement="bottom-end" arrow={false}>
							<Icon name="dots-vertical" slot="target" />
							<DropdownMenu>
								<DropdownItem href="#">Import</DropdownItem>
								<DropdownItem href="#">Export</DropdownItem>
								<DropdownItem href="#">Download</DropdownItem>
								<DropdownItem href="#" textColor="danger">Delete</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</El>
				</El>
			</CardBody>
		</Card>
	</El>
	<El colSm="6" colLg="3" border>
		<Card>
			<CardBody row alignItems="center">
				<El col="auto">
					<Avatar>
						<img src="/images/avatars/001f.jpg" alt="" />
					</Avatar>
				</El>
				<El col>
					<El>Maryjo Lebarree</El>
					<El textMuted>Civil Engineer</El>
				</El>
			</CardBody>
		</Card>
	</El>
	<El colSm="6" colLg="3" border>
		<Card>
			<CardBody row alignItems="center">
				<El col="auto">
					<Avatar>EP</Avatar>
				</El>
				<El col>
					<El>Egan Poetz</El>
					<El textMuted>Research Nurse</El>
				</El>
			</CardBody>
		</Card>
	</El>
	<El colSm="6" colLg="3" border>
		<Card>
			<CardBody row alignItems="center">
				<El col="auto">
					<Avatar><img src="/images/avatars/002f.jpg" alt="" /></Avatar>
				</El>
				<El col>
					<El>Kellie Skingley</El>
					<El textMuted>Teacher</El>
				</El>
			</CardBody>
		</Card>
	</El>
	<El colSm="6" colLg="3" border>
		<Card>
			<CardBody row alignItems="center">
				<El col="auto">
					<Avatar><img src="/images/avatars/003f.jpg" alt="" /></Avatar>
				</El>
				<El col>
					<El>Christabel Charlwood</El>
					<El textMuted>Tax Accountant</El>
				</El>
			</CardBody>
		</Card>
	</El>
</El>
<El row>
	<El col="6" border>aa</El>
	<El col="6" border>aa</El>
	<El col="3" border>aa</El>
	<El col="3" border>aa</El>
	<El col="3" border>aa</El>
	<El col="3" border>aa</El>
</El>
