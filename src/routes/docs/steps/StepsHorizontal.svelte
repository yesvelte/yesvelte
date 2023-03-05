<script>
	import { Card, CardBody, Steps, StepItem } from 'yesvelte'
</script>

<Card>
	<CardBody>
		<Steps my="4">
			<StepItem>1</StepItem>
			<StepItem active>2</StepItem>
			<StepItem>3</StepItem>
		</Steps>
	</CardBody>
	<CardBody py="4">
		<Steps counter>
			<StepItem />
			<StepItem active />
			<StepItem />
		</Steps>
	</CardBody>
	<CardBody py="4">
		<Steps counter>
			<StepItem>Cart</StepItem>
			<StepItem active>Billing Information</StepItem>
			<StepItem>Confirmation</StepItem>
		</Steps>
	</CardBody>
</Card>
