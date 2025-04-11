<script lang="ts">
	import { FormInput } from 'yesvelte'
</script>

<FormInput>
	{#snippet startIconSnippet()}
		<input
			class="form-check-input mt-0"
			type="checkbox"
			value=""
			aria-label="Checkbox for following text input" />
	{/snippet}
</FormInput>

<FormInput>
	{#snippet startIconSnippet()}
		<input
			class="form-check-input mt-0"
			type="radio"
			value=""
			aria-label="Radio button for following text input" />
	{/snippet}
</FormInput>
