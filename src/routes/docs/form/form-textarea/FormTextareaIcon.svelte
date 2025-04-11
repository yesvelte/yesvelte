<script lang="ts">
	import { FormTextarea, Icon } from 'yesvelte'
</script>

<FormTextarea label="Name">
	{#snippet startIconSnippet()}
		<Icon name="user" />
	{/snippet}
</FormTextarea>

<FormTextarea label="Name" required>
	{#snippet endIconSnippet()}
		<Icon name="user" />
	{/snippet}
</FormTextarea>
