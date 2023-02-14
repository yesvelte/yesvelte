<script lang="ts">
	import { Page, Doc, Preview } from '$components'
	import ColorsNamed from './ColorsNamed.svelte'
	import ColorsSocial from './ColorsSocial.svelte'
	import ColorsTheme from './ColorsTheme.svelte'
</script>

<Page
	title="Colors"
	description="Colors are used to add meaning to a user interface, help distinguish content, and establish
hierarchy. They can also be used to create visual excitement and draw attention to parts of your
layout.">
	<Doc title="Theme colors">
		<div slot="description">
			<p>
				Theme colors are used throughout the component library to provide a consistent design that
				can be adapted to your brand. Theme color has these variant names:
				<code>primary</code>, <code>secondary</code>, <code>success</code>, <code>danger</code>,
				<code>warning</code>,
				<code>info</code>, <code>light</code>, <code>dark</code>.
			</p>
			<p>
				You can use the colors to customize the design of components, indicate different states or
				suggest actions you want users to take.
			</p>
		</div>
		<Preview src="./ColorsTheme.svelte">
			<div class="custom-class text-light">
				<ColorsTheme />
			</div>
		</Preview>
	</Doc>

	<Doc title="Named colors">
		<div slot="description">
			<p>
				Named colors are used throughout the component library to provide a consistent design that
				can be adapted to your brand.
			</p>
			<p>
				You can use the colors to customize the design of components, indicate different states or
				suggest actions you want users to take.
			</p>
		</div>
		<Preview src="./ColorsNamed.svelte">
			<div class="custom-class text-light">
				<ColorsNamed />
			</div>
		</Preview>
	</Doc>

	<Doc title="Social colors">
		<div slot="description">
			<p>
				Social colors are used throughout the component library to provide a consistent design that
				can be adapted to your brand. You can use the colors to customize the design of components,
				indicate different states or suggest actions you want users to take. Choose one of the
				available colors from the social color palette. Available social colors are:
				<code>facebook</code>, <code>twitter</code>, <code>google</code>, <code>youtube</code>,
				<code>vimeo</code>,
				<code>linkedin</code>, <code>dribbble</code>, <code>github</code>, <code>instagram</code>,
				<code>pinterest</code>,
				<code>vk</code>, <code>rss</code>, <code>flickr</code>, <code>bitbucket</code>, and
				<code>tabler</code>.
			</p>
		</div>
		<Preview src="./ColorsSocial.svelte">
			<div class="custom-class text-light">
				<ColorsSocial />
			</div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class :global(*) {
		padding: 1rem;
		margin: 1rem;
	}
</style>
