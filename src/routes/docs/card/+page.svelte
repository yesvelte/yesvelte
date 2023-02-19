<script>
	import { Page, Doc, Preview } from '$components'
	import CardBody from './CardBody.svelte'
	import CardTitle from './CardTitle.svelte'
	import CardImage from './CardImage.svelte'
	import CardBlog from './CardBlog.svelte'
	import CardRow from './CardRow.svelte'
	import CardColor from './CardColor.svelte'
	import CardStamp from './CardStamp.svelte'
	import CardMedia from './CardMedia.svelte'
	import CardStacked from './CardStacked.svelte'
	import CardRibbon from './CardRibbon.svelte'
	import CardFooter from './CardFooter.svelte'
	import CardBackground from './CardBackground.svelte'
</script>

<Page title="Cards">
	<p slot="description">
		Cards are flexible user interface elements, which help organize content into meaningful sections
		and make it easier to display on different screen sizes. Cards contain various smaller
		components, such as images, text, links and buttons and may act as an entry to more detailed
		information, helping users scan the page quickly and find the most relevant content.
	</p>

	<Doc title="Default">
		<p slot="description">
			Use the card and cardBody to create a card and use it as the basis for a more advanced card
			design. A card is a perfect way to organize content and make it look neat and tidy.
		</p>
		<Preview src="./CardBody.svelte">
			<div class="custom-class">
				<CardBody />
			</div>
		</Preview>
	</Doc>

	<Doc title="Title">
		<p slot="description">
			Add a title to your card by adding title props. You can also place the title inside the
			cardHeader slot to customize your header.
		</p>
		<Preview src="./CardTitle.svelte">
			<div class="custom-class"><CardTitle /></div>
		</Preview>
	</Doc>

	<Doc title="Title and image">
		<p slot="description">
			To create a more visually appealing card, add a title and an image. Thanks to that, the card
			will go well with your inteface design and draw user’s attention.
		</p>
		<Preview src="./CardImage.svelte">
			<div class="custom-class"><CardImage /></div>
		</Preview>
	</Doc>

	<Doc title="Blog post">
		<p slot="description">
			Add an image to your blog post card to make it eye-catching. You can do it by adding the
			image. Thanks to the grid within CardBody, the author details will be displayed at the bottom
			of the card.
		</p>
	</Doc>
	<Preview src="./CardBlog.svelte">
		<div class="custom-class"><CardBlog /></div>
	</Preview>

	<Doc title="Row deck">
		<p slot="description">
			Add the .row-deck (it's tabler helper) class to .row, if you want to display several cards
			next to one another. Thanks to that, they will all have the same height.
		</p>
		<Preview src="./CardRow.svelte">
			<div class="custom-class"><CardRow /></div>
		</Preview>
	</Doc>

	<Doc title="Background color">
		<Preview src="./CardBackground.svelte">
			<div class="custom-class"><CardBackground /></div>
		</Preview>
	</Doc>

	<Doc
		title="Color variations"
		description="Add a status color to your card, either at the top or on the side of the card, to customise it and make it more eye-catching.">
		<Preview src="./CardColor.svelte">
			<div class="custom-class"><CardColor /></div>
		</Preview>
	</Doc>

	<Doc title="Stamp">
		<Preview src="./CardStamp.svelte">
			<div class="custom-class"><CardStamp /></div>
		</Preview>
	</Doc>

	<Doc title="Ribbon" description="Add a Ribbon to your card.">
		<Preview src="./CardRibbon.svelte">
			<div class="custom-class"><CardRibbon /></div>
		</Preview>
	</Doc>

	<Doc
		title="Stacked"
		description="Use the card-stacked class to stack up multiple cards, if you want to save screen space or	create a visually appealing effect.">
		<Preview src="./CardStacked.svelte">
			<div class="custom-class"><CardStacked /></div>
		</Preview>
	</Doc>

	<Doc title="Media" description="Add a CardMedia to show image and other medias inside our card.">
		<Preview src="./CardMedia.svelte">
			<div class="custom-class"><CardMedia /></div>
		</Preview>
	</Doc>

	<Doc title="Footer">
		<Preview src="./CardFooter.svelte">
			<div class="custom-class"><CardFooter /></div>
		</Preview>
	</Doc>
</Page>

<style>
	.custom-class > :global(.u-card) {
		margin: 0.5rem 0;
	}
	.custom-class > :global(.u-el-row > .u-el > .u-card) {
		margin: 0.25rem 0;
	}
</style>
