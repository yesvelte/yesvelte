<script>
	import { Autocomplete, El } from 'yesvelte'

	let items = [
		{ flag: 'pl', name: 'Poland' },
		{ flag: 'de', name: 'Germany' },
		{ flag: 'cz', name: 'Czech Republic' },
		{ flag: 'br', name: 'Brazil' },
	]
	let value = ''
</script>

<Autocomplete {items} key="flag" bind:value let:item>
	<El>
		<El tag="img" width="30" me="2" src="/images/flags/{item.flag}.svg" />
		{item.name}
	</El>
</Autocomplete>
<i>value: {value}</i>
