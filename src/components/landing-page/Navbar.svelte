<script>
	import Logo from "$components/Logo.svelte"


	import { Button, Dropdown, DropdownItem, DropdownMenu, El, Icon } from "$lib"

    export let redditLink = "";
    export let githubLink = "";
    export let replLink = "";
    export let discordLink = "";

</script>
<El container="xl" mx="auto" position="absolute" start="0" end="0" top="0" p="3" class="p-md-4">
    <El id="navbar" d="flex" justifyContent="between" alignItems="center">
        <Logo height="34" dMd="none" />
        <Logo d="none" dMd="block" />

        <El vAlign="middle" d="block" dMd="none">
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
