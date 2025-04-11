<script lang="ts">
	import { FormSwitch } from 'yesvelte'

	let value: string = $state('agree')
	let checked: boolean = $state(false)
</script>

<FormSwitch description="This is description" bind:checked bind:value label="Form Switch">
	I agree
</FormSwitch>

<i>value: {value}, checked={checked}</i>
