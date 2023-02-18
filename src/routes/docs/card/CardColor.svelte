<script>
	import { Card, CardBody, El, CardTitle } from 'yesvelte'
</script>

<El row>
	<El col="12" colMd="6" colXl="4">
		<Card status statusColor="danger" statusPosition="top" statusSize="lg">
			<CardBody>
				<CardTitle>Card with top status</CardTitle>
				<p class="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
					iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
				</p>
			</CardBody>
		</Card>
	</El>
	<El col="12" colMd="6" colXl="4">
		<Card status statusColor="green" statusPosition="start" statusSize="md">
			<CardBody>
				<CardTitle>Card with side status</CardTitle>
				<p class="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
					iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.
				</p>
			</CardBody>
		</Card>
	</El>
	<El col="12" colMd="6" colXl="4">
		<Card status statusColor="pink" statusPosition="bottom" statusSize="sm">
			<CardBody>
				<CardTitle>Card with bottom status</CardTitle>
				<p class="text-muted">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt,
					iste, itaque minima neque pariatur perferendis sed suscipit velit vitae.
				</p>
			</CardBody>
		</Card>
	</El>
</El>
