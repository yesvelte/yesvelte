<script>
	import { Page, Doc, Preview } from '$components'
	import ButtonActive from './ButtonActive.svelte'
	import ButtonColor from './ButtonColor.svelte'
	import ButtonDefault from './ButtonDefault.svelte'
	import ButtonDisabled from './ButtonDisabled.svelte'
	import ButtonDropdown from './ButtonDropdown.svelte'
	import ButtonGhost from './ButtonGhost.svelte'
	import ButtonIcon from './ButtonIcon.svelte'
	import ButtonLink from './ButtonLink.svelte'
	import ButtonLoading from './ButtonLoading.svelte'
	import ButtonOutline from './ButtonOutline.svelte'
	import ButtonShape from './ButtonShape.svelte'
	import ButtonSize from './ButtonSize.svelte'
	import ButtonSocial from './ButtonSocial.svelte'
	import ButtonSocialIcon from './ButtonSocialIcon.svelte'
	import ButtonTag from './ButtonTag.svelte'
	import ButtonTarget from './ButtonTarget.svelte'
	import ButtonType from './ButtonType.svelte'
	import ButtonWithAvatar from './ButtonWithAvatar.svelte'
	import ButtonWithIcon from './ButtonWithIcon.svelte'
</script>

<Page
	title="Button"
	description="Use button styles that best suit your designs and encourage users to take the desired actions. You can customize the button's properties to improve the user experience of your website or system, changing the size, shape, color and many more.">
	<Doc
		title="Default"
		description="The standard button creates a white background and subtle hover animation. It’s meant to look and behave as an interactive element of your page.">
		<Preview src="./ButtonDefault.svelte">
			<ButtonDefault />
		</Preview>
	</Doc>
	<Doc
		title="Color"
		description="You can use `color` prop to choose color for your button. The big range of available colors will help you show your buttons’ purpose and make them easy to spot.">
		<Preview src="./ButtonColor.svelte">
			<div class="gap">
				<ButtonColor />
			</div>
		</Preview>
	</Doc>
	<Doc title="Shape">
		<Preview src="./ButtonShape.svelte">
			<ButtonShape />
		</Preview>
	</Doc>
	<Doc
		title="Size"
		description="set `size` prop to `lg` or `sm` to change the size of your button and differentiate those which should have primary focus from those of secondary importance. Adapt the button size to your design and encourage users to take actions.">
		<Preview src="./ButtonSize.svelte">
			<ButtonSize />
		</Preview>
	</Doc>
	<Doc
		title="Disabled"
		description="Make buttons look inactive to show that an action is possible once the user meets certain criteria, such as completing the required fields to submit a form.">
		<Preview src="./ButtonDisabled.svelte">
			<div class="gap">
				<ButtonDisabled />
			</div>
		</Preview>
	</Doc>
	<Doc
		title="Loading"
		description="Add the `loading` prop to show a button’s loading state, which can be useful in the case of operations that take longer to process.">
		<Preview src="./ButtonLoading.svelte">
			<ButtonLoading />
		</Preview>
	</Doc>
	<Doc
		title="Outline"
		description="add `outline` prop, if you want to remove the color and the background of your button and give it a more subtle look. Outline buttons are perfect to use as secondary buttons, as they don’t distract users from the main action.">
		<Preview src="./ButtonOutline.svelte">
			<div class="gap">
				<ButtonOutline />
			</div>
		</Preview>
	</Doc>
	<Doc
		title="Ghost"
		description="Use the `ghost` prop to make your button look simple yet aesthetically appealing.">
		<Preview src="./ButtonGhost.svelte">
			<div class="gap">
				<ButtonGhost />
			</div>
		</Preview>
	</Doc>
	<Doc title="Link">
		<Preview src="./ButtonLink.svelte">
			<div class="gap">
				<ButtonLink />
			</div>
		</Preview>
	</Doc>
	<Doc title="Target">
		<Preview src="./ButtonTarget.svelte">
			<ButtonTarget />
		</Preview>
	</Doc>
	<Doc
		title="Icon"
		description="Set the 'icon' property to remove unnecessary padding from your button and use an icon without any additional label. Thanks to that, you can save space and make the action easy to recognize for international users.">
		<Preview src="./ButtonIcon.svelte">
			<ButtonIcon />
		</Preview>
	</Doc>
	<Doc
		title="With Icon"
		description="Label your button with text and add an icon to communiacate the action and make it easy to identify for users. Icons are easily recognized and improve the aesthetics of your button design, giving it a modern and atractive look.">
		<Preview src="./ButtonWithIcon.svelte">
			<ButtonWithIcon />
		</Preview>
	</Doc>
	<Doc
		title="Tag"
		description="As one of the most common elements of UI design, buttons have a very important function of engaging users with your website or app and guiding them in their actions.">
		<Preview src="./ButtonTag.svelte">
			<ButtonTag />
		</Preview>
	</Doc>
	<Doc title="Type" description="You can use `button` or `a` tags as a base for your Button.">
		<Preview src="./ButtonType.svelte">
			<ButtonType />
		</Preview>
	</Doc>
	<Doc title="Active">
		<Preview src="./ButtonActive.svelte">
			<ButtonActive />
		</Preview>
	</Doc>
	<Doc
		title="Social"
		description="You can use the icons of popular social networking sites, which users are familiar with. Thanks to buttons with social media icons users can share content or follow a website with just one click, without leaving the website.">
		<Preview src="./ButtonSocial.svelte">
			<ButtonSocial />
		</Preview>
	</Doc>
	<Doc
		title="Social Icon"
		description="You can also add an icon without the name of a social networking site, if you want to display more buttons on a small space.">
		<Preview src="./ButtonSocialIcon.svelte">
			<ButtonSocialIcon />
		</Preview>
	</Doc>
	<Doc
		title="With Avatar"
		description="Use buttons with avatars to simplify the process of interaction and make your design more personalized. Buttons can contain avatars and labels or only avatars, if displayed on a smaller space.">
		<Preview src="./ButtonWithAvatar.svelte">
			<ButtonWithAvatar />
		</Preview>
	</Doc>
	<Doc
		title="Dropdown"
		description="Create a dropdown button that will encourage users to click for more options. You can add a label with an icon or remove the label and add an icon on its own if you want to save space. Choose the option that will best suit your design and improve the user experience.">
		<Preview src="./ButtonDropdown.svelte">
			<ButtonDropdown />
		</Preview>
	</Doc>
</Page>

<style>
	.gap > :global(.u-button) {
		margin-bottom: 0.2rem;
	}
</style>
