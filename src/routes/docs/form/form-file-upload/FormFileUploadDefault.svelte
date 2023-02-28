<script lang="ts">
	import { El, FormFileUpload } from 'yesvelte'

	let files: FileList
</script>

<FormFileUpload label="Picture" bind:files />
<FormFileUpload label="Picture" required bind:files />
<El tag="i">You Selected: {files ? files?.[0].name : ''}</El>
