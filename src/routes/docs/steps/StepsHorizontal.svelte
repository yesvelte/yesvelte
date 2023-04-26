<script>
	import { Card, El, Steps, StepItem } from 'yesvelte'
</script>

<El p="3">
	<Steps my="4">
		<StepItem>1</StepItem>
		<StepItem active>2</StepItem>
		<StepItem>3</StepItem>
	</Steps>
</El>
<El p="3" py="4">
	<Steps counter>
		<StepItem />
		<StepItem active />
		<StepItem />
	</Steps>
</El>
<El p="3" py="4">
	<Steps counter>
		<StepItem>Cart</StepItem>
		<StepItem active>Billing Information</StepItem>
		<StepItem>Confirmation</StepItem>
	</Steps>
</El>
