<script>
	import { Page, Doc, Preview } from '$components'
	import IconColors from './IconColors.svelte'
	import IconDefault from './IconDefault.svelte'
	import IconSizes from './IconSizes.svelte'
</script>

<Page title="Icon">
	<p slot="description">
		Free and open source icons designed to make your website or app attractive, visually consistent
		and simply beautiful. See the icons documentation from
		<a href="https://tabler-icons.io/" target="_blank" rel="noreferrer">tabler-icons</a>.
	</p>
	<Doc title="Name">
		<p slot="description">
			To use an icon, set the <code>name</code> prop to the icon name.
		</p>
		<Preview src="./IconDefault.svelte">
			<IconDefault />
		</Preview>
	</Doc>

	<Doc title="Color">
		<p slot="description">
			Set the <code>color</code> prop to change your icons color.
		</p>
		<Preview src="./IconColors.svelte">
			<IconColors />
		</Preview>
	</Doc>

	<Doc title="Size">
		<p slot="description">
			To use a different icon size, set the <code>size</code> prop to <code>sm</code>,
			<code>md</code>
			or <code>lg</code>,
			<code>xl</code>,
			<code>1x</code>,
			<code>2x</code>,
			<code>3x</code>,
			<code>4x</code>,
			<code>5x</code>,
			<code>6x</code>,
			<code>7x</code>,
			<code>8x</code>,
			<code>9x</code>.
		</p>
		<Preview src="./IconSizes.svelte">
			<IconSizes />
		</Preview>
	</Doc>
</Page>
