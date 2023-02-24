<script lang="ts">
	import { CheckboxGroup } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: string[] = ['Peach']
</script>

<CheckboxGroup {items} bind:value />

<i>value: {JSON.stringify(value)}</i>
