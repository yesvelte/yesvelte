<script>
	import { Button, Offcanvas, OffcanvasHeader } from 'yesvelte'

	let showStart = $state(false)
	let showEnd = $state(false)
	let showTop = $state(false)
	let showBottom = $state(false)
</script>

<Button color="primary" onclick={() => (showStart = !showStart)}>Offcanvas in Start</Button>
<Button color="primary" onclick={() => (showEnd = !showEnd)}>Offcanvas in End</Button>
<Button color="primary" onclick={() => (showTop = !showTop)}>Offcanvas in Top</Button>
<Button color="primary" onclick={() => (showBottom = !showBottom)}>Offcanvas in Bottom</Button>

<Offcanvas placement="start" bind:show={showStart}>
	<OffcanvasHeader title="Offcanvas from start" />
</Offcanvas>

<Offcanvas placement="end" bind:show={showEnd}>
	<OffcanvasHeader title="Offcanvas from end" />
</Offcanvas>

<Offcanvas placement="top" bind:show={showTop}>
	<OffcanvasHeader title="Offcanvas starting from top" />
</Offcanvas>

<Offcanvas placement="bottom" bind:show={showBottom}>
	<OffcanvasHeader title="Offcanvas starting from bottom" />
</Offcanvas>
