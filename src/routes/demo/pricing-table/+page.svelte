<script lang="ts">
	import GithubLink from '$components/GithubLink.svelte'
	import { El, Card, Table, TableRow, TableBody, TableCell, Button, Icon } from 'yesvelte'
</script>

<GithubLink />

<Card>
	<Table mb="0">
		<TableBody>
			<TableRow>
				<TableCell w="50">
					<El tag="h2">Pricing plans for teams of all sizes</El>
					<El>
						Choose an affordable plan that comes with the best features to engage your audience,
						create customer loyalty and increase sales.
					</El>
				</TableCell>
				<TableCell borderStart textAlign="center">
					<El tag="h5">STARTER</El>
					<El fontWeight="bold" my="3" class="display-6">$0</El>
					<Button col="12">Choose plan</Button>
				</TableCell>
				<TableCell borderStart textAlign="center">
					<El tag="h5">PROFESSIONAL</El>
					<El fontWeight="bold" my="3" class="display-6">$9</El>
					<Button col="12" color="success">Choose plan</Button>
				</TableCell>
				<TableCell borderStart textAlign="center">
					<El tag="h5">BUSINESS</El>
					<El fontWeight="bold" my="3" class="display-6">$16</El>
					<Button col="12">Choose plan</Button>
				</TableCell>
			</TableRow>
			<TableRow bgColor="light">
				<TableCell colspan="4" class="subheader">FEATURES</TableCell>
			</TableRow>
			<TableRow>
				<TableCell w="50">Some info about feature</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell w="50">Online payment gateway</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="x" color="danger" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell w="50">Unlimited products can be sold</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="x" color="danger" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="x" color="danger" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
			</TableRow>
			<TableRow bgColor="light">
				<TableCell colspan="4" class="subheader">REPORTING</TableCell>
			</TableRow>
			<TableRow>
				<TableCell w="50">Free hosting and domain name</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell w="50">Admin dashboard to control items</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
			</TableRow>
			<TableRow bgColor="light">
				<TableCell colspan="4" class="subheader">SUPPORT</TableCell>
			</TableRow>
			<TableRow>
				<TableCell w="50">Email marketing and service</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="x" color="danger" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="x" color="danger" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell w="50">24/7 customer support online</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="x" color="danger" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
				<TableCell borderStart textAlign="center">
					<Icon name="check" color="success" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell />
				<TableCell borderStart>
					<Button col="12">Choose plan</Button>
				</TableCell>
				<TableCell borderStart>
					<Button col="12" color="success">Choose plan</Button>
				</TableCell>
				<TableCell borderStart>
					<Button col="12">Choose plan</Button>
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</Card>
