10:55
<!-- <script lang="ts">
	import { Checkbox, El, Icon, Table, TableBody, TableCell, TableHead, TableRow } from '$lib'
	import { classname } from '$lib/internal'

	export let sort: string | undefined = undefined
	export let order: 'asc' | 'desc' = 'asc'

	export let items: any[] = []
	export let columns: any[] = []

	export let selectable: boolean = false

	export let value: any[] = [] // selected items

	// select
	let isSelected: Record<number, boolean> = items.reduce((prev, item, index) => {
		if (value.find((x) => JSON.stringify(x) === JSON.stringify(item))) {
			return { ...prev, [index]: true }
		} else {
			return { ...prev, [index]: false }
		}
	}, {})

	$: isSelectAll = items.every((item, index) => isSelected[index] === true)
	$: isIndeterminate = !isSelectAll && items.some((item, index) => isSelected[index] === true)
	$: value = items.filter((item, index) => isSelected[index])

	function onChangeSelectAll() {
		console.log('change select all', isSelectAll, isIndeterminate)
		if (isSelectAll) {
			items.map((item, index) => {
				console.log('set to false')
				isSelected[index] = false
			})
		} else {
			items.map((item, index) => {
				console.log('set to true')
				isSelected[index] = true
			})
		}
		//
	}

	// sort
	function onSort(key: string) {
		if (sort === key) {
			order = order === 'asc' ? 'desc' : 'asc'
		} else {
			sort = key
			order = 'asc'
		}
	}

	$: console.log(isIndeterminate)
	$: console.log(isSelectAll)
	$: console.log({ isSelected, isSelectAll, isIndeterminate })
</script>

<div>H1</div>

<slot name="header">Table header</slot>
{isSelectAll}
<Table>
	<TableHead>
		<TableRow>
			{#if selectable}
				<TableCell style="width: 0">
					<!-- <input
						type="checkbox"
						class={classname('checkbox-input')}
						indeterminate={isIndeterminate}
						checked={isSelectAll}
						on:change={onChangeSelectAll} /> -->
					<El on:click={onChangeSelectAll}>{isSelectAll}</El>
				</TableCell>
			{/if}
			{#each columns as column}
				<TableCell
					on:click={() => onSort(column.key)}
					style="cursor: pointer; width: {column.width}">
					<slot name="cell-head" {column}>{column.text}</slot>
					{#if column.sortable}
						{#if sort === column.key}
							{#if order === 'desc'}
								<Icon ms="2" color="primary" pack="ep" name="caret-top" />
							{:else if order === 'asc'}
								<Icon ms="2" color="primary" pack="ep" name="caret-bottom" />
							{/if}
						{:else}
							<Icon ms="2" textMuted pack="ep" name="d-caret" />
						{/if}
					{/if}
				</TableCell>
			{/each}
		</TableRow>
	</TableHead>

	<TableBody>
		{#each items as item, index}
			<TableRow on:click={() => (isSelected[index] = !isSelected[index])}>
				{#if selectable}
					<TableCell style="width: 0">
						<input
							type="checkbox"
							class={classname('checkbox-input')}
							bind:checked={isSelected[index]} />
					</TableCell>
				{/if}
				{#each columns as column}
					{@const value = item[column.key]}
					<TableCell><slot name="cell" {value} {column} {item}>{value}</slot></TableCell>
				{/each}
			</TableRow>
		{/each}
	</TableBody>
</Table> -->
