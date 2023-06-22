<script>
	import { Doc } from '$components'
	import Page from '$components/Page.svelte'
	import Prism from '$components/Prism.svelte'
	import { Alert, El } from '$lib'
</script>

<Page title="Theming">
	<p slot="description">
		The theming feature in YeSvelte allows you to customize the appearance of the components to
		match your project's design system or visual preferences. By following our standard class naming
		conventions, you can easily create your own themes using CSS.
		<!--  -->
	</p>

	<Doc title="CSS Naming Convention">
		<p slot="description">
			YeSvelte follows a standard naming convention for CSS class names, making it simple to apply
			your custom styles. The class names are designed to target specific elements and states within
			the components.
		</p>
		<p>
			for example assume <code>Button</code> component, for default <code>.y-button</code> class is
			applied, and you can customize style of all buttons, by overriding <code>.y-button</code>
			class.

			<El border my="3">
				<Prism language="css" source={`.y-button {\n\tborder: 1px solid red;\n}`} />
			</El>
			and also unique classes are applied for different states of component. for each css property,

			<code>{`.{prefix}-{component}-{key}-{value}`}</code>

			is applied.

			<El border my="3">
				<Prism language="html" source={`<Button color="primary">\n\t...\n</Button>`} />
			</El>

			will generate:
			<El border my="3">
				<Prism
					language="html"
					source={`<button class="y-button y-button-color-primary">...</button>`} />
			</El>
		</p>

		<h3>Boolean properties</h3>
		<p>
			and for boolean properties, <code>{`.{prefix}-{component}-{key}`}</code> is applied.

			<El border my="3">
				<Prism language="html" source={`<Button outline>\n\t...\n</Button>`} />
			</El>

			will generate:
			<br />

			<El border my="3">
				<Prism
					language="html"
					source={`<button class="y-button y-button-outline">\n\t...\n</button>`} />
			</El>
		</p>
	</Doc>

	<Doc title="Available themes">
		We provide tabler and DaisyUI themes, for documentation site you can check using top-right
		select input.
	</Doc>

	<Doc title="Customize">
		to customize components you simply override css class of components.

		<El border my="3">
			<Prism
				language="css"
				source={`.y-card { \n\tborder: 1px solid red;\n} \n\n.y-card-title { \n\tfont-size: 18px\n}`} />
		</El>
		<Alert my="3" title="Note:" color="warning" show>
			<El textMuted>
				to override styles of components, somethimes you will need to use <code>!important</code>.
			</El>
		</Alert>
	</Doc>

	<Doc title="Creating Custom themes">
		if you are interested to create custom themes, you can create new issue at <a
			href="https://github.com/yesvelte/yesvelte/issues/new">our Github repo</a
		>, we will provide more detailed information.
	</Doc>
</Page>
