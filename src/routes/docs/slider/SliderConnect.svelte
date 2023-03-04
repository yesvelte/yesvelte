<script lang="ts">
	import El from '$lib/el/El.svelte'
	import { Slider, SliderKnob } from 'yesvelte'

	let value: number = 30
</script>

<El>Connect from Start</El>
<Slider connect>
	<SliderKnob bind:value />
</Slider>

<El>Connect to End</El>
<Slider>
	<SliderKnob connect bind:value />
</Slider>

<br />
{#if value}
	{value}
{/if}
