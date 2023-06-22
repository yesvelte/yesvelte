export const base_path = '/docs'
export const example_path = '/demo'

export interface Navigation {
	title: string
	route: string
	id?: string
	icon?: string
	description?: string
	children?: Navigation[]
}

export const navigations: Navigation[] = [
	{
		title: 'Getting Started',
		id: 'getting-started',
		route: '/docs',
		children: [
			{
				title: 'Introduction',
				id: 'introduction',
				route: '/introduction',
				icon: 'tabler:file-text',
			},
			{
				title: 'Installation',
				id: 'installation',
				route: '/installation',
				icon: 'tabler:download',
			},
			{
				title: 'Theming',
				id: 'theming',
				route: '/theming',
				icon: 'tabler:color-swatch',
			},
		],
	},
	{
		title: 'Core Features',
		id: 'core-features',
		route: '/docs',
		children: [
			{
				route: '/el/typography',
				title: 'Typography',
				icon: 'tabler:typography',
				description:
					'El component can be used to create headings. Headings are used to create a hierarchy of information on a page. They are used to create a visual hierarchy of information on a page.',
			},
			{
				route: '/el/colors',
				title: 'Colors',
				icon: 'ic:outline-color-lens',
				description:
					'Colors are used to add meaning to a user interface, help distinguish content, and establish hierarchy. They can also be used to create visual excitement and draw attention to parts of your layout.',
			},
			{
				route: '/el/spacing',
				title: 'Spacing',
				icon: 'radix-icons:column-spacing',
				description:
					'Margins are used to create space around elements, outside of any defined borders. Paddings are used to create space around the content of an element, inside of any defined borders.',
			},
			{
				route: '/el/borders',
				title: 'Borders',
				icon: 'material-symbols:border-style',
				description:
					'Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons, or any other element.',
			},
			{
				route: '/el/grid',
				title: 'Grid',
				icon: 'mdi:view-grid',
				description:
					'Learn how to use the grid layout system to create responsive, flexible grid-based layouts. Detailed documentation and examples provided on this page.',
			},
			{
				route: '/el/columns',
				title: 'Columns',
				icon: 'material-symbols:view-column',
				description:
					'Learn how to use columns to organize and structure your layout. Detailed documentation and examples provided on this page to help you create responsive and customizable columns in your projects.',
			},
			{
				route: '/el/backgrounds',
				title: 'Background',
				icon: 'fluent:color-background-24-regular',
				description:
					'Enhance the visual appeal of your projects with the help of the background customization options. This page provides detailed documentation and examples to guide you.',
			},
			{
				route: '/el/forward-events',
				title: 'Event Forwarding',
				icon: 'tabler:speakerphone',
				description: 'All YeSvelte components support event forwarding.',
			},
		],
	},
	{
		title: 'Components',
		id: 'components',
		route: '/docs',
		children: [
			{
				route: '/accordion',
				title: 'Accordion',
				icon: 'vaadin:accordion-menu',
				description:
					'Easily build interactive and user-friendly accordion using Accordion component. This page offers detailed documentation and examples to help you create a professional looking accordion component.',
			},
			{
				route: '/alert',
				title: 'Alert',
				icon: 'material-symbols:info-outline',
				description:
					'Alert messages are used to inform users of the status of their action and help them solve any problems that might have occurred. Good design of alert modals is very important for the overall user experience of a website or app.',
			},
			{
				route: '/autocomplete',
				title: 'Autocomplete',
				icon: 'bi:menu-button-fill',
				description:
					'Autocomplete is a component that allows you to search and select a value from a list of options. It is a combination of a text input and a dropdown menu.',
			},
			{
				route: '/avatar',
				title: 'Avatar',
				icon: 'mdi:account-circle-outline',
				description:
					'Avatars help customise various elements of a user interface and make the product experience more personalised. They are often used in communication apps, collaboration tools and social media.',
			},
			{
				route: '/badge',
				title: 'Badge',
				icon: 'mdi:square-rounded-badge-outline',
				description:
					"Badges are small count and labeling components, which are used to add extra information to an interface element. You can use them to draw users' attention to a new element, notify about unread messages or provide any kind of additional info.",
			},
			{
				route: '/breadcrumb',
				title: 'Breadcrumb',
				icon: 'fluent-mdl2:breadcrumb',
				description:
					'Breadcrumbs are used to show the current website or app location and reduce the number of actions users have to take. Thanks to breadcrumbs, they can easily navigate within the website hierarchy and better understand its structure.',
			},
			{
				route: '/button',
				title: 'Button',
				icon: 'mdi:button-cursor',
				description:
					"Use Button component that best suit your designs and encourage users to take the desired actions. You can customize the Button's properties to improve the user experience of your website or system, changing the size, shape, color and many more.",
			},
			{
				route: '/button-group',
				title: 'ButtonGroup',
				icon: 'material-symbols:smart-button',
				description:
					'Group a series of buttons together on a single line or stack them in a vertical column.',
			},
			{
				route: '/card',
				title: 'Card',
				icon: 'mdi:card-outline',
				description:
					'Cards are flexible user interface elements, which help organize content into meaningful sections and make it easier to display on different screen sizes.',
			},
			{
				route: '/checkbox',
				title: 'Checkbox',
				icon: 'mdi:checkbox-outline',
				description:
					'Use Checkbox if you want to allow users to select more than one option from a set of predefined options or to turn an option on or off.',
			},
			{
				route: '/checkbox-group',
				title: 'CheckboxGroup',
				icon: 'mdi:checkbox-multiple-outline',
				description:
					'CheckboxGroup is a wrapper for Checkbox component, it can be used to group multiple checkboxes in one component.',
			},
			{
				route: '/date-picker',
				title: 'Datepicker',
				icon: 'material-symbols:date-range-outline',
			},

			{
				route: '/divider',
				title: 'Divider',
				icon: 'radix-icons:divider-horizontal',
				description:
					'Dividers help organize content and make the interface layout clear and uncluttered. Greater clarity adds up to better user experience and enhanced interaction with a website or app.',
			},
			{
				route: '/dot',
				title: 'Dot',
				icon: 'radix-icons:dot',
				description:
					'Dots are particularly useful if you want to make an interface element more noticeable.',
			},
			{
				route: '/dropdown',
				title: 'Dropdown',
				icon: 'radix-icons:dropdown-menu',
				description:
					'The dropdown component can be used to show a list of menu items when clicking on an element such as a button',
			},
			{
				route: '/editor',
				title: 'Editor',
				icon: 'gala:editor',
				description: 'The editor component is used to enable users write Rich Text content.',
			},
			{
				route: '/form/form-fieldset',
				title: 'Fieldset',
				icon: 'fluent-mdl2:field-empty',
				description:
					'Group parts of your form to make it well-structured and clearer for users, using the Fieldset element.',
			},
			{
				route: '/file-upload',
				title: 'FileUpload',
				icon: 'material-symbols:upload-file',
				description: 'FileUpload component is used for collecting files from local device of user.',
			},
			{
				route: '/floating',
				title: 'Floating',
				icon: 'material-symbols:apps',
				description: 'A floating component appears in front of all screen content.',
			},
			{
				route: '/icon',
				title: 'Icon',
				icon: 'tabler:star',
				description:
					'Free and open source icons designed to make your website or app attractive, visually consistent and simply beautiful. See the icons documentation from tabler-icons.',
			},
			{
				route: '/input',
				title: 'Input',
				icon: 'iconoir:input-field',
				description:
					'Input components are used for collecting user provided information. They can be used for text, numbers, passwords, emails, and more.',
			},
			{
				route: '/input-group',
				title: 'Input group',
				icon: 'fluent:group-list-24-regular',
				description:
					'Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.',
			},
			{
				route: '/label',
				title: 'Label',
				icon: 'pepicons:label',
				description:
					'Label component is used to set a name or some identifier for Form Elements. More details about this component is described in this page.',
			},
			{
				route: '/modal',
				title: 'Modal',
				icon: 'vaadin:modal',
				description:
					'The Modal component is a basic way to present content above an enclosing view.',
			},
			{
				route: '/navbar',
				title: 'Navbar',
				icon: 'tabler:layout-navbar',
				description:
					'The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns.',
			},
			{
				route: '/offcanvas',
				title: 'Offcanvas',
				icon: 'mdi:page-layout-sidebar-right',
				description:
					'Build hidden sidebars into your project for navigation, shopping carts, and more using Offcanvas.',
			},
			{
				route: '/pagination',
				title: 'Pagination',
				icon: 'mdi:dots-horizontal',
				description:
					'The Pagination component enables the user to select a specific page from a range of pages.',
			},
			{
				route: '/popover',
				title: 'Popover',
				icon: 'mdi:tooltip-image',
				description:
					'Popovers are used to provide additional information on elements where a simple tooltip is not sufficient',
			},
			{
				route: '/progress',
				title: 'Progress',
				icon: 'vaadin:progressbar',
				description: 'Progress component is used to show the progress of a task.',
			},
			{
				route: '/radio',
				title: 'Radio',
				icon: 'mdi:radiobox-marked',
				description:
					'Create consistent cross-browser and cross-device radios with Radio component.',
			},
			{
				route: '/radio-group',
				title: 'RadioGroup',
				icon: 'bi:ui-radios',
				description:
					'RadioGroup is a wrapper for Radio component, it can be used to group multiple radios in one component.',
			},
			{
				route: '/ribbon',
				title: 'Ribbon',
				icon: 'akar-icons:ribbon',
				description:
					'Ribbons are used to express something special on a card. In this page all the details about Ribbon component is described.',
			},
			{
				route: '/select',
				title: 'Select',
				icon: 'vaadin:select',
				description:
					'Select component is used to let users choose from a predefined set of options. It can be single select or multi select.',
			},
			{
				route: '/sidebar',
				title: 'Sidebar',
				icon: 'mdi:page-layout-sidebar-right',
				description:
					'The Sidebar is an expandable and collapsible component that typically acts as a side container to place primary or secondary content alongside the main content.',
			},
			{
				route: '/stamp',
				title: 'Stamp',
				icon: 'mdi:stamper',
				description: 'Use stamp component to make the card view more attractive and eye catching.',
			},
			{
				route: '/steps',
				title: 'Steps',
				icon: 'material-symbols:check-circle',
				description:
					'Steps component guides users through the steps of a task. It is a kind of navigation bar.',
			},
			{
				route: '/slider',
				title: 'Slider',
				icon: 'radix-icons:slider',
				description: 'Slider allow users to make selections from a range of values.',
			},
			{
				route: '/spinner',
				title: 'Spinner',
				icon: 'ei:spinner-3',
				description: 'Spinners are used to show the loading state of a component.',
			},
			{
				route: '/status',
				title: 'Status',
				icon: 'bi:dot',
				description: 'Status component is used to show the status of a component.',
			},
			{
				route: '/switch',
				title: 'Switch',
				icon: 'mdi:toggle-switch-outline',
				description:
					'The Switch component provides users the ability to choose between two distinct values. These are very similar to a toggle, or on/off switch, though aesthetically different than a Switch.',
			},
			{
				route: '/table',
				title: 'Table',
				icon: 'mdi:table',
				description:
					'Tables are a useful interface element that allows to visualise data and arrange it in a clear way. Thanks to that, users can browse a lot of information at once and a good table design will help you take care of its clarity.',
			},
			{
				route: '/tabs',
				title: 'Tabs',
				icon: 'material-symbols:tab-outline',
				description:
					'Tabs are used to split content between multiple sections. They are useful when you have too much content to fit on a single page.',
			},
			{
				route: '/textarea',
				title: 'Textarea',
				icon: 'mdi:form-textarea',
			},
			{
				route: '/toast',
				title: 'Toast',
				icon: 'mdi:alert-circle-outline',
				description:
					'Toasts are lightweight alert boxes which display for a few seconds after a user has taken an action, to inform them of the state or outcome.',
			},
			{
				route: '/tooltip',
				title: 'Tooltip',
				icon: 'mdi:tooltip-text',
				description:
					'Tooltips are text labels which appear when a user hovers over an interface element.',
			},
		],
	},
	{
		title: 'Form Components',
		id: 'menu-forms',
		route: '/docs',
		children: [
			{
				route: '/form/form-autocomplete',
				title: 'FormAutocomplete',
				icon: 'bi:menu-button-fill',
				description:
					'FormAutocomplete supports all props and events of Autocomplete and also have some additional features.',
			},
			{
				route: '/form/form-checkbox',
				title: 'FormCheckbox',
				icon: 'mdi:checkbox-outline',
			},
			{
				route: '/form/form-checkbox-group',
				title: 'FormCheckboxGroup',
				icon: 'mdi:checkbox-multiple-outline',
			},
			{
				route: '/form/form-datepicker',
				title: 'FormDatePicker',
				icon: 'material-symbols:date-range-outline',
			},
			{
				route: '/form/form-editor',
				title: 'FormEditor',
				icon: 'gala:editor',
			},
			{
				route: '/form/form-fieldset',
				title: 'FormFieldset',
				icon: 'fluent-mdl2:field-empty',
			},
			{
				route: '/form/form-file-upload',
				title: 'FormFileUpload',
				icon: 'material-symbols:upload-file',
			},
			{
				route: '/form/form-input',
				title: 'FormInput',
				icon: 'iconoir:input-field',
			},
			{
				route: '/form/form-radio-group',
				title: 'FormRadioGroup',
				icon: 'bi:ui-radios',
			},
			{
				route: '/form/form-select',
				title: 'FormSelect',
				icon: 'vaadin:select',
			},
			{
				route: '/form/form-slider',
				title: 'FormSlider',
				icon: 'radix-icons:slider',
				description: 'FormSlider allow users to make selections from a range of values.',
			},
			{
				route: '/form/form-switch',
				title: 'FormSwitch',
				icon: 'mdi:toggle-switch-outline',
			},
			{
				route: '/form/form-textarea',
				title: 'FormTextarea',
				icon: 'mdi:form-textarea',
			},
		],
	},
	{
		title: 'Examples',
		id: 'menu-examples',
		route: '/demo',
		children: [
			{
				route: '/form-elements',
				title: 'Form elements',
				icon: 'tabler:app-window',
				description: 'A sample page that provides usages of form elements.',
			},
			{
				route: '/pricing-cards',
				title: 'Pricing cards',
				icon: 'tabler:app-window',
				description: 'A page to display sample pricing cards.',
			},
			{
				route: '/pricing-table',
				title: 'Pricing table',
				icon: 'tabler:app-window',
				description: 'A page to display sample pricing table.',
			},
			{
				route: '/faq',
				title: 'FAQs',
				icon: 'tabler:app-window',
				description: 'A sample FAQ page.',
			},
			{
				route: '/widgets',
				title: 'Widgets',
				icon: 'tabler:app-window',
				description: 'A sample page that provides samples of different widgets.',
			},
			{
				route: '/authentication/sign-in',
				title: 'Sign in',
				icon: 'tabler:app-window',
				description: 'A sample sign in page implemented with YeSvelte components.',
			},
			{
				route: '/authentication/sign-in-illustration',
				title: 'Sign in with illustration',
				icon: 'tabler:app-window',
				description:
					'A sample sign in page with illustration implemented with YeSvelte components.',
			},
			{
				route: '/authentication/sign-in-cover',
				title: 'Sign in with cover',
				icon: 'tabler:app-window',
				description: 'A sample sign in page with cover image implemented with YeSvelte components.',
			},
			{
				route: '/authentication/sign-up',
				title: 'Sign up',
				icon: 'tabler:app-window',
				description: 'A sample sign up page implemented with YeSvelte components.',
			},
			{
				route: '/authentication/forgot-password',
				title: 'Forgot password',
				icon: 'tabler:app-window',
				description: 'A sample forgot password page implemented with YeSvelte components.',
			},
		],
	},
]
