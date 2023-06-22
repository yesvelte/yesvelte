<script lang="ts">
	import { Button, El, FormAutocomplete, Icon } from 'yesvelte'

	let items = ['A', 'B', 'C', 'D', 'E']
</script>

<FormAutocomplete {items} label="Start Icon">
	<Icon name="star" slot="start-icon" />
</FormAutocomplete>
<El p="3" />
<FormAutocomplete {items} label="End Icon">
	<Icon name="star" slot="end-icon" />
</FormAutocomplete>
<El p="3" />
<FormAutocomplete {items} label="Start Button">
	<Button color="primary" slot="start">Start</Button>
</FormAutocomplete>
<El p="3" />
<FormAutocomplete {items} label="End Button">
	<Button color="primary" slot="end">Search</Button>
</FormAutocomplete>
<El p="3" />
