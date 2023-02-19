<script>
	import { Card, CardBody, CardTitle, Ribbon, El, Icon } from 'yesvelte'
</script>

<El row>
	<El colSm="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Ribbon color: primary</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Ribbon bgColor="primary" elementPosition="start"><Icon name="star" color="light" /></Ribbon>
		</Card>
	</El>
	<El colSm="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Ribbon color: warning</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Ribbon bgColor="warning" elementPosition="top">New</Ribbon>
		</Card>
	</El>
	<El colSm="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Ribbon color: success</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Ribbon bgColor="success" elementPosition="end"><Icon name="bell" color="light" /></Ribbon>
		</Card>
	</El>
	<El colSm="12" colMd="6">
		<Card>
			<Ribbon bgColor="danger" elementPosition="bottom">Hot</Ribbon>
			<CardBody>
				<CardTitle>Ribbon color: danger</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
		</Card>
	</El>
</El>
