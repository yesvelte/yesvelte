<script lang="ts">
	import { FormCheckboxGroup } from 'yesvelte'

	let items = ['Apple', 'Orange', 'Peach', 'Banana', 'Apricot']
	let value: string[] = []
</script>

<FormCheckboxGroup label="Select a Fruit" {items} bind:value />

<i>value: {JSON.stringify(value)}</i>
