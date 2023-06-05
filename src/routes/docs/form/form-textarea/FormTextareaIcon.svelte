<script lang="ts">
	import { FormTextarea, Icon } from 'yesvelte'

</script>

<FormTextarea label="Name">
	<span slot="start">
		<Icon name="user" />
	</span>
</FormTextarea>
<FormTextarea label="Name" required>
	<span slot="end">
		<Icon name="user" />
	</span>
</FormTextarea>
