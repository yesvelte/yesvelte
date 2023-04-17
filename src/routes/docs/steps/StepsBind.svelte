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

	let activeIndex: number | undefined = 1
</script>

<Steps {items} bind:activeIndex let:index let:item>
	<StepItem on:click={() => (activeIndex = index)}>{item.text}</StepItem>
</Steps>
