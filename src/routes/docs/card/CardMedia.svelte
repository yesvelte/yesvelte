<script>
	import { Card, CardBody, CardMedia, CardTitle, El, Avatar, Icon } from 'yesvelte'
</script>

<El row>
	<El col="12" colMd="6" class="mb-6">
		<Card class="example-column example-column-1">
			<CardMedia elementPosition="top">
				<img
					alt=""
					src="https://preview.tabler.io/static/photos/home-office-desk-with-macbook-iphone-calendar-watch-and-organizer.jpg" />
			</CardMedia>
			<CardBody>
				<CardTitle>Title</CardTitle>
				<p>Body</p>
			</CardBody>
		</Card>
	</El>
	<El col="12" colMd="6" class="mb-6">
		<Card class="example-column example-column-1">
			<CardBody>
				<CardTitle>Title</CardTitle>
				<p>Body</p>
			</CardBody>
			<CardMedia elementPosition="bottom">
				<img
					alt=""
					src="https://preview.tabler.io/static/photos/home-office-desk-with-macbook-iphone-calendar-watch-and-organizer.jpg" />
			</CardMedia>
		</Card>
	</El>
</El>
<Card>
	<El row>
		<El colXl="3" colLg="4" colMd="6">
			<CardMedia elementPosition="start">
				<img
					src="https://preview.tabler.io/static/photos/pink-desk-in-the-home-office.jpg"
					alt="" />
			</CardMedia>
		</El>
		<El col>
			<CardBody>
				<CardTitle>Shut up!</CardTitle>
				<p>
					Burn her! How do you know she is a witch? You don't frighten us, English pig-dogs! Go and
					boil yo...
				</p>
				<El row class="mt-4" justifyContent="start">
					<El col="auto">
						<Avatar>
							<img src="https://preview.tabler.io/static/avatars/001f.jpg" alt="" />
						</Avatar>
					</El>
					<El col textAlign="start">
						<div class="text-body">Egan Poetz</div>
						<span class="text-muted">3 days ago</span>
					</El>
					<El col="auto" mt="3">
						<Icon name="heart" />
					</El>
				</El>
			</CardBody>
		</El>
	</El>
</Card>
<Card>
	<El row>
		<El col>
			<CardBody>
				<CardTitle>Shut up!</CardTitle>
				<p>
					Burn her! How do you know she is a witch? You don't frighten us, English pig-dogs! Go and
					boil yo...
				</p>
				<El row class="mt-4" justifyContent="start">
					<El col="auto">
						<Avatar>
							<img src="https://preview.tabler.io/static/avatars/001f.jpg" alt="" />
						</Avatar>
					</El>
					<El col textAlign="start">
						<div class="text-body">Egan Poetz</div>
						<span class="text-muted">3 days ago</span>
					</El>
					<El col="auto" mt="3">
						<Icon name="heart" />
					</El>
				</El>
			</CardBody>
		</El>
		<El colXl="3" colLg="4" colMd="6">
			<CardMedia elementPosition="end">
				<img
					src="https://preview.tabler.io/static/photos/pink-desk-in-the-home-office.jpg"
					alt="" />
			</CardMedia>
		</El>
	</El>
</Card>
