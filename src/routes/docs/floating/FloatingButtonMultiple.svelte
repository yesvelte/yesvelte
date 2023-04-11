<script>
	import CardBody from '$lib/card/CardBody.svelte'
	import { Button, Card, Floating, Icon } from 'yesvelte'
</script>

<Card>
	<CardBody>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
		of type and scrambled it to make a type specimen book.
		<br />
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
		industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
		and scrambled it to make a type specimen book.
		<br />
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
		industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
		and scrambled it to make a type specimen book.
	</CardBody>
	<Floating offset={20} d="flex" gap="3" style="flex-direction: column">
		<Button color="facebook" shape="pill">
			<Icon name="brand-facebook" />
		</Button>
		<Button color="twitter" shape="pill">
			<Icon name="brand-twitter" />
		</Button>
		<Button color="google" shape="pill">
			<Icon name="brand-google" />
		</Button>
	</Floating>
</Card>
