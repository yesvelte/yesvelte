<script lang="ts">
	import { Steps, StepItem } from 'yesvelte'

	let active: number = 3

	function onClick(number: number) {
		active = number
	}
</script>

<Steps>
	<StepItem on:click={() => onClick(1)} active={active === 1}>Step 1</StepItem>
	<StepItem on:click={() => onClick(2)} active={active === 2}>Step 2</StepItem>
	<StepItem on:click={() => onClick(3)} active={active === 3}>Step 3</StepItem>
	<StepItem on:click={() => onClick(4)} active={active === 4}>Step 4</StepItem>
</Steps>

{#if active}
	active item: {active}
{/if}
