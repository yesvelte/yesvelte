<script lang="ts">
	import { FileUpload } from 'yesvelte'

	let files: FileList | undefined = $state(undefined)
</script>

<FileUpload bind:files />
