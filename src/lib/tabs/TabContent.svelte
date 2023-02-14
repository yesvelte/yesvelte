<script lang="ts">
	import { El } from '../el'
	import type { TabContentProps } from './Tab.types'

	type $$Props = TabContentProps

	export let componentName: $$Props['componentName'] = 'tab-content'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
