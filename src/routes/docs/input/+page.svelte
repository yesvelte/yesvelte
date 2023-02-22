<script>
	import { Page, Doc, Preview } from '$components'

	import InputDefault from './InputDefault.svelte'
	import InputDisabled from './InputDisabled.svelte'
	import InputPlaceholder from './InputPlaceholder.svelte'
	import InputReadOnly from './InputReadOnly.svelte'
	import InputSizes from './InputSizes.svelte'
	import InputTypes from './InputTypes.svelte'
	import InputStates from './InputStates.svelte'
	import InputBorderShapes from './InputBorderShapes.svelte'
	import InputMasks from './InputMasks.svelte'
</script>

<Page title="Input">
	<Doc title="Default">
		<p slot="description">
			Input components are used for collecting user provided information. They can be used for text,
			numbers, passwords, emails, and more.
		</p>
		<Preview src="./InputDefault.svelte">
			<div class="custom-class"><InputDefault /></div>
		</Preview>
	</Doc>

	<Doc title="Placeholder">
		<p slot="description">
			You can add a placeholder to an input by setting the placeholder property. The placeholder
			text will be displayed until the user enters a value.
		</p>
		<Preview src="./InputPlaceholder.svelte">
			<div class="custom-class"><InputPlaceholder /></div>
		</Preview>
	</Doc>

	<Doc title="Types">
		<p slot="description">
			Inputs can have different types. The default type is <code>text</code>. You can change the
			type by setting the type property to <code>email</code>, <code>number</code>,
			<code>password</code>,
			<code>search</code>, <code>tel</code>, or
			<code>url</code>.
		</p>
		<Preview src="./InputTypes.svelte">
			<div class="custom-class"><InputTypes /></div>
		</Preview>
	</Doc>

	<Doc title="Sizing">
		<p slot="description">
			You can change the size of an input by setting the size property to <code>sm</code>,
			<code>md</code>, or
			<code>lg</code>.
		</p>
		<Preview src="./InputSizes.svelte">
			<div class="custom-class"><InputSizes /></div>
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<p slot="description">
			Set the disabled boolean property on an input to give it a grayed out appearance, remove
			pointer events, and prevent focusing.
		</p>
		<Preview src="./InputDisabled.svelte">
			<div class="custom-class"><InputDisabled /></div>
		</Preview>
	</Doc>

	<Doc title="Readonly">
		<p slot="description">
			Set the readonly boolean property on an input to prevent modification of the input’s value.
			readonly inputs can still be focused and selected, while disabled inputs cannot.
		</p>
		<Preview src="./InputReadOnly.svelte">
			<div class="custom-class"><InputReadOnly /></div>
		</Preview>
	</Doc>

	<Doc title="States">
		<p slot="description">
			You can set the <code>valid</code> or <code>invalid</code> boolean properties to apply the valid
			or invalid state to an input.
		</p>
		<Preview src="./InputStates.svelte">
			<div class="custom-class"><InputStates /></div>
		</Preview>
	</Doc>

	<Doc title="Borders">
		<p slot="description">
			Set <code>borderRounded</code> or <code>borderFlush</code> boolean properties to apply rounded
			borders or remove the borders.
		</p>
		<Preview src="./InputBorderShapes.svelte">
			<div class="custom-class"><InputBorderShapes /></div>
		</Preview>
	</Doc>

	<Doc title="Masks">
		<p slot="description">
			You can use the <code>mask</code> property to apply a mask to an input. You can also use the
			<code>maskOptions</code>
			property to configure the mask. For more information about the mask options, see the
			<a href="https://github.com/RobinHerbots/Inputmask#readme" target="_blank" rel="noreferrer">
				Inputmask
			</a> documentation.
		</p>
		<Preview src="./InputMasks.svelte">
			<div class="custom-class"><InputMasks /></div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.u-input-wrapper) {
		margin: 0.25rem 0;
	}
</style>
