<script>
	import { Button, Popover, PopoverBody, PopoverHeader } from 'yesvelte'
</script>

<Button size="lg" color="danger">Click to trigger popover</Button>

<Popover trigger="click" title="Popover Title">
	<PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
</Popover>
