<script>
	import { Card, CardBody, El, Stamp } from 'yesvelte'
</script>

<El row>
	<El col="12" colMd="6">
		<Card title="Card title" bgColor="primary" borderless>
			<Stamp bgColor="light" icon="star" size="md" iconPosition="top-end" textColor="primary" />
			<CardBody>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</El>
	<El col="12" colMd="6">
		<Card title="Card title" bgColor="secondary" borderless>
			<Stamp bgColor="light" icon="star" size="md" iconPosition="top-end" textColor="primary" />
			<CardBody>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
				iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
			</CardBody>
		</Card>
	</El>
</El>
