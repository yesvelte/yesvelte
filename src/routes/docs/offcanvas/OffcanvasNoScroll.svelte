<script>
	import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'yesvelte'
	let showBackdrop = $state(false)
	let showScroll = $state(false)
	let showNoScroll = $state(false)
	const toggleBackdrop = () => (showBackdrop = !showBackdrop)
	const toggleScroll = () => (showScroll = !showScroll)
	const toggleNoScroll = () => (showNoScroll = !showNoScroll)
</script>

<Button color="primary" onclick={toggleBackdrop}>NoScroll</Button>
<Button color="primary" onclick={toggleScroll}>NoScroll + Backdrop</Button>
<Button color="primary" onclick={toggleNoScroll}>All together!</Button>

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
