<script>
	import Carousel from './Carousel.svelte'
	import CarouselItem from './CarouselItem.svelte'
	import './carousel.scss'

	let images = ['/images/mastercard.svg', '/images/paypal.svg', '/images/road.png']
</script>

<Carousel buttons indicators activeIndex={1}>
	{#each images as image, index}
		<CarouselItem>
			<img class="w-100" src={image} alt="test" />
		</CarouselItem>
	{/each}
</Carousel>
