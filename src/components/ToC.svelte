<script lang="ts">
	import { onMount } from 'svelte'

	import { afterNavigate } from '$app/navigation'
	import { El } from 'yesvelte'

	export let sections: any[] = []

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
	<El mb="5" textMuted top="0" pt="3" id="toc">
		<El tag="strong" style="width: 160px" d="none" dMd="block" my="2">
			<h4>On this page</h4>
		</El>
		<El tag="hr" d="none" dMd="block" my="2" />
		{#each sections as section}
			<El mb="2" mt="1" me="3">
				<El tag="a" href="#{section.href}" textMuted>{section.name}</El>
			</El>
		{/each}
	</El>
{/if}
