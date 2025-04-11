<script lang="ts">
	import { FormAutocomplete, Avatar, El } from 'yesvelte'

	let methods = [
		{ id: 'paypal', name: 'PayPal' },
		{ id: 'mastercard', name: 'Master Card' },
		{ id: 'visa', name: 'Visa' },
	]

	let value: string | undefined = $state(undefined)
</script>

<FormAutocomplete label="Payment method:" items={methods} key={(item) => item.id} bind:value>
	{#snippet children({ item, index })}
		<El d="flex" alignItems="center">
			<El tag="span" me="2">
				<img src="/images/{item.id}.svg" width="32px" />
			</El>
			{item.name}
		</El>
	{/snippet}
</FormAutocomplete>

<i>method_id: {value}</i>
