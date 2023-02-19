<script>
	import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'yesvelte'
	let show = false
</script>

<Button color="primary" on:click={() => (show = !show)}>Toggle offcanvas</Button>

<Offcanvas bind:show>
	<OffcanvasHeader title="Offcanvas Title" />
	<OffcanvasBody>
		<p>And here's some amazing content. It's very engaging. Right?</p>
	</OffcanvasBody>
</Offcanvas>
