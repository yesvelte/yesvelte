<script>
	import { Steps, StepItem, Tooltip } from 'yesvelte'
</script>

<Steps>
	<StepItem>
		<Tooltip>Step 1 description</Tooltip>
	</StepItem>

	<StepItem>
		<Tooltip>Step 2 description</Tooltip>
	</StepItem>

	<StepItem active>
		<Tooltip>Step 3 description</Tooltip>
	</StepItem>

	<StepItem>
		<Tooltip>Step 4 description</Tooltip>
	</StepItem>
</Steps>
