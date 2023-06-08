<script lang="ts">
	import { FormInput } from 'yesvelte'
</script>

<FormInput>
	<input
		class="form-check-input mt-0"
		type="checkbox"
		value=""
		slot="start-icon"
		aria-label="Checkbox for following text input" />
</FormInput>

<FormInput>
	<input
		class="form-check-input mt-0"
		type="radio"
		value=""
		slot="start-icon"
		aria-label="Radio button for following text input" />
</FormInput>
