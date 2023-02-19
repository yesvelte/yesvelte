<script>
	import { Page, Doc, Preview } from '$components'
	import AlertAvatar from './AlertAvatar.svelte'
	import AlertButtons from './AlertButtons.svelte'
	import AlertColors from './AlertColors.svelte'
	import AlertDismissible from './AlertDismissible.svelte'
	import AlertIcons from './AlertIcons.svelte'
	import AlertImportant from './AlertImportant.svelte'
	import AlertLink from './AlertLink.svelte'
	import AlertToggle from './AlertToggle.svelte'
</script>

<Page
	title="Alert"
	description="Alert messages are used to inform users of the status of their action and help them solve any problems that might have occurred. Good design of alert modals is very important for the overall user experience of a website or app.">
	<Doc
		title="Default"
		description="Depending on the information you need to convey, you can use one of the following types of alert messages - `success`, `info`, `warning` or `danger`. Using the right type of alert modal will help draw users’ attention to the message and prompt them to take action.">
		<Preview src="./AlertColors.svelte">
			<AlertColors />
		</Preview>
	</Doc>
	<Doc
		title="Link"
		description="Add a link to your alert message to redirect users to the details they need to complete or additional information they should read.">
		<Preview src="./AlertLink.svelte">
			<AlertLink />
		</Preview>
	</Doc>
	<Doc
		title="Dismissible"
		description="Add the `x` close button to make an alert modal dismissible. Thanks to that, your alert modal will disappear only once the user closes it.">
		<Preview src="./AlertDismissible.svelte">
			<AlertDismissible />
		</Preview>
	</Doc>
	<Doc
		title="Icon"
		description="Add an icon to your alert modal to make it more user-friendly and help users easily identify the message.">
		<Preview src="./AlertIcons.svelte">
			<AlertIcons />
		</Preview>
	</Doc>
	<Doc title="Avatar" description="Add an avatar to your alert modal to make it more personalized.">
		<Preview src="./AlertAvatar.svelte">
			<AlertAvatar />
		</Preview>
	</Doc>
	<Doc
		title="Buttons"
		description="Add primary and secondary buttons to your alert modals if you want users to take a particular action based on the information included in the modal message.">
		<Preview src="./AlertButtons.svelte">
			<AlertButtons />
		</Preview>
	</Doc>
	<Doc
		title="Important"
		description="If you want your alert to be really eye-catching, you can add the `important` property.">
		<Preview src="./AlertImportant.svelte">
			<AlertImportant />
		</Preview>
	</Doc>
	<Doc title="Toggle" description="To show or hide the alert use the `open` property.">
		<Preview src="./AlertToggle.svelte">
			<AlertToggle />
		</Preview>
	</Doc>
</Page>
