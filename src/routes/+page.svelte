<script>
	import {
		CopyIcon,
		CheckIcon,
		DiscordIcon,
		DocsIcon,
		GithubIcon,
		RedditIcon,
	} from '$components/icons'

	let icon = 'copy'
	let replLink = 'https://svelte.dev/repl/a26156e5cb1143d0bed393b2d1d3e754?version=3.55.1'
	let discordLink = 'https://discord.gg/gD4de625'
	let githubLink = 'https://github.com/yesvelte/yesvelte'
	let redditLink = 'https://reddit.com/r/yesvelte'

	async function copy() {
		await navigator.clipboard.writeText('npm install yesvelte@next')
		icon = 'check'

		setTimeout(() => {
			icon = 'copy'
		}, 3000)
	}
</script>

<svelte:head>
	<title>YeSvelte Components</title>
	<meta
		name="keywords"
		content="YeSvelte, Svelte, UI components, web development, enterprise web applications, rapid application development, framework independent, Bootstrap, Tabler, CSS framework" />
	<meta
		name="description"
		content="YeSvelte is a powerful and flexible Svelte UI component library, designed to help developers build enterprise-grade web applications quickly and easily. With a focus on rapid application development and framework independence, YeSvelte is the perfect complement to any CSS framework." />
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Amir Pournasserian" />
</svelte:head>

