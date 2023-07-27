<script lang="ts">
	import { Button, El } from '$lib'
	import { classname } from '$lib/internal'
	import { onDestroy, onMount, setContext } from 'svelte'
	import { writable } from 'svelte/store'
	import type Splide from '@splidejs/splide'

	export let componentName: string = 'test-carousel'
	export let buttons: boolean = false
	export let indicators: boolean = false
	export let activeIndex: number = 0
	export let vertical: boolean = false
	export let autoplay: boolean = false

	let element: HTMLElement
	let instance: Splide

	const activeIndexStore = writable(activeIndex)

	let items: any[] = []

	function setIndex(newIndex: number) {
		console.log('setIndex', newIndex)
		instance.go(newIndex)
		$activeIndexStore = (items.length + newIndex) % items.length
	}

	function onNext() {
		instance.go('>')
	}

	function onPrev() {
		instance.go('<')
	}

	function register(newItem: any) {
		console.log('register', { newItem, items })
		items = [...items, newItem]
		return items.length
	}

	function unregister(index: number) {
		items = items.filter((_, i) => index !== i)
	}

	$: options = {
		slidesPerView: 1,
		autoplay,
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
	}

	async function bind(options: any) {
		console.log('element: ', element, instance)

		if (!element) return
		if (instance) return
		const Splide = await import('@splidejs/splide')

		instance = new Splide.default(element, {
			perPage: 1,
			// 	classes: {
			// 		arrows: 'splide__arrows your-class-arrows',
			// 		arrow : 'splide__arrow your-class-arrow',
			// 		prev  : classname(componentName + '-button-prev'),
			// 		next  : classname(componentName + '-button-next'),

			// // Add classes for pagination.
			// pagination: 'splide__pagination your-class-pagination', // container
			// page      : 'splide__pagination__page your-class-page', // each button
			// 	}
		}).mount()

		instance.go(activeIndex)
		// instance.slideTo(activeIndex)
		console.log(instance)
		instance.on('slideChange', (swiper) => {
			console.log('side change', swiper)
		})
	}

	function unbind() {
		instance.destroy()
	}

	$: if (options && element) {
		if (instance) {
			unbind()
		}
		console.log('calling bind', { options, element })
		bind(options)
	}

	setContext('CAROUSEL', { register, unregister, activeIndex: activeIndexStore })
</script>

{$activeIndexStore}
<El bind:element {componentName}>
	<El componentName="{componentName}-wrapper">
		<slot />
	</El>

	{#if buttons}
		<Button on:click={onPrev} componentName="test-carousel-button-prev">&lt;</Button>
		<Button on:click={onNext} componentName="test-carousel-button-next">&gt;</Button>
	{/if}
	<!-- <div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide">
				<div>item</div>
			</li>

			<li class="splide__slide">
				<div>item</div>
			</li>
		</ul>
	</div> -->

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
