<script lang="ts">
	import { Input } from 'yesvelte'
</script>

<Input>
	<span slot="start">
		<input
			class="form-check-input mt-0"
			type="checkbox"
			value=""
			aria-label="Checkbox for following text input" />
	</span>
</Input>

<Input>
	<span slot="start">
		<input
			class="form-check-input mt-0"
			type="radio"
			value=""
			aria-label="Radio button for following text input" />
	</span>
</Input>
