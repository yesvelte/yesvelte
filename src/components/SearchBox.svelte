<script>
	import { El, Icon, Input, Modal, ModalBody, ModalHeader } from 'yesvelte'
	import { navigations } from '../routes/docs/navigations'

	export let open = false

	let query = ''

	function filter(query) {
		if (query.length < 2) return []

		let result1 = []
		let result2 = []

		for (let navigation of navigations) {
			if (navigation.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
				result1.push({
					title: navigation.title,
					route: navigation.route,
					description: navigation.description,
				})
			}

			if (navigation.children) {
				for (let child of navigation.children) {
					if (child.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
						result1.push({
							title: child.title,
							route: navigation.route + child.route,
							description: child.description,
						})
					}
				}
			}

			if (navigation.description?.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
				if (result1.findIndex((item) => item.title === navigation.title) === -1) {
					result2.push({
						title: navigation.title,
						route: navigation.route,
						description: navigation.description,
					})
				}
			}
			if (navigation.children) {
				for (let child of navigation.children) {
					if (child.description?.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
						if (result1.findIndex((item) => item.title === child.title) === -1) {
							result2.push({
								title: child.title,
								route: navigation.route + child.route,
								description: child.description,
							})
						}
					}
				}
			}
		}

		return [...result1, ...result2]
	}
</script>

<Modal dismissible autoClose bind:show={open}>
	<ModalHeader p="0">
		<Input
			size="lg"
			p="3"
			borderFlush
			placeholder="Search title or description..."
			bind:value={query}>
			<Icon ms="3" name="search" slot="start" />
		</Input>
	</ModalHeader>
	<ModalBody>
		{#each filter(query).slice(0, 5) as item}
			<El
				tag="a"
				color="dark"
				d="flex"
				mb="1"
				style="flex-direction: column"
				href={item.route}
				p="2"
				border
				borderRoundSize="2">
				<El tag="strong">{item.title}</El>
				{#if item.description}
					<El textMuted style="word-wrap: no-wrap;">{item.description}</El>
				{/if}
			</El>
		{/each}
	</ModalBody>
</Modal>
