<script>
	import { Button, Divider, StepItem, Steps } from 'yesvelte'

	let items = $state([
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
	])

	let active = $state(1)
</script>

<Button onclick={() => (active = active - 1)}>Previous Step</Button>
<Button onclick={() => (active = active + 1)} color="primary">Next Step</Button>
<Divider />
<Steps {items} bind:active>
	{#snippet children({ item, index })}
		<StepItem>{item.description}</StepItem>
	{/snippet}
</Steps>
<i>Active Index: {active}</i>
