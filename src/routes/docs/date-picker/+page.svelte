<script lang="ts">
	import { Page, Doc, Preview } from '$components'
	import DatePickerFormatter from './DatePickerFormatter.svelte'

	import DatepickerCustom from './DatepickerCustom.svelte'
	import DatepickerDefault from './DatepickerDefault.svelte'
	import DatepickerDisabled from './DatepickerDisabled.svelte'
	import DatepickerEvents from './DatepickerEvents.svelte'
	import DatepickerFlush from './DatepickerFlush.svelte'
	import DatepickerFormat from './DatepickerFormat.svelte'
	import DatepickerRange from './DatepickerRange.svelte'
	import DatepickerRangeMultiple from './DatepickerRangeMultiple.svelte'
	import DatepickerRounded from './DatepickerRounded.svelte'
	import DatepickerSizes from './DatepickerSizes.svelte'
	import DatepickerValidate from './DatepickerValidate.svelte'
	import DatepickerValue from './DatepickerValue.svelte'
</script>

<Page
	title="DatePicker"
	description="DatePicker is a fully featured date selection component that lets users select a date.">
	<Doc title="Default">
		<Preview src="./DatepickerDefault.svelte">
			<DatepickerDefault />
		</Preview>
	</Doc>

	<Doc title="Formatter">
		<p slot="description">
			You can change display format of the date using <code>formatText</code> prop.
		</p>
		<Preview src="./DatepickerFormatter.svelte">
			<DatePickerFormatter />
		</Preview>
	</Doc>

	<Doc title="External library for format">
		<p slot="description">
			The formats of this example is based on <a
				href="https://momentjs.com/docs/#/displaying/format/">Format</a> of Moment.js.
		</p>
		<Preview src="./DatepickerFormat.svelte">
			<DatepickerFormat />
		</Preview>
	</Doc>

	<Doc title="Initial Value">
		<Preview src="./DatepickerValue.svelte">
			<DatepickerValue />
		</Preview>
	</Doc>

	<Doc title="Border rounded">
		<Preview src="./DatepickerRounded.svelte">
			<DatepickerRounded />
		</Preview>
	</Doc>

	<Doc title="No border">
		<Preview src="./DatepickerFlush.svelte">
			<DatepickerFlush />
		</Preview>
	</Doc>

	<Doc title="Size">
		<Preview src="./DatepickerSizes.svelte">
			<DatepickerSizes />
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<Preview src="./DatepickerDisabled.svelte">
			<DatepickerDisabled />
		</Preview>
	</Doc>

	<Doc title="Range">
		<Preview src="./DatepickerRange.svelte">
			<DatepickerRange />
		</Preview>
	</Doc>

	<Doc title="Range With 2 months">
		<Preview src="./DatepickerRangeMultiple.svelte">
			<DatepickerRangeMultiple />
		</Preview>
	</Doc>

	<Doc title="Options">
		<p slot="description">
			DatePicker component internally uses <a href="https://litepicker.com/docs/options"
				>LitePicker</a
			>. which you can pass options to Litepicker instance using <code>options</code> prop.
		</p>
		<Preview src="./DatepickerCustom.svelte">
			<DatepickerCustom />
		</Preview>
	</Doc>

	<Doc title="Events">
		<Preview src="./DatepickerEvents.svelte">
			<DatepickerEvents />
		</Preview>
	</Doc>
	<Doc title="Validate">
		<Preview src="./DatepickerValidate.svelte">
			<DatepickerValidate />
		</Preview>
	</Doc>
</Page>
