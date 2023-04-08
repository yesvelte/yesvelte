<script>
	import { Switch } from 'yesvelte'

	let checked1 = false
	let checked2 = true
	let checked3 = true
	let checked4 = false
</script>

<Switch bind:checked={checked1} label="Switch 1: {checked1}" />
<Switch bind:checked={checked2} label="Switch 2: {checked2}" />
<Switch bind:checked={checked3} disabled label="Switch disabled 3: {checked3}" />
<Switch bind:checked={checked4} disabled label="Switch disabled 4: {checked4}" />
