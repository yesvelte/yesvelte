<script lang="ts">
	import { Steps, StepItem } from 'yesvelte'

	let items = [
		{
			text: 'Step 1',
		},
		{
			text: 'Step 2',
			active: true,
		},
		{
			text: 'Step 3',
		},
	]

	let active: number | undefined = 1
</script>

<Steps {items} bind:active let:index let:item>
	<StepItem on:click={() => (active = index)}>{item.text}</StepItem>
</Steps>
