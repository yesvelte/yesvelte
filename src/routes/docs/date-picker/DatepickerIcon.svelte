<script lang="ts">
	import { DatePicker, El, Icon } from 'yesvelte'
</script>

<DatePicker placeholder="start Icon">
	{#snippet startSnippet()}
		<Icon name="calendar" />
	{/snippet}
</DatePicker>

<El p="3" />

<DatePicker placeholder="end Icon">
	{#snippet endSnippet()}
		<Icon name="calendar" />
	{/snippet}
</DatePicker>
