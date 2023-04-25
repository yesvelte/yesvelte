<script lang="ts">
	import Avatar from '$lib/avatar/Avatar.svelte'
	import CardBody from '$lib/card/CardBody.svelte'
	import CardTitle from '$lib/card/CardTitle.svelte'
	import Dot from '$lib/dot/Dot.svelte'
	import {
		El,
		Card,
		Progress,
		ProgressBar,
		Icon,
		Dropdown,
		DropdownMenu,
		DropdownItem,
		Button,
		CardMedia,
		Label,
	} from 'yesvelte'
</script>

<El row>
	<El colMd="6" mb="3">
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
					<El col="auto" alignSelf="center">
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
	<El colMd="6" mb="3">
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
					<El col="auto" alignSelf="center">
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
	<El colSm="6" colLg="3" mb="3">
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
	<El colSm="6" colLg="3" mb="3">
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
	<El colSm="6" colLg="3" mb="3">
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
	<El colSm="6" colLg="3" mb="3">
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
	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardBody textAlign="center">
				<Avatar size="xl" mb="3">
					<img src="/images/avatars/010m.jpg" alt="" />
				</Avatar>
				<CardTitle mb="1">Thatcher Keel</CardTitle>
				<El textMuted>VP Sales</El>
			</CardBody>
			<Button col="12" p="3">View full profile</Button>
		</Card>
	</El>
	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardBody textAlign="center">
				<Avatar size="xl" mb="3">
					<img src="/images/avatars/005f.jpg" alt="" />
				</Avatar>
				<CardTitle mb="1">Dyann Escala</CardTitle>
				<El textMuted>Mechanical Systems Engineer</El>
			</CardBody>
			<Button col="12" p="3">View full profile</Button>
		</Card>
	</El>
	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardBody textAlign="center">
				<Avatar size="xl" mb="3">
					<img src="/images/avatars/006f.jpg" alt="" />
				</Avatar>
				<CardTitle mb="1">Avivah Mugleston</CardTitle>
				<El textMuted>Actuary</El>
			</CardBody>
			<Button col="12" p="3">View full profile</Button>
		</Card>
	</El>
	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardBody textAlign="center">
				<Avatar size="xl" mb="3">AA</Avatar>
				<CardTitle mb="1">Arlie Armstead</CardTitle>
				<El textMuted>VP Quality Control</El>
			</CardBody>
			<Button col="12" p="3">View full profile</Button>
		</Card>
	</El>

	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardMedia elementPosition="top" textAlign="center">
				<img src="/images/avatars/blond-using-her-laptop-at-her-bedroom.jpg" alt="" />
			</CardMedia>
			<CardBody textAlign="center">
				<CardTitle mb="1">Marsha Labat</CardTitle>
				<El textMuted>Research Associate</El>
			</CardBody>
		</Card>
	</El>
	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardMedia elementPosition="top" textAlign="center">
				<img src="/images/avatars/tropical-palm-leaves-floral-pattern-background.jpg" alt="" />
			</CardMedia>
			<CardBody textAlign="center">
				<CardTitle mb="1">Elston Muffett</CardTitle>
				<El textMuted>Account Coordinator</El>
			</CardBody>
		</Card>
	</El>
	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardMedia elementPosition="top" textAlign="center">
				<img src="/images/avatars/woman-read-book-and-drink-coffee.jpg" alt="" />
			</CardMedia>
			<CardBody textAlign="center">
				<CardTitle mb="1">Leigha Gorce</CardTitle>
				<El textMuted>Geologist II</El>
			</CardBody>
		</Card>
	</El>
	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardMedia elementPosition="top" textAlign="center">
				<img src="/images/avatars/book-on-the-grass.jpg" alt="" />
			</CardMedia>
			<CardBody textAlign="center">
				<CardTitle mb="1">Tallie Bettis</CardTitle>
				<El textMuted>Director of Sales</El>
			</CardBody>
		</Card>
	</El>

	<El colMd="6" mb="3">
		<Card>
			<CardBody row alignItems="center">
				<El col="auto">
					<Avatar size="lg">
						<img src="/images/avatars/3.jpg" alt="" />
					</Avatar>
				</El>
				<El col>
					<El mb="1" tag="h3">Paweł Kuna</El>
					<El mb="1" textMuted>Working in Tabler</El>
					<El textMuted><Dot color="success" /> Online</El>
				</El>
				<El col="auto">
					<Button>Subscribe</Button>
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
			</CardBody>
		</Card>
	</El>
	<El colMd="6" mb="3">
		<Card>
			<CardBody row alignItems="center">
				<El col="auto">
					<Avatar size="lg">
						<img src="/images/avatars/6.jpg" alt="" />
					</Avatar>
				</El>
				<El col>
					<El mb="1" tag="h3">Mallory Hulme</El>
					<El mb="1" textMuted>Working in Kare</El>
					<El textMuted><Dot color="success" /> Online</El>
				</El>
				<El col="auto">
					<Button>Subscribe</Button>
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
			</CardBody>
		</Card>
	</El>

	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardBody row alignItems="center">
				<El col="auto">
					<Avatar bgColor="primary" textColor="light">
						<Icon name="currency-dollar" />
					</Avatar>
				</El>
				<El col>
					<El mb="1" textMuted>132 Sales</El>
					<El textMuted>12 waiting payments</El>
				</El>
			</CardBody>
		</Card>
	</El>
	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardBody row alignItems="center">
				<El col="auto">
					<Avatar bgColor="success" textColor="light">
						<Icon name="shopping-cart" />
					</Avatar>
				</El>
				<El col>
					<El mb="1" textMuted>78 Orders</El>
					<El textMuted>32 shipped</El>
				</El>
			</CardBody>
		</Card>
	</El>
	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardBody row alignItems="center">
				<El col="auto">
					<Avatar bgColor="danger" textColor="light">
						<Icon name="user" />
					</Avatar>
				</El>
				<El col>
					<El mb="1" textMuted>1352 Members</El>
					<El textMuted>163 registered today</El>
				</El>
			</CardBody>
		</Card>
	</El>
	<El colSm="6" colLg="3" mb="3">
		<Card>
			<CardBody row alignItems="center">
				<El col="auto">
					<Avatar bgColor="yellow" textColor="light">
						<Icon name="message" />
					</Avatar>
				</El>
				<El col>
					<El mb="1" textMuted>132 Comments</El>
					<El textMuted>16 waitings</El>
				</El>
			</CardBody>
		</Card>
	</El>
</El>
