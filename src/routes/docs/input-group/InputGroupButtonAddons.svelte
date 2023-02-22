<script lang="ts">
	import { Button, Input } from 'yesvelte'
</script>

<Input>
	<Button slot="start">Button</Button>
</Input>

<Input>
	<Button slot="start" outline color="secondary">Button</Button>
</Input>

<Input placeholder="Recipient's username">
	<Button slot="end">Button</Button>
</Input>

<Input placeholder="Recipient's username">
	<Button slot="end" outline color="secondary">Button</Button>
</Input>

<Input>
	<svelte:fragment slot="start">
		<Button outline color="secondary">Button</Button>
		<Button outline color="secondary">Button</Button>
	</svelte:fragment>
</Input>

<Input>
	<svelte:fragment slot="end">
		<Button>Button</Button>
		<Button>Button</Button>
	</svelte:fragment>
</Input>
