export const base_path = '/docs'

export interface Navigation {
	title?: string
	id?: string
	route?: string
	icon?: string
	description?: string
	children?: Navigation[]
}

export const navigations: Navigation[] = [
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
				route: base_path + '/accordion',
				title: 'Accordion',
				icon: 'vaadin:accordion-menu',
				description:
					'Easily build interactive and user-friendly accordion using Accordion component. This page offers detailed documentation and examples to help you create a professional looking accordion component.',
			},
			{
				route: base_path + '/alert',
				title: 'Alert',
				icon: 'material-symbols:info-outline',
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
				route: base_path + '/breadcrumb',
				title: 'Breadcrumb',
				icon: 'fluent-mdl2:breadcrumb',
				description:
					'Breadcrumbs are used to show the current website or app location and reduce the number of actions users have to take. Thanks to breadcrumbs, they can easily navigate within the website hierarchy and better understand its structure.',
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
				route: base_path + '/form/form-fieldset',
				title: 'Fieldset',
				icon: 'fluent-mdl2:field-empty',
				description:
					'Group parts of your form to make it well-structured and clearer for users, using the Fieldset element.',
			},
			{
				route: base_path + '/form/form-input',
				title: 'FormInput',
				icon: 'iconoir:input-field',
				description:
					'FormInput is an input and label wrapper component to be used insisde forms. It supports all props and events of Input and also have some additional features.',
			},
			{
				route: base_path + '/icon',
				title: 'Icon',
				icon: 'tabler:star',
				description:
					'Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful. See the icons documentation from tabler-icons.',
			},
			{
				route: base_path + '/input',
				title: 'Input',
				icon: 'iconoir:input-field',
				description:
					'Input components are used for collecting user provided information. They can be used for text, numbers, passwords, emails, and more.',
			},
			{
				route: base_path + '/input-group',
				title: 'Input group',
				icon: 'fluent:group-list-24-regular',
				description:
					'Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.',
			},
			{
				route: base_path + '/label',
				title: 'Label',
				icon: 'pepicons:label',
				description:
					'Label component is used to set a name or some identifier for Form Elements. More details about this component is described in this page.',
			},
			{
				route: base_path + '/offcanvas',
				title: 'Offcanvas',
				icon: 'mdi:page-layout-sidebar-right',
				description:
					'Build hidden sidebars into your project for navigation, shopping carts, and more using Offcanvas.',
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
