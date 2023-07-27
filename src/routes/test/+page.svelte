<script>
	import Carousel from './Carousel.svelte'
	import CarouselItem from './CarouselItem.svelte'
	import './carousel.scss'

	let images = [
		'/images/1.jpeg',
		'/images/2.jpeg',
		'/images/3.jpeg',
		'/images/4.jpeg',
		'/images/5.jpeg',
	]
</script>

<Carousel buttons indicators activeIndex={1}>
	{#each images as image, index}
		<CarouselItem>
			<img class="w-100" src={image} alt="test" />
		</CarouselItem>
	{/each}
</Carousel>
