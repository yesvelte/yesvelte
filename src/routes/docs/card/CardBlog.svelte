<script>
	import { Icon, Avatar, Card, CardBody, CardTitle, El, CardMedia } from 'yesvelte'
</script>

<El colLg="8" colMd="10" offsetLg="2" offsetMd="1">
	<Card>
		<CardMedia elementPosition="top">
			<img
				src="https://preview.tabler.io/static/photos/finances-us-dollars-and-bitcoins-currency-money-3.jpg"
				alt="" />
		</CardMedia>
		<CardBody>
			<CardTitle>How do you know she is a witch?</CardTitle>
			<p>
				Are you suggesting that coconuts migrate? No, no, no! Yes, yes. A bit. But she's got a wart.
				You ...
			</p>
			<El row align="center" justify="start">
				<El col="auto">
					<Avatar>
						<img src="https://preview.tabler.io/static/avatars/000f.jpg" alt="" />
					</Avatar>
				</El>
				<El col textAlign="start">
					<div class="text-body">Maryjo Lebarree</div>
					<span class="text-muted">3 days ago</span>
				</El>
				<El col="auto" mt="2">
					<Icon name="heart" />
				</El>
			</El>
		</CardBody>
	</Card>
</El>
