<script>
	import { page } from '$app/stores'

	import { Button, El, Icon } from '$lib'
</script>

<El style="z-index: 100;" position="fixed" bottom="0" end="0" p="5">
	{#key $page}
		<Button
			size="lg"
			color="github"
			target="_blank"
			href="https://github.com/yesvelte/yesvelte/blob/dev/src/routes{$page.url
				.pathname}/%2Bpage.svelte">
			<Icon name="code" />
		</Button>
	{/key}
</El>
