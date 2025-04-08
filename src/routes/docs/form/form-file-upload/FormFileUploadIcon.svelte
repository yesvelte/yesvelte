<script lang="ts">
	import Icon from '$lib/icon/Icon.svelte'
	import { FormFileUpload } from 'yesvelte'
</script>

<FormFileUpload label="Add Picture" required>
	{#snippet startIconSnippet()}
		<Icon name="photo-plus" />
	{/snippet}
</FormFileUpload>
