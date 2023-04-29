<script lang="ts">
	import { onMount } from 'svelte'
	import { Select } from 'yesvelte'

	let items: string[] = []

	onMount(() => {
		setInterval(() => {
			items = [...items, 'Item #' + items.length]
		}, 1000)
	})

	let value: string
</script>

<Select {items} bind:value />
value: {value}
