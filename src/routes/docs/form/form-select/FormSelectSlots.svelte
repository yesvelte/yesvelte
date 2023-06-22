<script lang="ts">
	import { Button, El, FormSelect, Icon } from 'yesvelte'

	let items = ['Apple', 'Banana', 'Cherry']
</script>

<FormSelect {items} label="Start Icon">
	<Icon name="star" slot="start-icon" />
</FormSelect>
<El p="3" />
<FormSelect {items} label="End Icon">
	<Icon name="star" slot="end-icon" />
</FormSelect>
<El p="3" />
<FormSelect {items} label="Start Button">
	<Button color="primary" slot="start">Start</Button>
</FormSelect>
<El p="3" />
<FormSelect {items} label="End Button">
	<Button color="primary" slot="end">Search</Button>
</FormSelect>
<El p="3" />
