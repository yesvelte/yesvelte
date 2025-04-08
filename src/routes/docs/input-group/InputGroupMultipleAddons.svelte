<script lang="ts">
	import { FormInput } from 'yesvelte'
</script>

<FormInput>
	{#snippet startIconSnippet()}
		<span>$</span>
		<span>0.00</span>
	{/snippet}
</FormInput>

<FormInput>
	{#snippet endIconSnippet()}
		<span>$</span>
		<span>0.00</span>
	{/snippet}
</FormInput>
