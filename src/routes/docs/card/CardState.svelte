<script>
	import { Card, CardBody } from 'yesvelte'
</script>

<Card>
	<CardBody>This is undefined state.</CardBody>
</Card>
<Card state="active">
	<CardBody>This is a card with active state.</CardBody>
</Card>
<Card state="inactive">
	<CardBody>This is some text inactive state.</CardBody>
</Card>
