<script lang="ts">
	import { Button, El, FormInput, Icon } from 'yesvelte'
</script>

<FormInput label="Start Icon">
	<Icon name="star" slot="start-icon" />
</FormInput>
<El p="3" />
<FormInput label="End Icon">
	<Icon name="star" slot="end-icon" />
</FormInput>
<El p="3" />
<FormInput label="Start Button">
	<Button color="primary" slot="start">Start</Button>
</FormInput>
<El p="3" />
<FormInput label="End Button">
	<Button color="primary" slot="end">Search</Button>
</FormInput>
<El p="3" />
