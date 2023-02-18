<script>
	import { Page, Doc, Preview } from '$components'

	import BadgeButtons from './BadgeButtons.svelte'
	import BadgeColors from './BadgeColors.svelte'
	import BadgeDefault from './BadgeDefault.svelte'
	import BadgeDots from './BadgeDots.svelte'
	import BadgeGhosts from './BadgeGhosts.svelte'
	import BadgeHeadings from './BadgeHeadings.svelte'
	import BadgeLinks from './BadgeLinks.svelte'
	import BadgeNumbers from './BadgeNumbers.svelte'
	import BadgeOutlines from './BadgeOutlines.svelte'
	import BadgeShapes from './BadgeShapes.svelte'
	import BadgeBlink from './BadgeBlink.svelte'
</script>

<Page title="Badges">
	<div slot="description">
		Badges are small count and labeling components, which are used to add extra information to an
		interface element. You can use them to draw users' attention to a new element, notify about
		unread messages or provide any kind of additional info.
	</div>

	<Doc
		title="Default"
		description="The default badges are square and come in the basic set of colors.">
		<Preview src="./BadgeDefault.svelte">
			<BadgeDefault />
		</Preview>
	</Doc>

	<Doc title="Colors">
		<div slot="description">
			You can create a soft colour variant of a corresponding contextual badge variation, to make it
			look more subtle.
		</div>
		<Preview src="./BadgeColors.svelte">
			<div class="custom-class">
				<BadgeColors />
			</div>
		</Preview>
	</Doc>

	<Doc title="Outline">
		<div slot="description">
			Use the <code>outline</code> prop if you want to remove the color and the background of your badge
			and give it a more subtle look.
		</div>
		<Preview src="./BadgeOutlines.svelte">
			<div class="custom-class">
				<BadgeOutlines />
			</div>
		</Preview>
	</Doc>

	<Doc title="Ghost">
		<div slot="description">
			Use the <code>ghost</code> prop to make your badge look simple yet aesthetically appealing.
		</div>
		<Preview src="./BadgeGhosts.svelte">
			<div class="custom-class">
				<BadgeGhosts />
			</div>
		</Preview>
	</Doc>

	<Doc title="Shapes">
		<div slot="description">
			Use the <code>shape</code> prop to change your badge shape.
		</div>
		<Preview src="./BadgeShapes.svelte">
			<BadgeShapes />
		</Preview>
	</Doc>

	<Doc title="Headings" description="Badges can be used as part of heading element.">
		<Preview src="./BadgeHeadings.svelte">
			<BadgeHeadings />
		</Preview>
	</Doc>

	<Doc title="Numbers and shapes">
		<Preview src="./BadgeNumbers.svelte">
			<BadgeNumbers />
		</Preview>
	</Doc>

	<Doc title="Badge as dot">
		<div slot="description">
			Use the <code>dot</code> prop if you want to create a badge with rounded corners. Its width will
			adjust to the label text.
		</div>
		<Preview src="./BadgeDots.svelte">
			<BadgeDots />
		</Preview>
	</Doc>

	<Doc title="Link">
		<div slot="description">
			Place the link at badge <code>href</code> prop if you want it to perform the function of a link
			and make it clickable.
		</div>
		<Preview src="./BadgeLinks.svelte">
			<BadgeLinks />
		</Preview>
	</Doc>

	<Doc
		title="Inside Button"
		description="Badges can be used as part of links or buttons to provide a counter.">
		<Preview src="./BadgeButtons.svelte">
			<BadgeButtons />
		</Preview>
	</Doc>

	<Doc title="With blinking effect">
		<Preview src="./BadgeBlink.svelte">
			<BadgeBlink />
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.u-badge) {
		margin-bottom: 0.2rem;
	}
</style>
