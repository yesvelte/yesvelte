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

	export let redditLink = ''
	export let githubLink = ''
	export let replLink = ''
	export let discordLink = ''

	let show = false
</script>

<El container="xl" mx="auto" position="absolute" start="0" end="0" top="0" p="3" class="p-md-4">
	<El id="navbar" d="flex" justifyContent="between" alignItems="center">
		<Logo height="34" dMd="none" />
		<Logo d="none" dMd="block" />

		<El vAlign="middle" d="block" dMd="none" on:click={() => (show = !show)}>
			<Icon size="xl" name="menu-2" />
		</El>
		<El d="none" dMd="flex" alignItems="center">
			<Button href={githubLink} p="3" link textColor="light">
				<Icon name="brand-github-filled" />Github</Button>
			<Button href={redditLink} p="3" link textColor="light">
				<Icon name="brand-reddit" />Reddit</Button>
			<Button href={discordLink} p="3" link textColor="light">
				<Icon name="brand-discord-filled" />Discord</Button>
			<Button href={replLink} p="3" link textColor="light">Try on Repl</Button>
			<Dropdown p="3">
				<Button slot="target" color="light" outline>Tabler</Button>
				<DropdownMenu>
					<DropdownItem>Tabler</DropdownItem>
					<DropdownItem>DaisyUI</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</El>
	</El>
</El>

<Offcanvas bgColor="primary" textColor="light" dMd="none" bind:show w="75" backdrop>
	<OffcanvasHeader py="3">
		<Logo height="34" />
	</OffcanvasHeader>
	<OffcanvasBody>
		<Button href={githubLink} p="3" link textColor="light">
			<Icon name="brand-github-filled" />Github</Button>
		<Button href={redditLink} p="3" link textColor="light">
			<Icon name="brand-reddit" />Reddit</Button>
		<Button href={discordLink} p="3" link textColor="light">
			<Icon name="brand-discord-filled" />Discord</Button>
		<Button href={replLink} p="3" link textColor="light">Try on Repl</Button>
		<Dropdown p="3" w="100">
			<Button w="100" slot="target" color="light" outline>Tabler</Button>
			<DropdownMenu>
				<DropdownItem>Tabler</DropdownItem>
				<DropdownItem>DaisyUI</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	</OffcanvasBody>
</Offcanvas>
