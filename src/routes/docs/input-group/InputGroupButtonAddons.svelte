<script lang="ts">
	import { Button, FormInput, Input } from 'yesvelte'
</script>

<FormInput>
	<Button slot="start">Button</Button>
</FormInput>

<FormInput>
	<Button slot="start" outline color="secondary">Button</Button>
</FormInput>

<FormInput placeholder="Recipient's username">
	<Button slot="end">Button</Button>
</FormInput>

<FormInput placeholder="Recipient's username">
	<Button slot="end" outline color="secondary">Button</Button>
</FormInput>

<FormInput>
	<svelte:fragment slot="start">
		<Button outline color="secondary">Button</Button>
		<Button outline color="secondary">Button</Button>
	</svelte:fragment>
</FormInput>

<FormInput>
	<svelte:fragment slot="end">
		<Button>Button</Button>
		<Button>Button</Button>
	</svelte:fragment>
</FormInput>
