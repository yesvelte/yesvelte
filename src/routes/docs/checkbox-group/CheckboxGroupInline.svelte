<script lang="ts">
	import { CheckboxGroup } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: string[] = ['Apple']
</script>

<CheckboxGroup {items} bind:value inline />

<i>value: {JSON.stringify(value)}</i>
