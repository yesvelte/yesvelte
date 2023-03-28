<script lang="ts">
	import { Popup } from '$lib'
	import { getContext, setContext } from 'svelte'

	export let type: 'nav' | 'dropdown' | undefined = undefined
	export let active = false

	const menuType = getContext('MENU:TYPE')

	if (type) setContext('MENU:TYPE', type)
</script>

{#if menuType || type === 'dropdown'}
	<Popup trigger="click" placement="right-start" componentName="menu" class="dropdown-menu">
		<slot />
	</Popup>
{:else if type === 'nav'}
	<div class="navbar">
		<ul class="navbar-nav">
			<slot />
		</ul>
	</div>
{:else}
	<!-- <ul class="dropdown-menu">
		<slot />
	</ul> -->
	<!-- get type from context -->
{/if}

<!-- class:show={open} -->

<!-- {#if dropdown}
	
{:else if isNav}
	<ul class:navbar-nav={true} class:show={open}>
		<slot />
	</ul>
{:else}
	<div class="navbar">
		<ul class:navbar-nav={true} class:show={open}>
			<slot />
		</ul>
	</div>
{/if} -->
<style>
	:global(.y-popup-show) {
		display: block !important;
	}
	/* .menu {
		display: none;
		position: relative;
		flex-direction: column;
	}

	.open {
		display: flex;
	}

	.dropdown {
		position: absolute;
		width: max-content;
		border: 1px solid #00000020;
		top: 0;
		left: 100%;
	} */
</style>
