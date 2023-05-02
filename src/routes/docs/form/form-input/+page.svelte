<script>
	import { Page, Doc, Preview } from '$components'
	import FormInputLayout from './FormInputLayout.svelte'
	import FormInputDefault from './FormInputDefault.svelte'
	import FormInputHint from './FormInputHint.svelte'
	import FormInputState from './FormInputState.svelte'
	import FormInputMask from './FormInputMask.svelte'
	import FormInputFieldset from './FormInputFieldset.svelte'
	import FormInputEvents from './FormInputEvents.svelte'
	import FormInputValidateOnBlur from './FormInputValidateOnBlur.svelte'
	import FormInputValidateOnInput from './FormInputValidateOnInput.svelte'
</script>

<Page
	title="FormInput"
	description="FormInput is an input and label wrapper component to be used insisde forms. It supports all props and events of Input and also have some additional features.">
	<Doc title="Label">
		<p slot="description">
			Set <code>label</code> property to show input label's and bind to its id automatically.
			<code>required</code> is a booleanproperty which show an indicator on label as well. You can
			also use
			<code>label</code> slot.
		</p>
		<Preview src="./FormInputDefault.svelte">
			<FormInputDefault />
		</Preview>
	</Doc>

	<Doc title="Hint">
		<p slot="description">
			Set <code>hint</code> string property to show some useful information about the input. You can
			also use
			<code>hint</code> slot.
		</p>
		<Preview src="./FormInputHint.svelte">
			<FormInputHint />
		</Preview>
	</Doc>

	<Doc title="State">
		<p slot="description">
			Set <code>state</code> property to show a state indicator on the input.
		</p>
		<Preview src="./FormInputState.svelte">
			<FormInputState />
		</Preview>
	</Doc>

	<Doc title="Events">
		<Preview src="./FormInputEvents.svelte">
			<FormInputEvents />
		</Preview>
	</Doc>

	<Doc title="Mask">
		<p slot="description">
			You can use the <code>mask</code> property to apply a mask to an input. You can also use the
			<code>maskOptions</code>
			property to configure the mask. For more information about the mask options, see the
			<a href="https://github.com/RobinHerbots/Inputmask#readme" target="_blank" rel="noreferrer"
				>Inputmask</a> documentation.
		</p>
		<Preview src="./FormInputMask.svelte">
			<FormInputMask />
		</Preview>
	</Doc>

	<Doc title="Validate on Blur">
		<Preview src="./FormInputValidateOnBlur.svelte">
			<FormInputValidateOnBlur />
		</Preview>
	</Doc>
	<Doc title="Validate on Input">
		<Preview src="./FormInputValidateOnInput.svelte">
			<FormInputValidateOnInput />
		</Preview>
	</Doc>

	<Doc title="Layout">
		<p slot="description">
			Use default <code>row</code> and <code>col</code> properties to change layout of the FormInputs
			inside forms.
		</p>
		<Preview src="./FormInputLayout.svelte">
			<FormInputLayout />
		</Preview>
	</Doc>

	<Doc title="Fieldset">
		<p slot="description">
			Use default <code>row</code> and <code>col</code> properties to change layout of the FormInputs
			inside Fieldset.
		</p>
		<Preview src="./FormInputFieldset.svelte">
			<FormInputFieldset />
		</Preview>
	</Doc>
</Page>
