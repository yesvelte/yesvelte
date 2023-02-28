<script lang="ts">
	import { FileUpload } from 'yesvelte'

	let files: any = undefined
</script>

<FileUpload bind:files />

{#if files}
	You selected: {files[0].name}
{/if}
