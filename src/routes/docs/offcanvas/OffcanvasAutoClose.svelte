<script>
	import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'yesvelte'
	let show = $state(false)
	let scroll = $state(false)
	const toggleBackdrop = () => (show = !show)
	const toggleNoScroll = () => (scroll = !scroll)
</script>

<Button color="primary" onclick={toggleBackdrop}>AutoClose</Button>
<Button color="primary" onclick={toggleNoScroll}>AutoClose with backdrop</Button>

<Offcanvas bind:show autoClose>
	<OffcanvasHeader title="Offcanvas Title" />
	<OffcanvasBody>
		<p>And here's some amazing content. It's very engaging. Right?</p>
	</OffcanvasBody>
</Offcanvas>

<Offcanvas bind:show={scroll} autoClose backdrop>
	<OffcanvasHeader title="Offcanvas Title" />
	<OffcanvasBody>
		<p>And here's some amazing content. It's very engaging. Right?</p>
	</OffcanvasBody>
</Offcanvas>
