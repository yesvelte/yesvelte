<script>
	import { FileUpload } from 'yesvelte'

	let clicked = $state(0)
	let changed = $state(0)
</script>

<FileUpload onclick={() => (clicked += 1)} placeholder="Click me!" />
clicked: {clicked}
<br />

<FileUpload mt="2" onchange={() => (changed += 1)} placeholder="Change value!" />

changed: {changed}
