<script lang="ts">
	import { El } from '../el'
	import type { PaginationProps } from './Pagination.types'

	type $$Props = PaginationProps

	export let componentName: $$Props['componentName'] = 'pagination'
</script>

<El {...$$restProps} {componentName}>
	<slot />
</El>
