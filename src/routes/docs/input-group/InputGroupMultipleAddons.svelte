<script lang="ts">
	import { FormInput } from 'yesvelte'
</script>

<FormInput>
	<svelte:fragment slot="start-icon">
		<span>$</span>
		<span>0.00</span>
	</svelte:fragment>
</FormInput>

<FormInput>
	<svelte:fragment slot="end-icon">
		<span>$</span>
		<span>0.00</span>
	</svelte:fragment>
</FormInput>
