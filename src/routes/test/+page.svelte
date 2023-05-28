<script>
	import { Button, FormSlider, SliderKnob } from 'yesvelte'
</script>

<form method="get" action="/test">
	<FormSlider label="Select Range">
		<SliderKnob name="min" connect value={10} />
		<SliderKnob name="max" value={90} />
	</FormSlider>
	<Button>Submit</Button>
</form>
