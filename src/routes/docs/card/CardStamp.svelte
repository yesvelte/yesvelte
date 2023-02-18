<script>
	import { Card, CardBody, CardTitle, Stamp, El } from 'yesvelte'
</script>

<El row>
	<El col="12" colMd="6">
		<Card>
			<Stamp bgColor="primary" icon="bell" size="md" iconPosition="top-start" />
			<CardBody>
				<CardTitle>Stamp color: primary</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
		</Card>
	</El>
	<El col="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Stamp color: warning</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Stamp bgColor="warning" icon="bell" size="sm" iconPosition="bottom-start" />
		</Card>
	</El>
	<El col="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Stamp color: secondary</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Stamp bgColor="secondary" icon="bell" size="md" iconPosition="top-end" />
		</Card>
	</El>
	<El col="12" colMd="6">
		<Card>
			<CardBody>
				<CardTitle>Stamp color: success</CardTitle>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book.
				</p>
			</CardBody>
			<Stamp bgColor="success" icon="bell" size="lg" iconPosition="bottom-end" />
		</Card>
	</El>
</El>
