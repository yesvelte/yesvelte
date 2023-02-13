<script>
	let icon = 'copy'

	async function copy() {
		await navigator.clipboard.writeText('npm install yesvelte')
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
		content="YeSvelte, Svelte, UI components, web development, enterprise web applications, rapid application development, framework independent, Bootstrap, Tabler, CSS framework"
	/>
	<meta
		name="description"
		content="YeSvelte is a powerful and flexible Svelte UI component library, designed to help developers build enterprise-grade web applications quickly and easily. With a focus on rapid application development and framework independence, YeSvelte is the perfect complement to any CSS framework."
	/>
	<meta name="robots" content="index, follow" />
	<meta name="author" content="Amir Pournasserian" />
</svelte:head>

<div
	class="home-el-text-align-center home-el-bg-color-secondary home-el-bg-gradient home-el-bg-opacity-10 home-el-d-flex el-1 flex-column home-el-align-items-center home-el-justify-content-center home-el-p-3 home-el-gap-4 home-el-h-100"
>
	<div
		class="home-el-mb-3 home-el-d-flex home-el-align-items-center home-el-justify-content-center"
	>
		<div class="home-el-col-5">
			<img class="img img-svelte" width="180" height="180" alt="Svelte" src="/images/svelte.svg" />
		</div>
	</div>

	<div>
		<h1 class="large-text">YeSvelte components</h1>
		<h2 class="home-el-mt-3 home-el-text-muted medium-text">
			Accelerate your Svelte development with YeSvelte components
		</h2>
	</div>

	<div class="custom-container home-el-row">
		<div class="home-el-p-1 home-el-col-12 home-el-col-sm-6">
			<a
				role="button"
				class="home-button home-el-col-12 home-button-size-lg home-button-color-primary"
				href="/docs"
			>
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
						d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13"
					/></svg
				>
				Get Started
			</a>
		</div>

		<div class="home-el-p-1 home-el-col-12 home-el-col-sm-6">
			<a
				role="button"
				class="home-button home-el-col-12 home-button-size-lg home-button-color-github"
				href="https://github.com/yesvelte/yesvelte"
			>
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
						d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
					/></svg
				>
				Source Code
			</a>
		</div>

		<div class="home-el-col-12 home-el-mt-3 home-el-px-1">
			<div
				class="home-el-col-12 text-terminal home-el-border home-el-d-flex home-el-justify-content-between home-el-gap-3 home-el-shadow-lg home-el-text-color-light home-el-p-3 home-el-mb-5 home-el-border-round-size-3 home-el-bg-color-github"
			>
				<div>npm install yesvelte</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="home-el-d-flex clipboard-icon" on:click={copy}>
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
									d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"
								/></g
							></svg
						>
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
								d="m5 12l5 5L20 7"
							/></svg
						>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.home-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 16px;
		padding: 8px 12px;
		border-radius: 8px;
		line-height: 1.5;
		text-decoration: none;
	}

	.home-button-color-primary {
		background-color: #206bc4;
		color: white;
	}

	.home-el-text-align-center {
		text-align: center;
	}

	.home-el-bg-color-secondary {
		background-color: #e3e8ed;
	}

	.home-el-d-flex {
		display: flex;
	}
	.home-el-align-items-center {
		align-items: center;
	}

	.home-el-justify-content-center {
		justify-content: center;
	}
	.home-el-justify-content-between {
		justify-content: space-between;
	}

	.home-el-px-1 {
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}

	.home-button-size-lg {
		font-size: 20px;
	}

	.home-el-row {
		display: flex;
		flex-wrap: wrap;
	}

	.home-el-gap-3 {
		gap: 1rem;
	}

	.home-el-p-3 {
		padding: 1rem;
	}

	.home-el-h-100 {
		height: 100%;
	}

	.home-el-mb-3 {
		margin-bottom: 1rem;
	}

	.home-el-col-5 {
		width: 41.6%;
	}

	.home-el-mt-3 {
		margin-top: 1rem;
	}
	.home-el-text-muted {
		opacity: 0.7;
	}

	.home-el-col-12 {
		width: 100%;
	}

	.home-el-p-1 {
		padding: 0.25rem;
	}

	.flex-column {
		flex-direction: column;
	}

	* {
		margin: 0;
		box-sizing: border-box;
	}

	.home-button-color-github {
		background-color: #181717;
		color: white;
	}

	@media (min-width: 576px) {
		.home-el-col-sm-6 {
			flex-basis: 0 0 auto;
			width: 50%;
		}
	}

	.home-el-border-round-size-3 {
		border-radius: 8px;
	}

	.home-el-mb-5 {
		margin-bottom: 4rem;
	}

	.home-icon-size-xl {
		width: 24px;
		height: 24px;
	}

	.home-el-bg-color-github {
		background-color: #181717;
		color: white;
	}

	.home-el-shadow-lg {
		box-shadow: 0 1rem 3rem #00000018;
	}

	.home-el-gap-4 {
		gap: 2rem;
	}

	.large-text {
		letter-spacing: -1px;
		line-height: 34px;
		font-size: 42px;
		font-weight: bold;
	}

	.medium-text {
		margin-top: 16px;
		line-height: 24px;
		font-size: 22px;
		font-weight: 300;
	}

	.text-terminal {
		font-family: monospace;
		font-size: 18px;
	}

	.custom-container {
		max-width: 450px;
	}

	.img {
		object-fit: contain;
		width: 180px;
	}

	.img-svelte {
		scale: 0.8;
		filter: drop-shadow(0 0 3rem #fe3c0060);
	}

	.clipboard-icon {
		cursor: pointer;
	}

	@media (max-width: 500px) {
		.img {
			width: 130px;
		}
	}
</style>
