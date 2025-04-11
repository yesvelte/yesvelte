<script>
	import { Button, FormInput, Icon, Input } from 'yesvelte'
</script>

<Input placeholder="your domain name">
	{#snippet endSnippet()}
		<Icon name="search" />
	{/snippet}
</Input>

<FormInput placeholder="your domain name">
	{#snippet endSnippet()}
		<Button tag="a">
			<Icon name="search" />
		</Button>
	{/snippet}
</FormInput>
