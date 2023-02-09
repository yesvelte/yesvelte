<script lang="ts">
	import { onMount } from 'svelte'

	import { afterNavigate } from '$app/navigation'

	let sections: any[] = []

	const init = () => {
		if (typeof window !== 'undefined') {
			const nodes = document.querySelectorAll('[data-href]') as NodeListOf<HTMLHeadingElement>
			sections = Array.from(nodes).map((node: HTMLHeadingElement) => {
				return {
					name: node.innerText,
					href: node.getAttribute('data-href'),
				}
			})
		}
	}

	onMount(() => {
		init()
	})

	afterNavigate(() => {
		init()
	})
</script>

{#if sections && sections.length > 0}
	<div class="mt-3 mb-5 my-lg-0 ps-xl-2 mb-lg-5 text-muted sticky-top" id="toc">
		<strong class="d-none d-md-block h4 my-2">On this page</strong>
		<hr class="d-none d-md-block my-2" />
		<div class="flex-column">
			{#each sections as section}
				<div class="mb-2">
					<a href="#{section.href}" class="text-muted">{section.name}</a>
				</div>
			{/each}
		</div>
	</div>
{/if}
