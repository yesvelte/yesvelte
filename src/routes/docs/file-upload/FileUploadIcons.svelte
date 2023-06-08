<script lang="ts">
	import { El, FileUpload, Icon } from 'yesvelte'
</script>

<FileUpload>
	<Icon slot="start" name="file-text" />
</FileUpload>

<El p="3" />

<FileUpload>
	<Icon slot="end" name="file-text" />
</FileUpload>
