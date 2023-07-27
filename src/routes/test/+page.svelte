<script lang="ts">
	import 'yesvelte/css/tabler.min.css'

	import DataTable from './DataTable.svelte'
	import Status from '$lib/status/Status.svelte'
	import { El } from '$lib'

	let value: any[] = [
		{
			id: 1,
			name: 'User1',
			email: 'user1@gmail.com',
			status: 'active',
		},
	]

	let columns = [
		{
			text: '#',
			key: 'id',
			width: 0,
			sortable: true,
		},
		{
			text: 'Name',
			key: 'name',
			width: '100%',
			sortable: true,
		},
		{
			text: 'Email',
			key: 'email',
			width: '100%',
		},
		{
			text: 'Status',
			key: 'status',
			width: 0,
		},
	]

	let items = [
		{
			id: 1,
			name: 'User1',
			email: 'user1@gmail.com',
			status: 'active',
		},
		{
			id: 2,
			name: 'User2',
			email: 'user2@gmail.com',
			status: 'disabled',
		},
		{
			id: 3,
			name: 'User3',
			email: 'user3@gmail.com',
			status: 'active',
		},
		{
			id: 4,
			name: 'User4',
			email: 'user4@gmail.com',
			status: 'active',
		},
	]
</script>

<DataTable {items} {columns} selectable bind:value>
	<svelte:fragment slot="header">
		<El border p="2">Header</El>
	</svelte:fragment>
	<svelte:fragment slot="cell-head" let:column>
		{#if column.key === 'status'}
			Status (active or disabled)
		{:else}
			{column.text}
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="cell" let:column let:item let:value>
		{#if column.key === 'status'}
			<Status color={value === 'active' ? 'success' : 'danger'}>{item.status}</Status>
		{:else}
			{value}
		{/if}
	</svelte:fragment>
</DataTable>
