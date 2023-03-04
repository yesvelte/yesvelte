<script>
	import { FormSwitch } from 'yesvelte'
</script>

<FormSwitch innerProps={{ reverse: true, description: 'This is description' }} label="HTML" value>
	Text of Switch
</FormSwitch>
<FormSwitch innerProps={{ reverse: true }} label="CSS (disbaled)" disabled>Text</FormSwitch>
<FormSwitch innerProps={{ reverse: true }} label="JavaScript" />
<FormSwitch innerProps={{ reverse: true }} label="Svelte" />
