<script>
	import CardBody from '$lib/card/CardBody.svelte'
	import { Button, Card, Floating, Icon } from 'yesvelte'
</script>

<Card>
	<CardBody>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
		of type and scrambled it to make a type specimen book.
	</CardBody>
	<Floating offset={10}>
		<Button color="primary" shape="pill" icon>
			<Icon name="plus" />
		</Button>
	</Floating>
</Card>
