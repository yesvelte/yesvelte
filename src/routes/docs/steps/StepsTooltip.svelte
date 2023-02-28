<script>
	import { Steps, StepItem } from 'yesvelte'
	// import {Tooltip} from 'yesvelte'
</script>

<Steps>
	<StepItem>Step 1</StepItem>
	<!-- <Tooltip>Step 1 description</Tooltip> -->

	<StepItem>Step 2</StepItem>
	<!-- <Tooltip>Step 2 description</Tooltip> -->

	<StepItem active>Step 3</StepItem>
	<!-- <Tooltip>Step 3 description</Tooltip> -->

	<StepItem>Step 4</StepItem>
	<!-- <Tooltip>Step 4 description</Tooltip> -->
</Steps>
