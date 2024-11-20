<script lang="ts">
	import { El, type ElProps } from '../el'

	type $$Props = ElProps

	export let tag: $$Props['tag'] = 'tfoot'
	export let componentName: $$Props['componentName'] = 'table-foot'
</script>

<El {...$$restProps} {componentName} {tag}>
	<slot />
</El>
