<script>
	import { El, Card, CardBody, CardTitle, Stamp } from 'yesvelte'
</script>

<El row>
	<El col="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Stamp size: sm</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Stamp size="sm" iconPosition="top-end" bgColor="yellow" icon="bell" />
		</Card>
	</El>
	<El col="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Stamp size: md</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Stamp size="md" iconPosition="top-end" bgColor="yellow" icon="bell" />
		</Card>
	</El>
	<El col="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Stamp size: lg</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Stamp size="lg" iconPosition="top-end" bgColor="yellow" icon="bell" />
		</Card>
	</El>
</El>
