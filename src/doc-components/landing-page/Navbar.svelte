<script>
	import Logo from '$components/Logo.svelte'

	import {
		Button,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		El,
		Icon,
		Offcanvas,
		OffcanvasBody,
		OffcanvasHeader,
	} from '$lib'

	let {
		theme = $bindable('tabler'),
		dark = $bindable(false),
		redditLink,
		githubLink,
		replLink,
		discordLink,
	} = $props()

	let show = $state(false)
</script>

<El container="xl" mx="auto" position="absolute" start="0" end="0" top="0" p="3" class="p-md-4">
	<El id="navbar" d="flex" justifyContent="between" alignItems="center">
		<Logo height="34" dMd="none" />
		<Logo d="none" dMd="block" />

		<El vAlign="middle" d="block" dMd="none" onclick={() => (show = !show)}>
			<Icon size="xl" name="menu-2" />
		</El>
		<El d="none" dMd="flex" alignItems="center">
			<Button target="_blank" href={githubLink} p="3" link textColor="light">
				<Icon name="brand-github-filled" />Github</Button>
			<Button target="_blank" href={redditLink} p="3" link textColor="light">
				<Icon name="brand-reddit" />Reddit</Button>
			<Button target="_blank" href={discordLink} p="3" link textColor="light">
				<Icon name="brand-discord-filled" />Discord</Button>
			<Button target="_blank" href={replLink} p="3" link textColor="light">Try on Repl</Button>
			<Dropdown autoClose p="3" placement="bottom-end">
				{#snippet targetSnippet()}
					<Button color="light" outline>
						{#if theme === 'tabler'}
							Tabler
						{:else}
							DaisyUI
						{/if}
					</Button>
				{/snippet}
				<DropdownMenu>
					<DropdownItem onclick={() => (theme = 'tabler')}>Tabler</DropdownItem>
					<DropdownItem onclick={() => (theme = 'daisyui')}>DaisyUI</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Button outline color="light" onclick={() => (dark = !dark)}>
				{#if dark}
					<Icon name="sun" />
				{:else}
					<Icon name="moon" />
				{/if}
			</Button>
		</El>
	</El>
</El>

<Offcanvas bgColor="primary" textColor="light" dMd="none" bind:show w="75" backdrop>
	<OffcanvasHeader py="3">
		<Logo height="34" />
	</OffcanvasHeader>
	<OffcanvasBody>
		<Button target="_blank" href={githubLink} p="3" link textColor="light">
			<Icon name="brand-github-filled" />Github</Button>
		<Button target="_blank" href={redditLink} p="3" link textColor="light">
			<Icon name="brand-reddit" />Reddit</Button>
		<Button target="_blank" href={discordLink} p="3" link textColor="light">
			<Icon name="brand-discord-filled" />Discord</Button>
		<Button target="_blank" href={replLink} p="3" link textColor="light">Try on Repl</Button>
		<El class="w-100" d="flex" alignItems="center">
			<Dropdown p="3" class="flex-1">
				{#snippet targetSnippet()}
					<Button w="100" color="light" outline>
						{#if theme === 'tabler'}
							Tabler
						{:else}
							DaisyUI
						{/if}
					</Button>
				{/snippet}
				<DropdownMenu>
					<DropdownItem onclick={() => (theme = 'tabler')}>Tabler</DropdownItem>
					<DropdownItem onclick={() => (theme = 'daisyui')}>DaisyUI</DropdownItem>
				</DropdownMenu>
			</Dropdown>
			<Button outline color="light" onclick={() => (dark = !dark)}>
				{#if dark}
					<Icon name="sun" />
				{:else}
					<Icon name="moon" />
				{/if}
			</Button>
		</El>
	</OffcanvasBody>
</Offcanvas>
