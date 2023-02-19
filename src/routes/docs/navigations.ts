export const base_path = '/docs'

export const navigations = [
	{
		title: 'Core Features',
		id: 'core-features',
		children: [
			{
				route: base_path + '/el/typography',
				title: 'Typography',
				icon: 'tabler:typography',
				description:
					'El component can be used to create headings. Headings are used to create a hierarchy of information on a page. They are used to create a visual hierarchy of information on a page.',
			},
			{
				route: base_path + '/el/colors',
				title: 'Colors',
				icon: 'ic:outline-color-lens',
				description:
					'Colors are used to add meaning to a user interface, help distinguish content, and establish hierarchy. They can also be used to create visual excitement and draw attention to parts of your layout.',
			},
			{
				route: base_path + '/el/spacing',
				title: 'Spacing',
				icon: 'radix-icons:column-spacing',
				description:
					'Margins are used to create space around elements, outside of any defined borders. Paddings are used to create space around the content of an element, inside of any defined borders.',
			},
			{
				route: base_path + '/el/borders',
				title: 'Borders',
				icon: 'material-symbols:border-style',
				description:
					'Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.',
			},
			{
				route: base_path + '/el/grid',
				title: 'Grid',
				icon: 'mdi:view-grid',
				description:
					'Learn how to use the grid layout system to create responsive, flexible grid-based layouts. Detailed documentation and examples provided on this page.',
			},
			{
				route: base_path + '/el/columns',
				title: 'Columns',
				icon: 'material-symbols:view-column',
				description:
					'Learn how to use columns to organize and structure your layout. Detailed documentation and examples provided on this page to help you create responsive and customizable columns in your projects.',
			},
			{
				route: base_path + '/el/backgrounds',
				title: 'Background',
				icon: 'fluent:color-background-24-regular',
				description:
					'Enhance the visual appeal of your projects with the help of the background customization options. This page provides detailed documentation and examples to guide you.',
			},
		],
	},
	{
		title: 'Components',
		children: [
			{
				route: base_path + '/alert',
				title: 'Alert',
				icon: 'radix-icons:alert',
				description:
					'Alert messages are used to inform users of the status of their action and help them solve any problems that might have occurred. Good design of alert modals is very important for the overall user experience of a website or app.',
			},
			{
				route: base_path + '/avatar',
				title: 'Avatar',
				icon: 'mdi:account-circle-outline',
				description:
					'Avatars help customise various elements of a user interface and make the product experience more personalised. They are often used in communication apps, collaboration tools and social media.',
			},
			{
				route: base_path + '/badge',
				title: 'Badge',
				icon: 'mdi:square-rounded-badge-outline',
				description:
					"Badges are small count and labeling components, which are used to add extra information to an interface element. You can use them to draw users' attention to a new element, notify about unread messages or provide any kind of additional info.",
			},
			{
				route: base_path + '/card',
				title: 'Card',
				icon: 'mdi:card-outline',
				description:
					'Cards are flexible user interface elements, which help organize content into meaningful sections and make it easier to display on different screen sizes.',
			},
			{
				route: base_path + '/divider',
				title: 'Divider',
				icon: 'radix-icons:divider-horizontal',
				description:
					'Dividers help organize content and make the interface layout clear and uncluttered. Greater clarity adds up to better user experience and enhanced interaction with a website or app.',
			},
			{
				route: base_path + '/dot',
				title: 'Dot',
				icon: 'radix-icons:dot',
				description:
					'Dots are particularly useful if you want to make an interface element more noticeable.',
			},
			{
				route: base_path + '/fieldset',
				title: 'Fieldset',
				icon: 'radix-icons:fieldset',
				description:
					'Group parts of your form to make it well-structured and clearer for users, using the Fieldset element.',
			},
			{
				route: base_path + '/icon',
				title: 'Icon',
				icon: 'tabler:star',
				description:
					'Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful. See the icons documentation from tabler-icons.',
			},
			{
				route: base_path + '/ribbon',
				title: 'Ribbon',
				icon: 'akar-icons:ribbon',
				description:
					'Ribbons are used to express something special on a card. In this page all the details about Ribbon component is described.',
			},
			{
				route: base_path + '/stamp',
				title: 'Stamp',
				icon: 'mdi:stamper',
				description: 'Use stamp component to make the card view more attractive and eye catching.',
			},
			{
				route: base_path + '/tabs',
				title: 'Tabs',
				icon: 'material-symbols:tab-outline',
				description:
					'Tabs are used to split content between multiple sections. They are useful when you have too much content to fit on a single page.',
			},
		],
	},
]
