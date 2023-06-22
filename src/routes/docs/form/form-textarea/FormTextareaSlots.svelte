<script lang="ts">
	import { Button, El, FormTextarea, Icon } from 'yesvelte'
</script>

<FormTextarea label="Start Icon">
	<Icon name="star" slot="start-icon" />
</FormTextarea>
<El p="3" />
<FormTextarea label="End Icon">
	<Icon name="star" slot="end-icon" />
</FormTextarea>
<El p="3" />
<FormTextarea label="Start Button">
	<Button color="primary" slot="start">Start</Button>
</FormTextarea>
<El p="3" />
<FormTextarea label="End Button">
	<Button color="primary" slot="end">Search</Button>
</FormTextarea>
<El p="3" />
