<script>
	import { Steps, StepItem } from 'yesvelte'
    // import {Tooltip} from 'yesvelte'
</script>

<Steps>
	<StepItem />
	<!-- <Tooltip>Step 1 description</Tooltip> -->

	<StepItem />
	<!-- <Tooltip>Step 2 description</Tooltip> -->

	<StepItem active />
	<!-- <Tooltip>Step 3 description</Tooltip> -->

	<StepItem />
	<!-- <Tooltip>Step 4 description</Tooltip> -->
</Steps>
