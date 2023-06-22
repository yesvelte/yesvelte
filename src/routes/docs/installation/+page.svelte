<script>
	import { Doc, Page } from '$components'
	import { Button, El } from '$lib'
	import Icon from '$lib/icon/Icon.svelte'

	let framework = 'sveltekit'
	let packageManager = 'npm'

	let theme = 'tabler'
</script>

<Page title="Installation">
	<p slot="description">
		To use YeSvelte components, you need to install and setup your environment.
	</p>
	<Doc title="Choose Framework">
		<p>With which svelte framework do you want to use YeSvelte?</p>
		<El row g="3" textAlign="center">
			<El col="6">
				<El
					p="3"
					on:click={() => (framework = 'svelte')}
					border
					borderColor={framework === 'svelte' ? 'primary' : undefined}
					borderRoundSize="3">Svelte + Vite</El>
			</El>
			<El col="6">
				<El
					p="3"
					on:click={() => (framework = 'sveltekit')}
					border
					borderColor={framework === 'sveltekit' ? 'primary' : undefined}
					borderRoundSize="3">SvelteKit</El>
			</El>
		</El>
	</Doc>

	<Doc title="Choose Package Manager">
		<p>Which Package manager do you use?</p>
		<El row g="3" textAlign="center">
			<El col="6">
				<El
					p="3"
					on:click={() => (packageManager = 'npm')}
					border
					borderColor={packageManager === 'npm' ? 'primary' : undefined}
					borderRoundSize="3">Npm</El>
			</El>
			<El col="6">
				<El
					p="3"
					on:click={() => (packageManager = 'yarn')}
					border
					borderColor={packageManager === 'yarn' ? 'primary' : undefined}
					borderRoundSize="3">Yarn</El>
			</El>
		</El>
	</Doc>

	<Doc title="Choose Theme">
		<p>
			Currently YeSvelte components supports these themes, Which theme do you prefer for your
			project?
		</p>
		<El row g="3" textAlign="center">
			<El col="6">
				<El
					p="3"
					on:click={() => (theme = 'tabler')}
					border
					borderColor={theme === 'tabler' ? 'primary' : undefined}
					borderRoundSize="3">Tabler</El>
			</El>
			<El col="6">
				<El
					p="3"
					on:click={() => (theme = 'daisyui')}
					border
					borderColor={theme === 'daisyui' ? 'primary' : undefined}
					borderRoundSize="3">DaisyUI</El>
			</El>
		</El>
	</Doc>

	<Doc title="Template Repository">
		Easiest way to start working with YeSvelte is using <a
			href="https://github.com/yesvelte/yesvelte-starter">This Starter Repository</a
		>. to start using this repo, you can run:

		<pre><code
				>{'npx degit yesvelte/yesvelte-starter YOUR_PROJECT_NAME;\ncd YOUR_PROJECT_NAME'}</code></pre>

		then follow instrustions of README.md file. and optionally initialize a git repository
	</Doc>

	<Doc title="Instructions">
		<p slot="description">
			To use YeSvelte with {framework} projects, first you should initialize the project, you can use
			this command to initialize empty {framework} project.
		</p>

		{#if packageManager === 'npm'}
			{#if framework === 'svelte'}
				<pre><code>npm init vite@latest -- --template svelte-ts # or just svelte</code></pre>
			{:else}
				<pre><code>npm init svelte@next</code></pre>
			{/if}
		{:else if framework === 'svelte'}
			<pre><code>yarn create vite --template svelte-ts # or just svelte</code></pre>
		{:else}
			<pre><code>yarn create svelte</code></pre>
		{/if}

		then to install YeSvelte components you can use this command:

		{#if packageManager === 'npm'}
			<pre><code>npm install yesvelte@next</code></pre>
		{:else}
			<pre><code>yarn add yesvelte@next</code></pre>
		{/if}

		then you should add a link to the css file of "{theme}" theme in your
		<code>{framework === 'svelte' ? '/src/App.svelte' : '/src/routes/+layout.svelte'}</code>
		file.
		<br />
		to use a cdn:
		<pre><code
				>&lt;svelte:head&gt;
    &lt;link rel="stylesheet" href="https://unpkg.com/yesvelte@next/css/{theme}.min.css"&gt;
&lt;/svelte:head&gt;</code></pre>

		You can use css file from node_modules folder like this:
		<pre><code
				>&lt;script&gt;
    import {theme} from 'yesvelte/css/{theme}.min.css?url';
&lt;/script&gt;

&lt;svelte:head&gt;
    &lt;link rel="StyleSheet" href={'{'}{theme}{'}'} /&gt;
&lt;/svelte:head&gt;</code></pre>

		Now you should be able to use YeSvelte components in your project!
	</Doc>
</Page>

<style>
	pre {
		margin-top: 0.5rem;
	}
</style>
