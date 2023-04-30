<script lang="ts">
	import { El, Autocomplete } from 'yesvelte'

	let items: any[] = []

	function debounced(callback: any, timeout = 300) {
		let timer: any
		return (...args: any[]) => {
			clearTimeout(timer)
			timer = setTimeout(() => callback(...args), timeout)
		}
	}

	function onInput(query: string) {
		console.log('onInput', query)
		var url = 'https://api.github.com/search/repositories?q=' + encodeURIComponent(query)

		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				items = json.items
			})
			.catch(() => {
				items = []
			})
	}

	const debouncedOnInput = debounced(onInput)
</script>

{items.length} items
<Autocomplete {items} on:input={(event) => debouncedOnInput(event.detail)} let:item>
	<El py="2" d="flex">
		<El ms="2">
			<El mb="1">
				<El tag="h4" d="inline-block">
					{item.name}
				</El>
				<El tag="span" textMuted>by {item.owner.login}</El>
			</El>
		</El>
	</El>
</Autocomplete>
