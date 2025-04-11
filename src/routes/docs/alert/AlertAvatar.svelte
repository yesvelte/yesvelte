<script lang="ts">
	import { Alert, Avatar } from 'yesvelte'
</script>

<Alert color="success">
	{#snippet startSnippet()}
		<Avatar>
			<img src="/images/avatars/000m.jpg" alt="" />
		</Avatar>
	{/snippet}
	{#snippet children()}
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
		consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
	{/snippet}
</Alert>
<Alert color="info">
	{#snippet startSnippet()}
		<Avatar>JL</Avatar>
	{/snippet}
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing
	elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</Alert>
<Alert color="warning">
	{#snippet startSnippet()}
		<Avatar>
			<img src="/images/avatars/000m.jpg" alt="" />
		</Avatar>
	{/snippet}

	{#snippet children()}
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
		consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
	{/snippet}
</Alert>
<Alert color="danger">
	{#snippet startSnippet()}
		<Avatar>
			<img src="/images/avatars/000m.jpg" alt="" />
		</Avatar>
	{/snippet}
	{#snippet children()}
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
		consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
	{/snippet}
</Alert>
