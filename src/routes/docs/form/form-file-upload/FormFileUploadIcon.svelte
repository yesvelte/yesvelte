<script lang="ts">
	import Icon from '$lib/icon/Icon.svelte'
	import { FormFileUpload } from 'yesvelte'
</script>

<FormFileUpload label="Add Picture" required>
	<span slot="start">
		<Icon name="photo-plus" />
	</span>
</FormFileUpload>
