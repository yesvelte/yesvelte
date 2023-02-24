<script>
	import { Page, Doc, Preview } from '$components'
	import AvatarColors from './AvatarColors.svelte'
	import AvatarDefault from './AvatarDefault.svelte'
	import AvatarImage from './AvatarImage.svelte'
	import AvatarShapes from './AvatarShapes.svelte'
	import AvatarSize from './AvatarSize.svelte'
	import AvatarStatus from './AvatarStatus.svelte'
	import AvatarList from './AvatarList.svelte'
	import AvatarListStacked from './AvatarListStacked.svelte'
</script>

<Page title="Avatars">
	<p slot="description">
		Avatars help customise various elements of a user interface and make the product experience more
		personalised. They are often used in communication apps, collaboration tools and social media.
	</p>

	<Doc title="Default">
		<p slot="description">
			Use the <code>Avatar</code> component to add an avatar to your interface design for greater customisation.
		</p>
		<Preview src="./AvatarDefault.svelte">
			<div class="custom-class">
				<AvatarDefault />
			</div>
		</Preview>
	</Doc>

	<Doc title="Color" description="Customize the color of the avatars.">
		<Preview src="./AvatarColors.svelte">
			<div class="custom-class">
				<AvatarColors />
			</div>
		</Preview>
	</Doc>

	<Doc
		title="Shape"
		description="You can make them round or square and change their border radius.">
		<Preview src="./AvatarShapes.svelte">
			<div class="custom-class">
				<AvatarShapes />
			</div>
		</Preview>
	</Doc>

	<Doc
		title="Size"
		description="you can create a standard avatar or scale it up or down to different sizes based on what you need.">
		<Preview src="./AvatarSize.svelte">
			<div class="custom-class">
				<AvatarSize />
			</div>
		</Preview>
	</Doc>

	<Doc title="Image and Icon">
		<p slot="description">
			Set an <code>image</code> as the background to make users easy to indentify and create a personalised
			experience.
		</p>
		<Preview src="./AvatarImage.svelte">
			<div class="custom-class">
				<AvatarImage />
			</div>
		</Preview>
	</Doc>

	<Doc title="Status">
		<Preview src="./AvatarStatus.svelte">
			<div class="custom-class">
				<AvatarStatus />
			</div>
		</Preview>
	</Doc>

	<Doc title="List">
		<Preview src="./AvatarList.svelte">
			<AvatarList />
		</Preview>
	</Doc>

	<Doc title="Stacked List" />
	<Preview src="./AvatarListStacked.svelte">
		<AvatarListStacked />
	</Preview>
</Page>

<style>
	.custom-class > :global(.u-avatar) {
		margin-bottom: 0.2rem;
	}
</style>
