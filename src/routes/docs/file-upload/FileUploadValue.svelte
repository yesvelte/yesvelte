<script lang="ts">
	import { FileUpload } from 'yesvelte'

	let files: any = $state(undefined)
</script>

<FileUpload bind:files />

{#if files}
	You selected: {files[0].name}
{/if}