<div class="home-page">
	<div class="header">
		<div class="brand">YeSvelte</div>
		<div class="header-buttons">
			<a class="button" href="/docs">Docs</a>
			<a class="button" rel="noreferrer" target="_blank" title="Github link" href={githubLink}>
				<GithubIcon />
			</a>
			<a class="button" rel="noreferrer" target="_blank" title="Discord link" href={discordLink}>
				<DiscordIcon />
			</a>
			<a
				class="button"
				rel="noreferrer"
				target="_blank"
				title="Reddit link"
				href="https://reddit.com/r/yesvelte">
				<RedditIcon />
			</a>
		</div>
	</div>
	<div class="body">
		<div class="left-container">
			<div class="title-wrapper">
				<div class="svelte-logo">
					<img class="img" alt="Svelte" src="/images/svelte.svg" />
				</div>
				<h1 class="title">YeSvelte Components</h1>
			</div>
			<h2 class="description">Accelerate your Svelte development with YeSvelte components</h2>
			<div class="buttons">
				<a class="button button-docs" href="/docs">
					<DocsIcon />
					Get Started</a>
				<a class="button button-source" href="https://github.com/yesvelte/yesvelte">
					<GithubIcon />
					<span class="text"> Source </span>
				</a>
				<a href={replLink} rel="noreferrer" target="_blank" class="button button-repl repl-button">
					Try it on REPL!
				</a>
			</div>

			<div class="npm-terminal">
				<div class="text">npm i yesvelte@next</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="clipboard-icon" on:click={copy}>
					{#if icon === 'copy'}
						<CopyIcon />
					{:else}
						<CheckIcon />
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	:global(body),
	:global(html),
	:global(body) > :global(div) {
		height: 100%;
	}

	:global(body) {
		background-color: #00000010;
	}

	:global(*) {
		margin: 0;
		box-sizing: border-box;
	}

	.home-page {
		height: 100%;
		display: flex;
		flex-direction: column;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.header {
		position: sticky;
		top: 0;
		height: 72px;
		display: flex;
		padding: 0.5rem 1rem;
		justify-content: space-between;
		align-items: center;
		z-index: 1;
		background-color: #ededed;
		box-shadow: 0 10px 10px #00000010;
	}

	.button {
		font-weight: bold;
		text-decoration: none;
		color: #000000a0;
	}
	.button:hover {
		text-decoration: underline;
		color: #000000c0;
	}

	.home-page .body {
		flex: 1;
	}

	.header .brand {
		font-size: 28px;
		font-weight: 700;
		color: rgb(56, 56, 56);
		text-shadow: 0 0 1rem #0000003b;
		cursor: default;
	}
	.header .header-buttons {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.header .header-buttons > .button {
		padding: 8px;
		border-radius: 4px;
		border: 1px solid #00000050;
		min-width: 42px;
		height: 42px;
		transition: background-color 0.2s ease;
	}
	.header .header-buttons > .button:hover {
		background-color: #000000a0;
		color: white;
		text-decoration: none;
	}

	.body {
		padding: 2rem;
		display: flex;
		gap: 2rem;
		flex-direction: column;
		justify-content: start;
		background-color: #00000010;
	}

	.left-container {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		text-align: center;
	}

	.title-wrapper {
		margin-top: 60px;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
	}
	.left-container .svelte-logo {
		width: 200px;
		padding: 1rem;
		/*  */
	}

	.svelte-logo .img {
		filter: drop-shadow(4px 0 64px #ff3e0080);
	}

	.left-container .title {
		font-size: 36px;
	}
	.left-container .description {
		opacity: 0.7;
		margin-top: 4px;
		margin-bottom: 1rem;
		font-size: 18px;
		font-weight: 400;
	}

	.left-container .buttons {
		margin-top: 2rem;
		margin-bottom: 4rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 1rem;
		width: 100%;
		justify-content: center;
		flex-direction: column;
	}
	.left-container .buttons > .button {
		white-space: nowrap;
		flex: 1;
		min-width: 60px;
		font-size: 16px;
		box-shadow: 2px 2px 4px #00000037;
		color: white;
		border-radius: 4px;
		display: inline-flex;
		gap: 8px;
		align-items: center;
		height: 60px;
		width: 100%;
		justify-content: center;
		padding: 16px;
	}
	.left-container .buttons > .button:hover {
		text-decoration: none;
		box-shadow: 2px 2px 6px #00000057;
	}

	.button.button-docs {
		/* flex: 1; */
		background-color: #2d65f2;
	}
	.button.button-docs:hover {
		background-color: #4572e3;
	}

	.button.button-source {
		background-color: #404040;
	}
	.button.button-source:hover {
		background-color: #454545;
	}

	.button.button-source .text {
		display: none;
	}

	.button.button-repl {
		background-color: #ff3e00;
		width: 100%;
	}
	.button.button-repl:hover {
		background-color: #ff4e10;
	}

	.npm-terminal {
		background-color: #000000a0;
		max-width: 700px;
		width: 100%;
		color: white;
		font-family: monospace;
		font-size: 24px;
		padding: 20px;
		border-radius: 4px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.repl-button {
		padding: 8px 16px;
		background-color: #ff3e00;
		color: white;
		border: none;
		border-radius: 4px;
		box-shadow: 0 0 4px #00000010;
	}
	.repl-button:hover {
		box-shadow: 0 0 8px #00000040;
		cursor: pointer;
	}

	@media (min-width: 700px) {
		.body {
			padding: 2rem;
			flex-direction: row;
			justify-content: center;
			gap: 5%;
		}

		.left-container {
			/* width: ; */
			justify-content: center;
			/* align-items: start; */
			/* text-align: start; */
		}

		.left-container .title-wrapper {
			widows: 100%;
			margin-top: 0;
			gap: 1rem;
			justify-content: center;
			/* flex-direction: row; */
		}

		.left-container .title {
			font-size: 72px;
		}

		.left-container .description {
			font-size: 36px;
		}
		.button.button-repl {
			width: auto;
		}

		.buttons {
			flex-direction: row !important;
		}
		.buttons > .button {
			width: 180px !important;
			flex: unset !important;
		}
	}

	@media (min-width: 400px) {
		.buttons > .button {
			font-size: 20px;
		}

		.header {
			padding: 0.5rem 2rem;
		}

		.header .header-buttons {
			gap: 1rem;
		}
		.button.button-source .text {
			display: block;
		}
	}
</style>
