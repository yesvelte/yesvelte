<script lang="ts">
	import Icon from '$lib/icon/Icon.svelte'
	import { FormFileUpload } from 'yesvelte'
</script>

<FormFileUpload label="Add Picture" required>
	<Icon slot="start-icon" name="photo-plus" />
</FormFileUpload>
