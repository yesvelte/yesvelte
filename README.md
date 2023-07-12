# YeSvelte - Svelte UI Component Library

YeSvelte is a powerful and flexible Svelte UI component library, designed to help developers build enterprise-grade web applications quickly and easily. With a focus on rapid application development and framework independence, YeSvelte is the perfect complement to any CSS framework. The component's UI is inspired by [Tabler](https://tabler.github.io/) UI Kit built on top of Bootstrap css.

## Installation

To install YeSvelte, you can use npm:

```bash
npm install yesvelte@next
```

## Usage

Once installed, you can import the components and use them in your Svelte application:

```svelte
<script>
	import { Button } from 'yesvelte'
</script>

<Button>Hello YeSvelte!</Button>
```

## Styles

YeSvelte components have default styles which is based on tabler. which you can use like this:

```svelte
<script>
	import { Button } from 'yesvelte'
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/yesvelte@next/css/tabler.min.css" />
</svelte:head>

<Button color="primary">Hello YeSvelte!</Button>
```

## Demo

Check out the [documentation website](https://www.yesvelte.com) for live demos of each component and detailed usage instructions.

## Playground in REPL

Check this [REPL](https://svelte.dev/repl/a26156e5cb1143d0bed393b2d1d3e754?version=3.55.1) to play with components!

## Roadmap

Review our [ROADMAP](https://github.com/yesvelte/yesvelte/blob/dev/ROADMAP.md/).

## Community & Support

Use these channels to be part of the community, ask for help while using YeSvelte, or just learn more about it:

- [Reddit](https://www.reddit.com/r/yesvelte): This is the main channel to join the community. You can ask for help, showcase your work with YeSvelte, and stay up to date.
- [Discord](https://discord.gg/QkeQnNEQ7)
- [GitHub Issues](https://github.com/yesvelte/yesvelte/issues): for sending in any issues you face or bugs you find while using YeSvelte.
- [GitHub Discussions](https://github.com/yesvelte/yesvelte/discussions): for joining discussions and submitting your ideas.
