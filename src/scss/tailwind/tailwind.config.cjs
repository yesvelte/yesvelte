module.exports = {
	// prefix: '',
	content: [],
	theme: {
		fontFamily: {
			sans: [
				'-apple-system',
				'BlinkMacSystemFont',
				'San Francisco',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'sans-serif',
			],
			mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
	safelist: [
		{
			pattern: /.*/,
			// variants: ['sm', 'md', 'lg', 'xl', '2xl'],
			// variants: [
			// 	'first',
			// 	'last',
			// 	'odd',
			// 	'even',
			// 	'visited',
			// 	'checked',
			// 	'empty',
			// 	'read-only',
			// 	'group-hover',
			// 	'group-focus',
			// 	'focus-within',
			// 	'hover',
			// 	'focus',
			// 	'focus-visible',
			// 	'active',
			// 	'disabled',
			// ],
		},
	],
}
