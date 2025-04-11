<script lang="ts">
	import { Page, Doc, Preview } from '$components'

	import TypographyDivider from './TypographyDivider.svelte'
	import TypographyHeadings from './TypographyHeadings.svelte'
	import TypographyParagraph from './TypographyParagraph.svelte'
	import TypographySemantic from './TypographySemantic.svelte'
	import TypographyTextTransform from './TypographyTextTransform.svelte'
</script>

<Page title="Typography">
	{#snippet description()}
		Typography is used to create a hierarchy of information on a page.
		<code>El</code> component has a <code>tag</code> string property. This property can be used to
		create any HTML element. For example, to create a <code>h1</code> element, you can use the following
		code:
	{/snippet}

	<Doc title="Headings">
		{#snippet description()}
			<code>El</code> component can be used to create headings. Headings are used to create a hierarchy
			of information on a page. They are used to create a visual hierarchy of information on a page.
		{/snippet}
		<Preview src="./TypographyHeadings.svelte">
			<TypographyHeadings />
		</Preview>
	</Doc>

	<Doc title="Paragraphs">
		{#snippet description()}
			Organize longer pieces of text into paragraphs using <code>El</code> component by setting
			<code>tag="p"</code>.
		{/snippet}
		<Preview src="./TypographyParagraph.svelte">
			<TypographyParagraph />
		</Preview>
	</Doc>

	<Doc title="Semantic text elements">
		{#snippet description()}
			Use a variety of semantic text elements, depending of how you want to display particular
			fragments of content.
			<code>El</code> component can be used to create semantic text elements. For example, to create
			a
			<code>strong</code>
			element, you can use the following code:
			<code>
				{`<El tag="strong">This text is important</El>`}
			</code>
		{/snippet}
		<Preview src="./TypographySemantic.svelte">
			<div class="custom-class">
				<TypographySemantic />
			</div>
		</Preview>
	</Doc>

	<Doc title="Horizontal Rules">
		{#snippet description()}
			We have a <code>Divider</code> component to create horizontal rules. The default
			<code>slot</code>
			can be used to create a label for the divider. For more information, see
			<a href="/docs/components/dividers">Divider</a> component.
		{/snippet}
		<Preview src="./TypographyDivider.svelte">
			<TypographyDivider />
		</Preview>
	</Doc>

	<Doc title="Text transform">
		{#snippet description()}
			<code>El</code> component has a <code>textTransform</code> property. This property can be used
			to transform text into
			<code>uppercase</code>,
			<code>lowercase</code>, or <code>capitalize</code>.
		{/snippet}
		<Preview src="./TypographyTextTransform.svelte">
			<TypographyTextTransform />
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class :global(*) {
		display: table;
		margin: 0.5rem;
	}
</style>
