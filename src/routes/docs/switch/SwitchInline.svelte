<script lang="ts">
	import { Button, El, Label, Switch } from 'yesvelte'

	let page1: any = {}
	let page2: any = {}
</script>

<El tag="h2">Edit Permissions:</El>
<El container>
	<El row>
		<El col="2">
			<Label>Page 1:</Label>
		</El>
		<El col="10">
			<Switch inline bind:checked={page1.create}>Create</Switch>
			<Switch inline bind:checked={page1.read}>Read</Switch>
			<Switch inline bind:checked={page1.update}>Update</Switch>
			<Switch inline bind:checked={page1.delete}>Delete</Switch>
		</El>
	</El>
	<El row>
		<El col="2">
			<Label>Page 2:</Label>
		</El>
		<El col="10">
			<Switch inline bind:checked={page2.create}>Create</Switch>
			<Switch inline bind:checked={page2.read}>Read</Switch>
			<Switch inline bind:checked={page2.update}>Update</Switch>
			<Switch inline bind:checked={page2.delete}>Delete</Switch>
		</El>
	</El>
	<El row mt="3">
		<El offset="9" col="3">
			<Button w="100" color="primary">Save</Button>
		</El>
	</El>
</El>
