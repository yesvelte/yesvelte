<script>
	import { Page, Doc, Preview } from '$components'
	import SidebarNested from './SidebarNested.svelte'
	import SidebarHref from './SidebarHref.svelte'
	import SidebarSimple from './SidebarSimple.svelte'
	import SidebarSlots from './SidebarSlots.svelte'
	import SidebarIcon from './SidebarIcon.svelte'
	import SidebarActive from './SidebarActive.svelte'
	import SidebarDisabled from './SidebarDisabled.svelte'
</script>

<Page title="Sidebar">
	<Doc title="Simple">
		<Preview src="./SidebarSimple.svelte">
			<div class="custom-class">
				<SidebarSimple />
			</div>
		</Preview>
	</Doc>

	<Doc title="Href">
		<Preview src="./SidebarHref.svelte">
			<div class="custom-class">
				<SidebarHref />
			</div>
		</Preview>
	</Doc>

	<Doc title="Icon">
		<Preview src="./SidebarIcon.svelte">
			<div class="custom-class">
				<SidebarIcon />
			</div>
		</Preview>
	</Doc>

	<Doc title="Slots">
		<Preview src="./SidebarSlots.svelte">
			<div class="custom-class">
				<SidebarSlots />
			</div>
		</Preview>
	</Doc>

	<Doc title="Active">
		<Preview src="./SidebarActive.svelte">
			<div class="custom-class">
				<SidebarActive />
			</div>
		</Preview>
	</Doc>

	<Doc title="Disabled">
		<Preview src="./SidebarDisabled.svelte">
			<div class="custom-class">
				<SidebarDisabled />
			</div>
		</Preview>
	</Doc>

	<Doc title="Nested">
		<Preview src="./SidebarNested.svelte">
			<div class="custom-class">
				<SidebarNested />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class {
		height: 400px;
	}
	.custom-class :global(.y-sidebar-wrapper) {
		position: absolute;
	}
</style>
