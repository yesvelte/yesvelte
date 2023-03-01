<script>
	let icon = 'copy'
	let replLink = 'https://svelte.dev/repl/a26156e5cb1143d0bed393b2d1d3e754?version=3.55.1'

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
			<a
				class="button"
				rel="noreferrer"
				target="_blank"
				href="https://github.com/yesvelte/yesvelte">
				Github
			</a>
			<a class="button" rel="noreferrer" target="_blank" href="https://reddit.com/r/yesvelte">
				Reddit
			</a>
		</div>
	</div>
	<div class="body">
		<div class="left-container">
			<h1 class="title">YeSvelte Components</h1>
			<h2 class="description">Accelerate your Svelte development with YeSvelte components</h2>
			<div class="buttons">
				<a class="button button-docs" href="/docs">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						class="home-icon home-icon-size-xl iconify iconify--tabler"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13" /></svg>

					Get Started</a>
				<a class="button button-source" href="https://github.com/yesvelte/yesvelte">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						aria-hidden="true"
						role="img"
						class="home-icon home-icon-size-xl iconify iconify--tabler"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21" /></svg>

					<span class="text"> Source </span>
				</a>
			</div>

			<div class="npm-terminal">
				<div class="text">npm i yesvelte@next</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="clipboard-icon" on:click={copy}>
					{#if icon === 'copy'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="home-icon iconify iconify--tabler"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><g
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								><rect width="12" height="12" x="8" y="8" rx="2" /><path
									d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></g
							></svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="home-icon iconify iconify--tabler"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							><path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m5 12l5 5L20 7" /></svg>
					{/if}
				</div>
			</div>
		</div>
		<div class="right-container">
			<div class="svelte-repl">
				<img src="/images/repl.png" alt="svelte repl" />

				<div class="content">
					Try YeSvelte components on REPL!
					<a href={replLink} class="repl-button">Open REPL</a>
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

	:global(*) {
		margin: 0;
		box-sizing: border-box;
	}

	.home-page {
		height: 100%;
		background-color: #00000010;
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
		align-items: flex-end;
		gap: 1rem;
	}

	.body {
		padding: 1rem;
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
		align-items: start;
	}

	.left-container .title {
		margin-top: 60px;
		font-size: 24px;
	}
	.left-container .description {
		opacity: 0.7;
		margin-top: 4px;
		margin-bottom: 1rem;
		font-size: 18px;
		font-weight: 400;
	}

	.left-container .buttons {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		justify-content: space-between;
	}
	.left-container .buttons > .button {
		white-space: nowrap;
		min-width: 40px;
		box-shadow: 2px 2px 4px #00000037;
		color: white;
		border-radius: 4px;
		display: inline-flex;
		gap: 8px;
		align-items: center;
		height: 40px;
		justify-content: center;
	}
	.left-container .buttons > .button:hover {
		text-decoration: none;
		box-shadow: 2px 2px 6px #00000057;
	}

	.button.button-docs {
		flex: 1;
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

	.npm-terminal {
		background-color: #000000f0;
		max-width: 700px;
		width: 100%;
		color: white;
		font-family: monospace;
		padding: 8px;
		border-radius: 4px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.svelte-repl {
		max-height: 400px;
		position: relative;
		box-shadow: 0 0 4px #00000050;
		width: 100%;
		border: 1px solid red;
		overflow: hidden;
	}

	.svelte-repl .content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		pointer-events: all;
		gap: 1rem;
		z-index: 1;
		opacity: 0;
		transition: opacity 0.5s ease;
	}
	.svelte-repl img {
		transition: all 0.5s ease;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.svelte-repl:hover .content {
		opacity: 1;
		/* pointer-events: none; */
	}

	.svelte-repl:hover img {
		filter: blur(4px);
		transform: scale(1.2);
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

	.right-container {
		margin-top: 0;
		display: flex;
		align-items: center;
	}

	@media (min-width: 700px) {
		.body {
			flex-direction: row;
			justify-content: center;
			gap: 5%;
		}

		.left-container {
			width: 500px;
			justify-content: center;
		}

		.left-container .title {
			margin-top: 0;
			font-size: 36px;
		}

		.right-container {
			width: 500px;
		}

		.svelte-repl {
			max-width: 500px;
		}
	}

	@media (min-width: 400px) {
		.button.button-source {
			flex: 1;
		}
		.button.button-source .text {
			display: block;
		}
	}
</style>
