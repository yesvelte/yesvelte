<script>
	import {
		FormAutocomplete,
		FormInput,
		FormSelect,
		FormCheckbox,
		FormCheckboxGroup,
		FormDatePicker,
		FormRadioGroup,
		FormEditor,
		FormFileUpload,
		FormSwitch,
		FormTextarea,
		FormSlider,
		SliderKnob,
		Card,
		CardBody,
		El,
		CardFooter,
		CardActions,
		Button,
	} from 'yesvelte'
	import 'yesvelte/css/tabler.min.css'

	let items = ['first', 'second', 'third', 'fourth', 'fifth']
</script>

<Card title="Form submission" mb="3">
	<form method="GET" action="#">
		<CardBody>
			<El row>
				<FormAutocomplete label="Autocomplete" name="autocomplete" {items} />
				<FormAutocomplete
					multiple
					label="Autocomplete_Multiple"
					name="autocomplete-multiple"
					{items} />
				<FormInput label="Input" name="input" />
				<FormSelect label="Select" name="select" {items} />
				<FormSelect multiple label="Select_multiple" name="select-multiple" {items} />
				<FormSwitch name="switch">Switch</FormSwitch>
				<FormCheckbox name="checkbox">Checkbox</FormCheckbox>
				<FormRadioGroup {items} name="radio-group" label="RadioGroup" />
				<FormCheckboxGroup {items} name="checkbox-group" label="CheckboxGroup" />
				<FormTextarea name="textarea" label="Textarea" />
				<FormDatePicker name="datepicker" label="DatePicker" />
				<FormEditor name="editor" label="Editor" />
				<FormFileUpload name="file-upload" label="FileUpload" />
				<FormSlider label="Slider">
					<SliderKnob name="slider" />
				</FormSlider>
			</El>
		</CardBody>

		<CardFooter>
			<CardActions d="flex" gap="2">
				<Button type="reset">Reset</Button>
				<Button color="primary" type="submit">Submit</Button>
			</CardActions>
		</CardFooter>
	</form>
</Card>
