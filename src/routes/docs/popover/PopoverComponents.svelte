<script>
	import { Button, FormInput, Popover, PopoverBody, FormRadioGroup, El } from 'yesvelte'
</script>

<Button>Choose Filters</Button>

<Popover trigger="click">
	<PopoverBody>
		<El row>
			<FormRadioGroup inline items={['equal', 'like', 'between']} label="Type" />
			<FormInput label="Text" />
		</El>
	</PopoverBody>
</Popover>
