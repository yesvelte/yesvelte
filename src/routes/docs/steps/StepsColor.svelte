<script>
	import { El, Steps, StepItem } from 'yesvelte'
</script>

<El py="4">
	<Steps color="green">
		<StepItem>Step 1</StepItem>
		<StepItem>Step 2</StepItem>
		<StepItem active>Step 3</StepItem>
		<StepItem>Step 4</StepItem>
	</Steps>
</El>
<El py="4">
	<Steps color="red">
		<StepItem>Step 1</StepItem>
		<StepItem active>Step 2</StepItem>
		<StepItem>Step 3</StepItem>
		<StepItem>Step 4</StepItem>
	</Steps>
</El>
