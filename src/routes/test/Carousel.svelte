<script lang="ts">
	import { Button, El } from '$lib'
	import { classname } from '$lib/internal'
	import { onDestroy, onMount, setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import type Swiper from 'swiper'

	export let componentName: string = 'test-carousel'
	export let buttons: boolean = false
	export let indicators: boolean = false
	export let activeIndex: number = 0
	export let vertical: boolean = false

	let element: HTMLElement
	let instance: Swiper

	const activeIndexStore = writable(activeIndex)

	let items: any[] = []

	function setIndex(newIndex: number) {
		instance.slideTo(newIndex)
		$activeIndexStore = (items.length + newIndex) % items.length
	}

	function onNext() {
		instance.slideNext()
	}

	function onPrev() {
		instance.slidePrev()
	}

	function register(newItem: any) {
		items = [...items, newItem]
		return items.length
	}

	function unregister(index: number) {
		items = items.filter((_, i) => index !== i)
	}

	async function bind() {
		const Swiper = await import('swiper')

		console.log(Swiper)
		instance = new Swiper.default(element, {
			slidesPerView: 1,
			autoplay: true,
			modules: [Swiper.Pagination, Swiper.Navigation],
			effect: 'slide',
			loop: true,
			direction: vertical ? 'vertical' : 'horizontal',
			speed: 400,
			initialSlide: activeIndex,
			slideClass: classname(componentName + '-item'),
			wrapperClass: classname(componentName + '-wrapper'),
			slideActiveClass: classname(componentName + '-item-active'),
			slideNextClass: classname(componentName + '-button-next'),
			slidePrevClass: classname(componentName + '-button-prev'),
			slideVisibleClass: classname(componentName + '-item-active'),
			pagination: {
				bulletClass: classname(componentName + '-indicator'),
				bulletActiveClass: classname(componentName + '-indicator-active'),
			},
		})

		instance.on('slideChange', (swiper) => {
			console.log('side change', swiper)
		})
	}

	function unbind() {
		if (instance) {
			console.log(instance)
			instance.destroy()
		}
	}
	onMount(async () => {
		bind()
	})

	onDestroy(() => {
		unbind()
	})
	setContext('CAROUSEL', { register, unregister, activeIndex: activeIndexStore })
</script>

<El bind:element {componentName}>
	<El componentName="{componentName}-wrapper">
		<slot />
	</El>

	{#if buttons}
		<Button on:click={onPrev} componentName="test-carousel-button-prev">&lt;</Button>
		<Button on:click={onNext} componentName="test-carousel-button-next">&gt;</Button>
	{/if}

	{#if indicators}
		<El tag="ol" componentName="test-carousel-indicators">
			{#each items as item, index}
				<Button
					tag="li"
					componentName="test-carousel-indicator"
					cssProps={{ active: index === $activeIndexStore }}
					on:click={() => setIndex(index)} />
			{/each}
		</El>
	{/if}
</El>
