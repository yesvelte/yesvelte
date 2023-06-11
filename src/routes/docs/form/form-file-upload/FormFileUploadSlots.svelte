<script lang="ts">
	import { Button, El, FormFileUpload, Icon } from 'yesvelte'
</script>

<FormFileUpload label="Start Icon">
	<Icon name="star" slot="start-icon" />
</FormFileUpload>
<El p="3" />
<FormFileUpload label="End Icon">
	<Icon name="star" slot="end-icon" />
</FormFileUpload>
<El p="3" />
<FormFileUpload label="Start Button">
	<Button color="primary" slot="start">Start</Button>
</FormFileUpload>
<El p="3" />
<FormFileUpload label="End Button">
	<Button color="primary" slot="end">Search</Button>
</FormFileUpload>
<El p="3" />
