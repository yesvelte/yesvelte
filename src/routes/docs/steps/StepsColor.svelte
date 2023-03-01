<script>
	import { Card, CardBody, Steps, StepItem } from 'yesvelte'
</script>

<Card>
	<CardBody py="4">
		<Steps color="green">
			<StepItem>Step 1</StepItem>
			<StepItem>Step 2</StepItem>
			<StepItem active>Step 3</StepItem>
			<StepItem>Step 4</StepItem>
		</Steps>
	</CardBody>
	<CardBody py="4">
		<Steps color="red">
			<StepItem>Step 1</StepItem>
			<StepItem active>Step 2</StepItem>
			<StepItem>Step 3</StepItem>
			<StepItem>Step 4</StepItem>
		</Steps>
	</CardBody>
</Card>
