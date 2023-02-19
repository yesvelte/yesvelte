<script>
	import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'yesvelte'
	let show = false
	let showNoScroll = false
	const toggleBackdrop = () => (show = !show)
	const toggleNoScroll = () => (showNoScroll = !showNoScroll)
</script>

<Button color="primary" on:click={toggleBackdrop}>AutoClose Offcanvas</Button>
<Button color="primary" on:click={toggleNoScroll}>AutoClose Offcanvas with backdrop</Button>

<Offcanvas bind:show autoClose>
	<OffcanvasHeader title="Offcanvas Title" />
	<OffcanvasBody>
		<p>And here's some amazing content. It's very engaging. Right?</p>
	</OffcanvasBody>
</Offcanvas>

<Offcanvas bind:show={showNoScroll} autoClose backdrop>
	<OffcanvasHeader title="Offcanvas Title" />
	<OffcanvasBody>
		<p>And here's some amazing content. It's very engaging. Right?</p>
	</OffcanvasBody>
</Offcanvas>
