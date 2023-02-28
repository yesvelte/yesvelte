<script lang="ts">
	import { FileUpload } from 'yesvelte'

	let files: FileList
</script>

<FileUpload bind:files />
