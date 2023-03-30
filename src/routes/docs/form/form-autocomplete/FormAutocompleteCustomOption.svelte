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
	{item.name}

	<El d="flex" alignItems="center" slot="option">
		<Avatar me="2">
			<img src="/images/{item.id}.svg" />
		</Avatar>
		{item.name}
	</El>
	<El d="flex" alignItems="center" slot="item">
		<Avatar me="2">
			<img src="/images/{item.id}.svg" />
		</Avatar>
		{item.name}
	</El>
</FormAutocomplete>

<i>method_id: {value}</i>
