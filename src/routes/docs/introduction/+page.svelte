<script>
	import Doc from '$components/Doc.svelte'
	import Page from '$components/Page.svelte'
	import { El } from '$lib'
</script>

<Page title="Introduction">
	<p slot="description">
		YeSvelte is a powerful and flexible Svelte UI component library, designed to help developers
		build enterprise-grade web applications quickly and easily. With a focus on rapid application
		development and framework independence, YeSvelte is the perfect complement to any CSS framework.
	</p>

	<Doc title="Features">
		<El tag="ul">
			<El tag="li" mb="2">
				<strong>Rapid application development:</strong> With YeSvelte, you can easily and quickly build
				enterprise-grade web applications, without worrying about the specifics of a CSS framework.
			</El>
			<El tag="li" mb="2">
				<strong>Framework independence:</strong> YeSvelte's components are built with basic HTML and
				CSS, without any framework-specific classes or styles, so you can use them with any CSS framework
				of your choice.
			</El>
			<El tag="li" mb="2">
				<strong>Easy to use:</strong>
				YeSvelte's components are easy to use and intuitive, so you don't have to be an expert in Svelte
				or CSS frameworks to get started.
			</El>
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

	<!--  -->
</Page>
