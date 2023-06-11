<script lang="ts">
	import { El, Icon, Input } from 'yesvelte'
</script>

<Input placeholder="start icon">
	<Icon slot="start" name="user" />
</Input>
<El p="3" />
<Input placeholder="end icon">
	<Icon slot="end" name="user" />
</Input>
