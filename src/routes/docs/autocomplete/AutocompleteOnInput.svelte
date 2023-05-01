<script lang="ts">
	import { El, Autocomplete, Avatar } from 'yesvelte'

	let items: any[] = []

	function debounced(callback: any, timeout = 300) {
		let timer: any
		return (...args: any[]) => {
			clearTimeout(timer)
			timer = setTimeout(() => callback(...args), timeout)
		}
	}

	function onInput(query: string) {
		var url = 'https://api.github.com/search/repositories?q=' + encodeURIComponent(query)

		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				items = json?.items ?? []
			})
			.catch(() => {
				items = []
			})
	}

	const debouncedOnInput = debounced(onInput)

	let value: any
</script>

{items.length} items
<Autocomplete {items} on:input={(event) => debouncedOnInput(event.detail)} bind:value let:item>
	<El py="2" px="2" d="flex">
		<Avatar me="3">
			<img src={item.owner.avatar_url} />
		</Avatar><El ms="2">
			<El mb="1">
				<El tag="h4" d="inline-block">
					{item.name}
				</El>
				<El tag="span" textMuted>by {item.owner.login}</El>
			</El>
			<El>{item.description}</El>
		</El>
	</El>
</Autocomplete>
{#if value}
	url: <El tag="a" href={value.html_url}>{value.html_url}</El>
{/if}
