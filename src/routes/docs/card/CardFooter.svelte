<script>
	import { Card, CardBody, CardFooter, El, Button, CardActions } from 'yesvelte'
</script>

<Card title="Card with footer">
	<CardBody
		>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
		of type and scrambled it to make a type specimen book.</CardBody>
	<CardFooter>This is standard card footer</CardFooter>
</Card>
<Card title="Card with transparent footer">
	<CardBody
		>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
		of type and scrambled it to make a type specimen book.</CardBody>
	<CardFooter transparent>This is transparent card footer</CardFooter>
</Card>
<Card title="Card with footer button">
	<CardBody
		>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
		of type and scrambled it to make a type specimen book.</CardBody>
	<CardFooter><Button color="primary">Go somewhere</Button></CardFooter>
</Card>
<Card title="Card with footer buttons">
	<CardBody
		>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
		of type and scrambled it to make a type specimen book.</CardBody>
	<CardFooter>
		<El d="flex" w="100">
			<Button color="secondary">Cancel</Button>
			<Button color="primary" ms="auto">Go somewhere</Button>
		</El>
	</CardFooter>
</Card>
<Card title="Card with action footer">
	<CardBody
		>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
		of type and scrambled it to make a type specimen book.</CardBody>
	<CardFooter>
		<CardActions>
			<Button color="secondary">Cancel</Button>
			<Button color="primary" ms="auto">Go somewhere</Button>
		</CardActions>
	</CardFooter>
</Card>
