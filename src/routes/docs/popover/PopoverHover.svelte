<script>
	import { Button, Popover, PopoverBody, PopoverHeader } from 'yesvelte'
</script>

<Button color="primary">Hover to trigger popover</Button>

<Popover trigger="hover">
	<PopoverHeader>Popover title</PopoverHeader>
	<PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
</Popover>
