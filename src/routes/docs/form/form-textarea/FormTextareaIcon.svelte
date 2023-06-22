<script lang="ts">
	import { FormTextarea, Icon } from 'yesvelte'
</script>

<FormTextarea label="Name">
	<Icon slot="start-icon" name="user" />
</FormTextarea>
<FormTextarea label="Name" required>
	<Icon slot="end-icon" name="user" />
</FormTextarea>
