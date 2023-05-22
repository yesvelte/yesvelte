<script>
	import { FormEditor, El } from 'yesvelte'

	let value = '<p>Hello <b>World</b>!</p>'
</script>

<FormEditor label="Default" hint="Write 200 charachers about yourself" bind:value />
<FormEditor label="Valid" state="valid" hint="This field is valid" bind:value />
<FormEditor label="Invalid" state="invalid" hint="Minimum 200 characters" bind:value />
