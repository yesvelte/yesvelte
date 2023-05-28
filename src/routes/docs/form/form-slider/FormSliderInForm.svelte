<script>
	import { Button, FormSlider, SliderKnob } from 'yesvelte'
</script>

<form method="get" action="#">
	<FormSlider label="Select Range">
		<SliderKnob name="min" connect value={10} />
		<SliderKnob name="max" value={90} />
	</FormSlider>
	<Button type="submit">Submit</Button>
</form>
