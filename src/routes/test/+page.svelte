<script lang="ts">
	import Button from '$lib/button/Button.svelte'
	import Card from '$lib/card/Card.svelte'
	import CardBody from '$lib/card/CardBody.svelte'
	import Offcanvas from '$lib/offcanvas/Offcanvas.svelte'
	import Transition from '$lib/transition/Transition.svelte'

	let show2 = false
	let show = false
</script>

<Button on:click={() => (show = !show)}>Toggle</Button>
<Button on:click={() => (show2 = !show2)}>Toggle Custome</Button>
<!-- <Offcanvas {show} placement="end">TEXT</Offcanvas> -->
<Offcanvas {show} placement="bottom">BOTTOM</Offcanvas>

<Transition {show}>
	<h1>Fade</h1>
</Transition>

<Transition show={show2} componentName="custom-transition">
	<Card p="5">
		<CardBody>Custom transition (fade + scale)</CardBody>
	</Card>
</Transition>

<style>
	:global(.u-custom-transition-show) {
		display: block;
	}
	:global(.u-custom-transition-hide) {
		display: none;
	}
	:global(.u-custom-transition-entering) {
		transition: scale 0.5s, opacity 0.5s ease;
	}
	:global(.u-custom-transition-leaving) {
		transition: scale 0.2s, opacity 0.2s ease;
	}
	:global(.u-custom-transition-enter-from) {
		scale: 0.6;
		opacity: 0.1;
	}
	:global(.u-custom-transition-enter-to) {
		scale: 1;
		opacity: 1;
	}
	:global(.u-custom-transition-leave-from) {
		scale: 1;
		opacity: 1;
	}
	:global(.u-custom-transition-leave-to) {
		scale: 1.1;
		opacity: 0;
	}
</style>
