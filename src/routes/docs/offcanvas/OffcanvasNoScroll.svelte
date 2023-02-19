<script>
	import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'yesvelte'
	let showBackdrop = false
	let showScroll = false
	let showNoScroll = false
	const toggleBackdrop = () => (showBackdrop = !showBackdrop)
	const toggleScroll = () => (showScroll = !showScroll)
	const toggleNoScroll = () => (showNoScroll = !showNoScroll)
</script>

<Button color="primary" on:click={toggleBackdrop}>NoScroll Offcanvas</Button>
<Button color="primary" on:click={toggleScroll}>Offcanvas with noScroll and backdrop</Button>
<Button color="primary" on:click={toggleNoScroll}>All together!</Button>

<Offcanvas bind:show={showBackdrop} noScroll>
	<OffcanvasHeader title="Offcanvas Title" />
	<OffcanvasBody>
		<p>And here's some amazing content. It's very engaging. Right?</p>
	</OffcanvasBody>
</Offcanvas>

<Offcanvas bind:show={showScroll} backdrop noScroll>
	<OffcanvasHeader title="Offcanvas Title" />
	<OffcanvasBody>
		<p>And here's some amazing content. It's very engaging. Right?</p>
	</OffcanvasBody>
</Offcanvas>

<Offcanvas bind:show={showNoScroll} backdrop noScroll autoClose>
	<OffcanvasHeader title="Offcanvas Title" />
	<OffcanvasBody>
		<p>And here's some amazing content. It's very engaging. Right?</p>
	</OffcanvasBody>
</Offcanvas>
