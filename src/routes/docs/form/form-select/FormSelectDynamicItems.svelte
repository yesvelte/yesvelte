<script lang="ts">
	import { onMount } from 'svelte'
	import { FormSelect } from 'yesvelte'

	let items: string[] = []

	onMount(() => {
		setInterval(() => {
			items = [...items, 'Item #' + items.length]
		}, 1000)
	})

	let value: string
</script>

<FormSelect label="Choose a Item:" {items} bind:value />
value: {value}
