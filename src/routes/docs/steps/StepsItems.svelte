<script>
	import { Button, Divider, StepItem, Steps } from 'yesvelte'

	let items = [
		{
			description: 'Step 1',
		},
		{
			description: 'Step 2',
		},
		{
			description: 'Step 3',
		},
		{
			description: 'Step 4',
		},
	]

	let active = 1
</script>

<Button on:click={() => (active = active - 1)}>Previous Step</Button>
<Button on:click={() => (active = active + 1)} color="primary">Next Step</Button>
<Divider />
<Steps {items} bind:active let:index let:item>
	<StepItem>{item.description}</StepItem>
</Steps>
<i>Active Index: {active}</i>
