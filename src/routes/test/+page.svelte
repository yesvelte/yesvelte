<script lang="ts">
	import Button from '$lib/button/Button.svelte'
	import El from '$lib/el/El.svelte'
	import Offcanvas from '$lib/offcanvas/Offcanvas.svelte'
	import Transition from '$lib/transition/Transition.svelte'

	let show2 = false
	let show3 = false
	let show = false
	let state: string = ''
</script>

<Button on:click={() => (show = !show)}>Toggle Offcanvas</Button>
<Button on:click={() => (show2 = !show2)}>Toggle Custom {show2}</Button>
<Button on:click={() => (show3 = !show3)}>Toggle Slide {show3}</Button>

<Offcanvas {show} placement="bottom">BOTTOM</Offcanvas>
<Offcanvas {show} placement="end">END</Offcanvas>

{state}
<Transition
	show={show2}
	on:entered={() => (state = 'entered')}
	on:entering={() => (state = 'entering')}
	on:leaving={() => (state = 'leaving')}
	on:leaved={() => (state = 'leaved')}
	componentName="custom-transition">
	<El p="5" bgColor="success">
		<El>Custom transition (fade + scale)</El>
	</El>
</Transition>
<br />
<br />
<br />
<Transition
	show={show3}
	on:entered={() => (state = 'entered')}
	on:entering={() => (state = 'entering')}
	on:leaving={() => (state = 'leaving')}
	on:leaved={() => (state = 'leaved')}
	componentName="slide-transition">
	<El p="5" bgColor="danger">
		<El>Custom transition (slide)</El>
	</El>
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
		scale: 0.7;
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
		scale: 0.9;
		opacity: 0;
	}

	:global(.u-slide-transition) {
		transition: transform 0.8s ease;
	}
	:global(.u-slide-transition-show) {
		transform: none;
	}
	:global(.u-slide-transition-hide) {
		display: none;
	}
	:global(.u-slide-transition-from) {
		transform: translateX(100%);
	}
	:global(.u-slide-transition-to) {
		transform: none;
	}
</style>
