<script>
	import Doc from '$components/Doc.svelte'
	import Page from '$components/Page.svelte'
	import { Card, CardBody, El, CardTitle } from '$lib'
	import Icon from '$lib/icon/Icon.svelte'
	import { navigations } from '../navigations'
</script>

<Page title="Introduction">
	<p slot="description">
		Welcome to the YeSvelte documentation website! YeSvelte is a powerful and flexible Svelte UI
		component library, designed to help developers build enterprise-grade web applications quickly
		and easily. With a focus on rapid application development and framework independence, YeSvelte
		is the perfect complement to any CSS framework.
	</p>
	<p>
		In this documentation, you will find everything you need to know to get started with YeSvelte,
		including installation instructions, usage examples, and detailed information about each
		component in the library. Whether you're a seasoned developer or just getting started with
		Svelte, you'll find the information you need to start building powerful and elegant web
		applications with YeSvelte.
	</p>

	<Doc title="Features">
		<El d="flex" gap="3" style="flex-wrap: wrap;">
			<Card style="flex:1;min-width: 400px;">
				<CardBody>
					<CardTitle class="y-docs-card-title">Rapid application development:</CardTitle>
					With YeSvelte, you can easily and quickly build enterprise-grade web applications, without
					worrying about the specifics of a CSS framework.
				</CardBody>
			</Card>
			<Card style="flex:1;min-width: 400px;">
				<CardBody>
					<CardTitle class="y-docs-card-title">CSS Framework independence:</CardTitle>
					YeSvelte's components are built with basic HTML and CSS, without any framework-specific classes
					or styles, so you can use them with any CSS framework of your choice.
				</CardBody>
			</Card>
			<Card style="flex:1;min-width: 400px;">
				<CardBody>
					<CardTitle class="y-docs-card-title">Powerful and flexible:</CardTitle>
					YeSvelte's components are powerful and flexible, and you can easily customize them to fit the
					needs of your project.
				</CardBody>
			</Card>
			<Card style="flex:1;min-width: 400px;">
				<CardBody>
					<CardTitle class="y-docs-card-title">Easy to use:</CardTitle>
					YeSvelte's components are easy to use and intuitive, so you don't have to be an expert in Svelte
					or CSS frameworks to get started.
				</CardBody></Card>
		</El>
	</Doc>

	<Doc title="El component">
		<p slot="description">
			The <code>El</code> component is the foundational building block of the YeSvelte component
			library. It serves as a versatile element that other components are based on, providing a wide
			range of utility props to customize its appearance.

			<code>El</code> supports common scenarios and make it easier to customize components without
			writing css code.

			<br />
			<br />
			With the <code>El</code> component's numerous features, including grid system support, color customization,
			border styling, and spacing control, you have the flexibility to craft visually appealing and highly
			functional components that suit your specific design needs. you can learn more about El features
			in "Core Features" section of our documentation.
		</p>
		<El mt="4">
			<El row>
				<El d="flex" gap="3" style="flex-wrap: wrap">
					{#each navigations as navigation}
						{#if navigation.title === 'Core Features'}
							{#if navigation.children}
								{#each navigation.children as menu}
									{@const [pack, icon] = (menu.icon ?? ':').split(':')}
									<El class="y-item" style="flex: 1; min-width: 250px">
										<El tag="a" p="3" d="flex" href={navigation.route + menu.route}>
											<El d="flex" gap="3" tag="h3" mb="0">
												<Icon size="xl" name={icon} {pack} />

												<span>{menu.title}</span>
											</El>
										</El>
									</El>
								{/each}
							{/if}
						{/if}
					{/each}
				</El>
			</El>
		</El>
	</Doc>

	<Doc title="Theme Support">
		<p slot="description">
			YeSvelte components are independent from CSS Frameworks and works with any css framework
			including bootstrap, tailwind and pure css styles. you can learn more about Theming in
			<a href="/docs/theming">Theming</a>
			section.
			<!--  -->
		</p>
	</Doc>

	<Doc title="Components">
		<p slot="description">Here is list of All YeSvelte components:</p>

		<El mt="4">
			<El row>
				<El d="flex" gap="3" style="flex-wrap: wrap">
					{#each navigations as navigation}
						{#if navigation.title === 'Components' || navigation.title === 'Form Components'}
							{#if navigation.children}
								{#each navigation.children as menu}
									{@const [pack, icon] = (menu.icon ?? ':').split(':')}
									<El class="y-item" style="flex: 1; min-width: 250px">
										<El tag="a" p="3" d="flex" href={navigation.route + menu.route}>
											<El d="flex" gap="3" tag="h3" mb="0">
												<Icon size="xl" name={icon} {pack} />

												<span>{menu.title}</span>
											</El>
										</El>
									</El>
								{/each}
							{/if}
						{/if}
					{/each}
				</El>
			</El>
		</El>
	</Doc>

	<!--  -->
</Page>

<style>
	:global(.y-item) {
		border: 1px solid #9994;
		background-color: white;
	}
	:global(.y-item) :global(a) {
		color: inherit;
	}

	:global([data-bs-theme='dark']) :global(.y-item) {
		border-color: #9992;
		background-color: #9991;
	}
	:global([data-theme='dark']) :global(.y-item) {
		background-color: #9991;
	}

	:global(.y-item):hover {
		background-color: #9991;
	}
</style>
