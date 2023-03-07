<script>
	import { FormInput, Button, El, FormSlider, SliderKnob } from 'yesvelte'
</script>

<El row>
	<FormInput label="First Name" col="6" />
	<FormInput label="Last Name" col="6" />
	<FormInput label="Username" col="12" />
	<FormInput label="Email" col="12" />
	<FormSlider connect label="Age" col="12">
		<SliderKnob tooltip value={18} />
	</FormSlider>
	<El col textAlign="end">
		<Button color="primary">Submit</Button>
	</El>
</El>
