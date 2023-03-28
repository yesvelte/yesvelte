<script>
	import { getContext } from 'svelte'

	export let active = false
	export let title = ''
	export let icon = ''
	export let divider = false
	export let disabled = false

	const menuType = getContext('MENU:TYPE')
	// const isNav = getContext('NAV')
</script>

<li class:nav-item={menuType === 'nav'} class:dropdown={$$slots['menu']}>
	{#if divider}
		<hr class="dropdown-divider" />
	{:else}
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			class:dropdown-item={menuType === 'dropdown'}
			class:nav-link={menuType === 'nav'}
			class:active
			class:disabled
			class:dropdown-toggle={$$slots['menu']}>
			{#if icon || $$slots['start']}
				<span class="nav-link-icon">
					<slot name="start">{icon}</slot>
				</span>
			{/if}
			{#if title || $$slots['default']}
				<span class="nav-link-title">
					<slot>{title}</slot>
				</span>
			{/if}
			<slot name="end" />
		</a>
	{/if}

	<slot name="menu" />
</li>

<style>
	/* 	.menu-item {
          position: relative;
      }
      
      .menu-item-content {
          padding: 8px 1rem;
          display: flex;
          gap: 8px;
          border: 1px solid transparent;
      }
      .menu-item-title {
          flex: 1;
      }
      
      
      .menu-item:not(.active) .menu-item-menu {
          display: none
      }
      
      .menu-item > :global(.menu):not(:global(.dropdown)) {
          padding-left: 1rem;
      }
  
      .menu-item-content:hover {
          border: 1px solid #ababab55;
          background-color: #00000005;
      }
      .active > .menu-item-content {
          color: #4060f0;
      }
      
      .active {
       background-color: #00000004;
      } */
</style>
