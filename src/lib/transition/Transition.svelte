<script lang="ts">
	import El from '$lib/el/El.svelte'
	import { onMount, tick } from 'svelte'

	export let componentName: string = 'transition'

	export let show: boolean = false

	let enterFrom: boolean = false
	let enterTo: boolean = false
	let entering: boolean = false
	let leaveFrom: boolean = false
	let leaveTo: boolean = false
	let leaving: boolean = false

	let shouldShow: boolean = show
	let shouldHide: boolean = !show

	let element: HTMLElement

	let state = ''

	let callback: (() => void) | undefined = undefined

	async function toggle(newShow: boolean) {
		console.log('toggle accordion', newShow)

		if (newShow) {
			leaveTo = false
			leaveFrom = false
			console.log('state: ', state)
			setTimeout(() => {
				// only enable from if no transition is running
				shouldHide = false
				state = 'hide=false'

				if (!callback) {
					enterFrom = true // go to initial state
					state = 'enterFrom=true'
					console.log('state: ', state)
				}

				setTimeout(() => {
					leaving = false
					entering = true // enable transition
					state = 'entering=true'
					console.log('state: ', state)

					setTimeout(() => {
						state = 'enterTo=true;enterFrom=false'
						console.log('state: ', state)

						enterTo = true
						enterFrom = false

						callback = () => {
							state = 'enterTo=false;entering=false;show=true'
							console.log('state: ', state)

							enterTo = false
							entering = false
							shouldShow = true
						}
					}, 0)
				}, 0)
			}, 0)
		} else {
			enterTo = false
			enterFrom = false

			if (!callback) {
				leaveFrom = true
				state = 'leaveFrom=true'
				console.log('state: ', state)
			}

			await tick()
			leaving = true
			entering = false

			shouldShow = false
			state = 'leaving=true;show=false'
			console.log('state: ', state)

			await tick()

			state = 'leaveFrom=false;leaveTo=true'
			console.log('state: ', state)

			leaveFrom = false
			leaveTo = true

			callback = () => {
				state = 'leaving=false;leaveTo=false;hide=true'
				console.log('state: ', state)

				leaveTo = false
				leaving = false
				shouldHide = true
			}
		}
	}

	onMount(() => {
		function transitionEndHandler() {
			if (callback) {
				callback()
				callback = undefined
			}
		}

		if (element) {
			element.addEventListener('transitionend', transitionEndHandler)
		}

		return () => {
			if (element) {
				element.removeEventListener('transitionend', transitionEndHandler)
			}
		}
	})

	$: if (element) toggle(show)

	let cssProps: any
	$: cssProps = {
		enterFrom,
		enterTo,
		leaveFrom,
		leaveTo,
		entering,
		leaving,
		from: enterFrom || leaveTo,
		to: enterTo || leaveFrom,
		show: shouldShow,
		hide: shouldHide,
	}
</script>

<El tag="h3">{state}</El>
<El bind:element {componentName} {cssProps}>
	<slot />
</El>
