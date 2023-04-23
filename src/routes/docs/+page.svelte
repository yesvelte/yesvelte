<script lang="ts">
	import { Page } from '$components'
	import { El } from 'yesvelte'
	import { navigations } from './navigations'
</script>

<Page title="YeSvelte UI Component Library">
	<header>
		<h2>Introduction</h2>
	</header>
	<main>
		<div class="markdown">
			<p>
				Welcome to the YeSvelte documentation website! YeSvelte is a powerful and flexible Svelte UI
				component library, designed to help developers build enterprise-grade web applications
				quickly and easily. With a focus on rapid application development and framework
				independence, YeSvelte is the perfect complement to any CSS framework. It is inspired by
				<a href="https://tabler.io/" target="_blank" rel="noreferrer"> Tabler</a>, a UI Kit built on
				top of
				<a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"> Bootstrap</a> css.
			</p>
			<p>
				In this documentation, you will find everything you need to know to get started with
				YeSvelte, including installation instructions, usage examples, and detailed information
				about each component in the library. Whether you're a seasoned developer or just getting
				started with Svelte, you'll find the information you need to start building powerful and
				elegant web applications with YeSvelte.
			</p>
			<h2>Key Features:</h2>
			<ul>
				<li>
					<b>Rapid application development:</b> With YeSvelte, you can easily and quickly build enterprise-grade
					web applications, without worrying about the specifics of a CSS framework.
				</li>
				<li>
					<b>Framework independence</b>: YeSvelte's components are built with basic HTML and CSS,
					without any framework-specific classes or styles, so you can use them with any CSS
					framework of your choice.
				</li>
				<li>
					<b>Powerful and flexible</b>: YeSvelte's components are powerful and flexible, and you can
					easily customize them to fit the needs of your project.
				</li>
				<li>
					<b>Easy to use</b>: YeSvelte's components are easy to use and intuitive, so you don't have
					to be an expert in Svelte or CSS frameworks to get started.
				</li>
			</ul>

			<p>
				We hope you find this documentation helpful, and we're excited to see what you'll build with
				YeSvelte!
			</p>

			<El mt="4">
				<El row>
					{#each navigations as navigation}
						<El colSm="6">
							<h2>{navigation.title}</h2>
							{#if navigation.children}
								<ul class="list-unstyled">
									{#each navigation.children as menu}
										<li>
											- <a href={navigation.route + menu.route}>{menu.title}</a>
										</li>
									{/each}
								</ul>
							{/if}
						</El>
					{/each}
				</El>
			</El>
		</div>
	</main>
</Page>

<style>
	.list-unstyled {
		list-style-type: none;
	}
</style>
