<script lang="ts">
	import { El, Card, CardBody, Button, Icon, Ribbon } from 'yesvelte'
</script>

<El row>
	<El colLg="3" colSm="6">
		<Card mb="3">
			<CardBody textAlign="center" p="4">
				<El textMuted textTransform="uppercase">Free</El>
				<El fontWeight="bold" my="3" class="display-5">$0</El>
				<El mb="1">
					<Icon name="" /><El tag="span" fontWeight="bold">3</El> Users
				</El>
				<El mb="1"><Icon name="check" color="success" mx="2" />Sharing Tools</El>
				<El mb="1"><Icon name="x" color="danger" mx="2" />Design Tools</El>
				<El mb="1"><Icon name="x" color="danger" mx="2" />Private Messages</El>
				<El mb="1"><Icon name="x" color="danger" mx="2" />Twitter API</El>
				<Button col="12" mt="4" mb="2">Choose plan</Button>
			</CardBody>
		</Card>
	</El>
	<El colLg="3" colSm="6">
		<Card mb="3">
			<CardBody textAlign="center" p="4">
				<El textMuted textTransform="uppercase">PREMIUM</El>
				<El fontWeight="bold" my="3" class="display-5">$49</El>
				<El mb="1">
					<Icon name="" /><El tag="span" fontWeight="bold">10</El> Users
				</El>
				<El mb="1"><Icon name="check" color="success" mx="2" />Sharing Tools</El>
				<El mb="1"><Icon name="check" color="success" mx="2" />Design Tools</El>
				<El mb="1"><Icon name="x" color="danger" mx="2" />Private Messages</El>
				<El mb="1"><Icon name="x" color="danger" mx="2" />Twitter API</El>
				<Button col="12" mt="4" mb="2" color="success">Choose plan</Button>
				<Ribbon bgColor="success" elementPosition="top">
					<Icon name="star-filled" color="light" />
				</Ribbon>
			</CardBody>
		</Card>
	</El>
	<El colLg="3" colSm="6">
		<Card mb="3">
			<CardBody textAlign="center" p="4">
				<El textMuted textTransform="uppercase">ENTERPRISE</El>
				<El fontWeight="bold" my="3" class="display-5">$99</El>
				<El mb="1">
					<Icon name="" /><El tag="span" fontWeight="bold">100</El> Users
				</El>
				<El mb="1"><Icon name="check" color="success" mx="2" />Sharing Tools</El>
				<El mb="1"><Icon name="check" color="success" mx="2" />Design Tools</El>
				<El mb="1"><Icon name="check" color="success" mx="2" />Private Messages</El>
				<El mb="1"><Icon name="x" color="danger" mx="2" />Twitter API</El>
				<Button col="12" mt="4" mb="2">Choose plan</Button>
			</CardBody>
		</Card>
	</El>
	<El colLg="3" colSm="6">
		<Card mb="3">
			<CardBody textAlign="center" p="4">
				<El textMuted textTransform="uppercase">UNLIMITED</El>
				<El fontWeight="bold" my="3" class="display-5">$139</El>
				<El mb="1">
					<Icon name="" /><El tag="span" fontWeight="bold">Unlimited</El> Users
				</El>
				<El mb="1"><Icon name="check" color="success" mx="2" />Sharing Tools</El>
				<El mb="1"><Icon name="check" color="success" mx="2" />Design Tools</El>
				<El mb="1"><Icon name="check" color="success" mx="2" />Private Messages</El>
				<El mb="1"><Icon name="check" color="success" mx="2" />Twitter API</El>
				<Button col="12" mt="4" mb="2">Choose plan</Button>
			</CardBody>
		</Card>
	</El>
	<El col="12" mt="3">
		<Card mb="3">
			<CardBody row p="4" alignItems="center">
				<El col>
					<El tag="h3">Enterprise-ready. Reach out for a custom quote.</El>
					Tabler is designed to work great for large enterprises. Take a look at our feature comparison.
				</El>
				<El col="auto">
					<Button>Book a demo</Button>
				</El>
			</CardBody>
		</Card>
	</El>
</El>
