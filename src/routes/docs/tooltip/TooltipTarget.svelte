<script>
	import { Button, Tooltip } from 'yesvelte'
</script>

<Tooltip text="Tooltip content 1" target="#my-button1" />
<Tooltip text="Tooltip content 2" target="#my-button2" />
<Tooltip text="Tooltip content 3" target="#my-button3" />

<Button id="my-button1" color="primary" outline>Button 1</Button>
<Button id="my-button2" color="success" outline>Button 2</Button>
<Button id="my-button3" color="danger" outline>Button 3</Button>
