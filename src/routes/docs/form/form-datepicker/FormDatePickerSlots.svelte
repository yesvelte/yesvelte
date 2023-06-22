<script lang="ts">
	import { Button, El, FormDatePicker, Icon } from 'yesvelte'
</script>

<FormDatePicker label="Start Icon">
	<Icon name="star" slot="start-icon" />
</FormDatePicker>
<El p="3" />
<FormDatePicker label="End Icon">
	<Icon name="star" slot="end-icon" />
</FormDatePicker>
<El p="3" />
<FormDatePicker label="Start Button">
	<Button color="primary" slot="start">Start</Button>
</FormDatePicker>
<El p="3" />
<FormDatePicker label="End Button">
	<Button color="primary" slot="end">Search</Button>
</FormDatePicker>
<El p="3" />
