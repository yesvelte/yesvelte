<script>
	import { Doc, Page } from '$components'
	import Prism from '$components/Prism.svelte'
	import { Button, El } from '$lib'
	import Alert from '$lib/alert/Alert.svelte'
	import Icon from '$lib/icon/Icon.svelte'

	let framework = 'sveltekit'
	let packageManager = 'npm'

	let theme = 'tabler'
</script>

<Page title="Installation">
	<p slot="description">
		To use YeSvelte components, you need to install and setup your environment.
	</p>

	<Doc title="With Sveltekit">
		<p slot="description">
			To use YeSvelte with SvelteKit based project, first you should initialize the project, you can
			use this command to initialize empty SvelteKit project.

			<El tag="h3" mt="2">Install SvelteKit</El>

			<Prism language="css" source="npm init svelte" />

			or using yarn:

			<Prism language="css" source="yarn create svelte" />

			<El tag="h3" mt="2">Install YeSvelte</El>

			then to install YeSvelte components you can use this command:

			<Prism language="css" source="npm install yesvelte@next" />

			or using yarn:
			<Prism language="css" source="yarn add yesvelte@next" />

			<El tag="h3" mt="2">Import Styles</El>
			then you should add a link to the css file of your preferred theme in your
			<code>/src/routes/+layout.svelte</code> file.
			<br />
			<Prism
				language="html"
				source={`<scr` +
					`ipt>
	import tabler from 'yesvelte/css/tabler.min.css?url'
</script>
<svelte:head>
	<link rel='stylesheet' href={tabler}/>
</svelte:head>`} />

			or to use a cdn:
			<Prism
				language="html"
				source={`<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/yesvelte@next/css/tabler.min.css" />
</svelte:head>`} />

			<Alert mt="3" title="Note:" color="warning">
				<El textMuted>You can replace 'tabler' with 'daisyui' for a different look and feel.</El>
			</Alert>
			Now you should be able to use YeSvelte components in your project!
		</p>
	</Doc>

	<Doc title="With Svelte + Vite">
		<p slot="description">
			To use YeSvelte with Svelte based project, first you should initialize the project, you can
			use this command to initialize empty Svelte project.

			<El tag="h3" mt="2">Install Svelte</El>

			<Prism
				language="css"
				source="npm init vite@latest -- --template svelte-ts # or just svelte" />

			or using yarn:

			<Prism language="css" source="yarn create vite --template svelte-ts # or just svelte" />

			<El tag="h3" mt="2">Install YeSvelte</El>

			then to install YeSvelte components you can use this command:

			<Prism language="css" source="npm install yesvelte@next" />

			or using yarn:
			<Prism language="css" source="yarn add yesvelte@next" />

			<El tag="h3" mt="2">Import Styles</El>
			then you should add a link to the css file of your preferred theme in your
			<code>/src/App.svelte</code> file.
			<br />
			<Prism
				language="html"
				source={`<scr` +
					`ipt>
	import tabler from 'yesvelte/css/tabler.min.css?url'
</script>
<svelte:head>
	<link rel='stylesheet' href={tabler}/>
</svelte:head>`} />

			or to use a cdn:
			<Prism
				language="html"
				source={`<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/yesvelte@next/css/tabler.min.css" />
</svelte:head>`} />

			<br />
			Now you should be able to use YeSvelte components in your project!
		</p>
	</Doc>

	<Doc title="Template Repository">
		Easiest way to start working with YeSvelte is using <a
			href="https://github.com/yesvelte/yesvelte-starter">This Starter Repository</a
		>. to start using this repo, you can run:

		<Prism
			language="css"
			source={'npx degit yesvelte/yesvelte-starter YOUR_PROJECT_NAME\ncd YOUR_PROJECT_NAME'} />
		<br />
		then follow instrustions of README.md file. and optionally initialize a git repository
	</Doc>
</Page>

<style>
	pre {
		margin-top: 0.5rem;
	}
</style>
