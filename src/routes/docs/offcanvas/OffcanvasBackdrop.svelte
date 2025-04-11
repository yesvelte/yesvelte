<script>
	import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'yesvelte'
	let showBackdrop = $state(false)
	let showNoScroll = $state(false)
	const toggleBackdrop = () => (showBackdrop = !showBackdrop)
	const toggleNoScroll = () => (showNoScroll = !showNoScroll)
</script>

<Button color="primary" onclick={toggleBackdrop}>Offcanvas with backdrop</Button>
<Button color="primary" onclick={toggleNoScroll}>Offcanvas with backdrop and no-scroll</Button>

<Offcanvas bind:show={showBackdrop} backdrop autoClose>
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
