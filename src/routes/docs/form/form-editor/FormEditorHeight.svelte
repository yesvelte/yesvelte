<script>
	import { FormEditor } from 'yesvelte'

	let value = $state('<p>Hello <b>World</b>!</p>')
</script>

<FormEditor bind:value height="xl" />
