<script>
	import { FormCheckbox } from 'yesvelte'
</script>

<FormCheckbox innerProps={{reverse: true,  description: "This is description"}} label="HTML" value>
	Text of checkbox
</FormCheckbox>
<FormCheckbox innerProps={{reverse: true}} label="CSS (disbaled)" disabled>Text</FormCheckbox>
<FormCheckbox innerProps={{reverse: true}} label="JavaScript" />
<FormCheckbox innerProps={{reverse: true}} label="Svelte" />
