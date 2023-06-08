<script lang="ts">
	import { DatePicker, El, Icon } from 'yesvelte'
</script>

<DatePicker placeholder="start Icon">
	<Icon name="calendar" slot="start" />
</DatePicker>

<El p="3" />

<DatePicker placeholder="end Icon">
	<Icon name="calendar" slot="end" />
</DatePicker>
