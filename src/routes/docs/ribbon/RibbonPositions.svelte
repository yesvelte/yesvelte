<script>
	import { Card, CardBody, CardTitle, Ribbon, El, Icon } from 'yesvelte'
</script>

<El row>
	<El colSm="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Ribbon position: Start</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Ribbon bgColor="warning" elementPosition="start"><Icon name="star" color="light" /></Ribbon>
		</Card>
	</El>
	<El colSm="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Ribbon position: Top</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Ribbon bgColor="warning" elementPosition="top"><Icon name="star" color="light" /></Ribbon>
		</Card>
	</El>
	<El colSm="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Ribbon position: End</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Ribbon bgColor="warning" elementPosition="end"><Icon name="star" color="light" /></Ribbon>
		</Card>
	</El>
	<El colSm="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Ribbon position: Bottom</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Ribbon bgColor="warning" elementPosition="bottom"><Icon name="star" color="light" /></Ribbon>
		</Card>
	</El>
</El>
