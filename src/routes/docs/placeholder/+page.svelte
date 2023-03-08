<script>
	import { Preview, Doc, Page } from '$components'
	import PlaceholderAlign from './PlaceholderAlign.svelte'
	import PlaceholderAnimation from './PlaceholderAnimation.svelte'
	import PlaceholderAvatar from './PlaceholderAvatar.svelte'
	import PlaceholderDefault from './PlaceholderDefault.svelte'
	import PlaceholderSize from './PlaceholderSize.svelte'
</script>

<Page title="Placeholder" description="">
	<Doc title="Default">
		<Preview src="./PlaceholderDefault.svelte">
			<PlaceholderDefault />
		</Preview>
	</Doc>
	<Doc title="Alignment">
		<Preview src="./PlaceholderAlign.svelte">
			<PlaceholderAlign />
		</Preview>
	</Doc>
	<Doc title="Size">
		<Preview src="./PlaceholderSize.svelte">
			<PlaceholderSize />
		</Preview>
	</Doc>
	<Doc title="With Avatar">
		<Preview src="./PlaceholderAvatar.svelte">
			<PlaceholderAvatar />
		</Preview>
	</Doc>
	<Doc title="Animation">
		<Preview src="./PlaceholderAnimation.svelte">
			<PlaceholderAnimation />
		</Preview>
	</Doc>
</Page>
