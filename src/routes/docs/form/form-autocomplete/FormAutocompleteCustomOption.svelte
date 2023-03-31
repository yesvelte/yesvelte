<script lang="ts">
	import { FormAutocomplete, Avatar, El } from 'yesvelte'

	let methods = [
		{ id: 'paypal', name: 'PayPal' },
		{ id: 'mastercard', name: 'Master Card' },
		{ id: 'visa', name: 'Visa' },
	]

	let value: string | undefined = undefined
</script>

<FormAutocomplete
	label="Payment method:"
	items={methods}
	key={(item) => item.id}
	bind:value
	let:item>
	<El d="flex" alignItems="center">
		<El tag="span" me="2">
			<img src="/images/{item.id}.svg" width="32px" />
		</El>
		{item.name}
	</El>
</FormAutocomplete>

<i>method_id: {value}</i>
