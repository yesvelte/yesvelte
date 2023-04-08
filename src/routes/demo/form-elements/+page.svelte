<script lang="ts">
	import CardFooter from '$lib/card/CardFooter.svelte'
	import CardHeader from '$lib/card/CardHeader.svelte'
	import CheckboxGroup from '$lib/checkbox/CheckboxGroup.svelte'
	import DatePicker from '$lib/date-picker/DatePicker.svelte'
	import FormCheckboxGroup from '$lib/form/FormCheckboxGroup.svelte'
	import FormFileUpload from '$lib/form/FormFileUpload.svelte'
	import FormRadioGroup from '$lib/form/FormRadioGroup.svelte'
	import Popover from '$lib/popover/Popover.svelte'
	import Radio from '$lib/radio/Radio.svelte'
	import TableCell from '$lib/table/TableCell.svelte'
	import TableHead from '$lib/table/TableHead.svelte'
	import {
		El,
		FormInput,
		Button,
		Card,
		CardBody,
		Icon,
		Table,
		TableBody,
		Select,
		Progress,
		Label,
		FormTextarea,
		ProgressBar,
		FormSelect,
		Input,
		FormField,
		PopoverBody,
		FormCheckbox,
		Fieldset,
		Checkbox,
		ButtonGroup,
		Switch,
		FormSwitch,
		SliderKnob,
		Slider,
		FormAutocomplete,
		Avatar,
		CardActions,
		TableRow,
		Badge,
		DropdownMenu,
		Dropdown,
		DropdownItem,
	} from 'yesvelte'

	let items = ['One', 'Two', 'Three']
	let selectedValue = 'One'
	let radioItems = ['Option 1', 'Option 2', 'Option 3', 'Option 4']
	let radioValue = radioItems[1]
	let checkboxItems = [
		{
			label: 'Default checkbox',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
		},
		{
			label: 'Longer checkbox item that wraps on to two separate lines',
			description: 'It has survived not only five centuries.',
		},
		{
			label: 'Default checkbox without description',
			description:
				'It was popularised in the 1960s with the release of Letraset sheets containing Lorem.',
		},
	]
	let checked = true
	let selectedDate = {
		year: 1989,
		month: 'June',
		day: 20,
	}
	let monthItems = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]
	let yearItems = [
		1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
		1996, 1997, 1998, 1999, 2000,
	]
	let dayItems = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
		27, 28, 29, 30, 31,
	]

	const dateOptions = {
		inputFormat: '--/--/----',
		showMaskOnHover: false,
		clearMaskOnLostFocus: false,
		oncomplete: function (e) {
			console.log(e.target.value)
		},
	}
	const timeOptions = {
		inputFormat: '--:--:--',
		showMaskOnHover: false,
		clearMaskOnLostFocus: false,
		oncomplete: function (e) {
			console.log(e.target.value)
		},
	}
	const dateTimeOptions = {
		inputFormat: '--/--/---- --:--:--',
		showMaskOnHover: false,
		clearMaskOnLostFocus: false,
		oncomplete: function (e) {
			console.log(e.target.value)
		},
	}

	const maskOptions = {
		clearMaskOnLostFocus: false,
		showMaskOnHover: false,
	}

	let knobstart1 = 70
	let knobstart2 = 30
	let knobstart3 = 40
	let knobend = 80

	let countries = ['Poland', 'Germany', 'Czech Republic', 'Brazil']
	let tags = ['HTML', 'JavaScript', 'CSS', 'jQuery', 'Bootstrap', 'Svelte']
	let itemsWithImage = [
		{ name: 'John Smith', img: '/images/avatars/1.jpg' },
		{ name: 'Jane Smith', img: '/images/avatars/2.jpg' },
		{ name: 'Mike Doe', img: '/images/avatars/3.jpg' },
		{ name: 'Oscar Edwards', img: '/images/avatars/6.jpg' },
	]
	let itemsWithFlag = [
		{ flag: '/images/flags/pl.svg', name: 'Poland' },
		{ flag: '/images/flags/de.svg', name: 'Germany' },
		{ flag: '/images/flags/cz.svg', name: 'Czech Republic' },
		{ flag: '/images/flags/br.svg', name: 'Brazil' },
	]
	let itemsWithLabel = [
		{ command: 'cmd + c', name: 'Copy' },
		{ command: 'cmd + v', name: 'Pate' },
		{ command: 'cmd + x', name: 'Cut' },
		{ command: 'cmd + z', name: 'Undo' },
	]
	let comparisonItems = [
		'Equals',
		'Not equals',
		'Has key',
		'Not has key',
		'Has value',
		'Not has value',
		'Is empty',
		'Is not empty',
		'Greater than',
		'Less than',
	]
	let sourceItems = ['Status code', 'JSON body', 'Headers', 'Text body', 'Response time']
	let selectedItemWithLabel = 'Copy'
	let selectedItemWithAvatar = itemsWithImage[0].name
</script>

<El container="xl">
	<El tag="h1" my="3">Form Elements</El>
	<Card title="Form Elements" mb="3">
		<CardBody>
			<El row>
				<El colXl="4" colLg="12">
					<Label>Static</Label>
					<El mb="3">Input value</El>
					<FormInput label="Text" placeholder="Input Placeholder" />
					<FormInput label="Password" placeholder="Input Placeholder" type="password" />
					<FormInput label="Disabled" disabled value="Well, she turned me into a newt." />
					<FormInput label="Readonly" value="Well, how'd you become king, then?" readonly />
					<FormInput label="Required" placeholder="Required..." required />
					<FormTextarea
						label="Textarea"
						rows="6"
						placeholder="Content..."
						value="Oh! Come and see the violence inherent in the system! Help, help, I'm being repressed! We shall say 'Ni' again to you, if you do not appease us. I'm not a witch. I'm not a witch. Camelot!" />
					<FormSelect bind:value={selectedValue} {items} label="Select" />
					<FormField label="Input group">
						<Input placeholder="Search for...">
							<Button slot="end">Go!</Button>
						</Input>
						<El mb="2" />
						<Input>
							<Dropdown placement="bottom-start">
								<Button slot="target">Action</Button>
								<DropdownMenu>
									<DropdownItem>Action</DropdownItem>
									<DropdownItem>Another Action</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</Input>
					</FormField>
					<FormField>
						<Input>
							<ButtonGroup slot="end">
								<Button>Action</Button>
								<Dropdown placement="bottom-end">
									<Button slot="target" />
									<DropdownMenu>
										<DropdownItem>Action</DropdownItem>
										<DropdownItem>Another Action</DropdownItem>
									</DropdownMenu>
								</Dropdown>
							</ButtonGroup>
						</Input>
					</FormField>
					<FormField>
						<Label>Icon Input</Label>
						<Input placeholder="Search...">
							<Button slot="end"><Icon name="search" /></Button>
						</Input>
					</FormField>
					<FormField>
						<Input placeholder="Username">
							<Button slot="start"><Icon name="user" /></Button>
						</Input>
					</FormField>
					<FormField>
						<Label slot="label">Separated inputs</Label>
						<El d="flex">
							<Input placeholder="Search for..." me="2" />
							<Button><Icon name="search" /></Button>
						</El>
					</FormField>
					<FormField>
						<Label slot="label">Input with help icon</Label>
						<El d="flex">
							<Input placeholder="Search for..." me="2" />
							<El alignSelf="center" class="form-help"><Icon name="question-mark" /></El>
							<Popover trigger="click" placement="top">
								<PopoverBody>
									<p>
										ZIP Code must be US or CDN format. You can use an extended ZIP+4 code to
										determine address more accurately.
									</p>
									<p class="mb-0"><a href="#">USP ZIP codes lookup tools</a></p>
								</PopoverBody>
							</Popover>
						</El>
					</FormField>
					<FormField>
						<FormInput label="Form control rounded" borderRounded placeholder="Text..." />
						<Input placeholder="Search..." borderRounded>
							<Button slot="end"><Icon name="search" /></Button>
						</Input>
					</FormField>
					<FormInput label="Form control flush" borderFlush placeholder="Text..." />
					<FormField>
						<Label>Input group</Label>
						<Input placeholder="Username">
							<span slot="start">@</span>
						</Input>
						<El mb="2" />
						<Input placeholder="subdomain">
							<span slot="end">.yesvelte.com</span>
						</Input>
						<El mb="2" />
						<Input placeholder="subdomain">
							<span slot="start">https://</span>
							<span slot="end">.yesvelte.com</span>
						</Input>
					</FormField>
					<FormField>
						<Label>Input with checkbox or radios</Label>
						<Input>
							<span slot="start">
								<input
									class="form-check-input mt-0"
									type="checkbox"
									value=""
									aria-label="Checkbox for following text input" />
							</span>
						</Input>
						<El mb="2" />
						<Input>
							<span slot="end">
								<input
									class="form-check-input mt-0"
									type="radio"
									value=""
									aria-label="Radio button for following text input" />
							</span>
						</Input>
					</FormField>
					<FormField row label="Form buttons" g="2">
						<El col="6">
							<Button col="12">
								<Icon name="brand-github" />
								Login with Github
							</Button>
						</El>
						<El col="6">
							<Button col="12">
								<Icon name="brand-twitter" color="twitter" />
								Login with Twitter
							</Button>
						</El>
					</FormField>
					<FormField label="Advanced select with validation state">
						<FormSelect items={countries} state="valid" bind:value={countries[2]} />
						<FormSelect items={countries} state="invalid" bind:value={countries[1]} />
					</FormField>
				</El>
				<El colXl="4" colLg="12">
					<FormField label="Validation States">
						<Input placeholder="Valid State.." state="valid" />
						<Input placeholder="Invalid State" state="invalid" mt="2" />
					</FormField>
					<FormField label="Form fieldset">
						<Fieldset>
							<FormInput label="Full name" required />
							<FormInput label="Company" required />
							<FormInput label="Email" required />
							<FormInput label="Phone number" />
							<FormCheckbox required label="I agree to the Terms & Conditions">
								I agree
							</FormCheckbox>
						</Fieldset>
					</FormField>
					<FormField label="Buttons group">
						<ButtonGroup col="12">
							<Button>1 min</Button>
							<Button>5 min</Button>
							<Button>10 min</Button>
							<Button>30 min</Button>
						</ButtonGroup>
					</FormField>
					<FormField label="Vertical buttons group">
						<ButtonGroup col="6" vertical>
							<Button>Button 1</Button>
							<Button>Button 2</Button>
							<Button>Button 3</Button>
							<Button>Button 4</Button>
							<Button>Button 5</Button>
						</ButtonGroup>
					</FormField>
					<FormField label="Toolbar">
						<ButtonGroup col="12">
							<Button><Icon name="bold" /></Button>
							<Button><Icon name="italic" /></Button>
							<Button><Icon name="link" /></Button>
							<Button><Icon name="copy" /></Button>
							<Button><Icon name="cut" /></Button>
							<Button><Icon name="file-plus" /></Button>
							<Button><Icon name="file-minus" /></Button>
						</ButtonGroup>
					</FormField>
					<FormField label="Payment method">
						<Radio name="payment" checked>
							<span class="payment payment-visa me-1 mb-1" />
							ending in <strong>7998</strong>
						</Radio>
						<Radio name="payment">
							<span class="payment payment-master me-1" />
							ending in <strong>7998</strong>
						</Radio>
						<Radio name="payment">
							<span class="payment payment-paypal me-1" />
							ending in <strong>7998</strong>
						</Radio>
					</FormField>
					<FormField label="Project Manager">
						<El alignItems="center" d="flex" mb="2">
							<Checkbox checked />
							<Avatar ms="2"><img src="/images/avatars/1.jpg" /></Avatar>
							<El tag="span" mx="2">John Smith</El>
						</El>
						<El alignItems="center" d="flex" mb="2">
							<Checkbox />
							<Avatar ms="2"><img src="/images/avatars/3.jpg" /></Avatar>
							<El tag="span" mx="2">Jack Doe</El>
						</El>
						<El alignItems="center" d="flex" mb="2">
							<Checkbox />
							<Avatar ms="2"><img src="/images/avatars/2.jpg" /></Avatar>
							<El tag="span" mx="2">Jane Smith</El>
						</El>
						<El alignItems="center" d="flex" mb="2">
							<Checkbox />
							<Avatar ms="2"><img src="/images/avatars/6.jpg" /></Avatar>
							<El tag="span" mx="2">James Edwards</El>
						</El>
					</FormField>
					<FormAutocomplete items={tags} label="Tags input" />
					<FormAutocomplete
						key={(item) => item.name}
						items={itemsWithImage}
						label="Select with avatars"
						bind:value={selectedItemWithAvatar}
						let:item>
						<El d="flex" alignItems="center">
							<Avatar size="xs" me="2">
								<img src={item.img} />
							</Avatar>
							{item.name}
						</El>
						<El d="flex" alignItems="center" slot="selected">
							<Avatar size="xs" me="2">
								<img src={item.img} />
							</Avatar>
							{item.name}
						</El>
					</FormAutocomplete>
					<FormAutocomplete
						key={(item) => item.name}
						items={itemsWithFlag}
						label="Select with flags"
						let:item>
						<El d="flex" alignItems="center">
							<El tag="img" width="30" me="2" src={item.flag} />
							{item.name}
						</El>
					</FormAutocomplete>
					<FormAutocomplete
						key={(item) => item.name}
						items={itemsWithLabel}
						label="Select with labels"
						bind:value={selectedItemWithLabel}
						let:item>
						<El d="flex" alignItems="center">
							<Badge ghost color="primary" me="1">{item.command}</Badge>
							{item.name}
						</El>
						<El d="flex" alignItems="center" slot="selected">
							<Badge ghost color="primary" me="1">{item.command}</Badge>
							{item.name}
						</El>
					</FormAutocomplete>
				</El>
				<El colXl="4" colLg="12">
					<FormRadioGroup label="Radios" bind:value={radioValue} items={radioItems} />
					<FormRadioGroup label="Inline Radios" inline bind:value={radioValue} items={radioItems} />
					<FormField label="Checkboxes">
						<Checkbox>Checkbox input</Checkbox>
						<Checkbox disabled>Disabled checkbox input</Checkbox>
						<Checkbox checked>Checked checkbox input</Checkbox>
					</FormField>
					<FormField label="Inline Checkboxes">
						<Checkbox inline>Option 1</Checkbox>
						<Checkbox inline disabled>Option 2</Checkbox>
						<Checkbox inline checked>Option 3</Checkbox>
					</FormField>
					<FormField label="Checkboxes with description">
						<FormCheckbox
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
							Default checkbox
						</FormCheckbox>
						<FormCheckbox description="It has survived not only five centuries.">
							Longer checkbox item that wraps on to two separate lines
						</FormCheckbox>
						<FormCheckbox
							description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem.">
							Default checkbox without description
						</FormCheckbox>
					</FormField>
					<FormField label="Toggle switches">
						<Switch bind:checked label="Option 1" color="primary" />
						<Switch label="Option 2" color="primary" />
						<Switch label="Option 3" color="primary" />
					</FormField>
					<FormSwitch label="Single Switch">I agree with terms and conditions</FormSwitch>
					<FormField label="Notification">
						<FormField borderBottom>
							<El row mb="2">
								<El col>Push Notifications</El>
								<El col="auto">
									<Switch color="primary" bind:checked />
								</El>
							</El>
						</FormField>
						<FormField borderBottom>
							<El row mb="2">
								<El col>SMS Notifications</El>
								<El col="auto">
									<Switch color="primary" />
								</El>
							</El>
						</FormField>
						<FormField>
							<El row>
								<El col>Email Notifications</El>
								<El col="auto">
									<Switch color="primary" bind:checked />
								</El>
							</El>
						</FormField>
					</FormField>
					<FormFileUpload label="Custom File Input" />
					<FormField label="Date of birth" row g="2">
						<FormSelect col="5" bind:value={selectedDate.month} items={monthItems} />
						<FormSelect col="3" bind:value={selectedDate.day} items={dayItems} />
						<FormSelect col="4" bind:value={selectedDate.year} items={yearItems} />
					</FormField>
					<FormInput label="Text mask" mask="datetime" maskOptions={dateOptions} />
					<FormInput label="Telephone mask" mask="(999) 999-9999" {maskOptions} />
					<FormField label="Range input">
						<Slider>
							<SliderKnob bind:value={knobstart1} />
						</Slider>
						<El mb="2" />
						<Slider connect>
							<SliderKnob bind:value={knobstart2} />
						</Slider>
						<El mb="2" />
						<Slider>
							<SliderKnob connect bind:value={knobstart3} />
							<SliderKnob bind:value={knobend} />
						</Slider>
						<El mb="2" />
						<Slider color="green" connect>
							<SliderKnob bind:value={knobstart1} />
						</Slider>
					</FormField>
					<FormField label="Datepicker">
						<DatePicker />
					</FormField>
					<FormField label="Progress">
						<Progress mb="2">
							<ProgressBar value="35" />
						</Progress>
						<Progress>
							<ProgressBar color="success" indeterminate />
						</Progress>
					</FormField>
				</El>
			</El>
		</CardBody>
		<CardFooter>
			<El d="flex" w="100">
				<Button link ghost href=".">Cancel</Button>
				<Button color="primary" ms="auto">Save</Button>
			</El>
		</CardFooter>
	</Card>
	<El row>
		<El colMd="6" mb="3">
			<Card>
				<CardBody>
					<El tag="h3">Project ID</El>
					<El mb="2">Used when interacting with the API.</El>
					<Input value="prj_5ae74426fe935327a8fa178b07d84ad9" placeholder="Search...">
						<Button slot="end"><Icon name="copy" /></Button>
					</Input>
				</CardBody>
				<CardFooter>
					<El d="flex" w="100">
						<El alignSelf="center">Learn more about <a href="">Project ID</a></El>
						<Button color="primary" ms="auto">Save</Button>
					</El>
				</CardFooter>
			</Card>
		</El>
		<El colMd="6" mb="3">
			<Card>
				<CardBody>
					<El tag="h3">Node.js Version</El>
					<El mb="2"
						>The version of Node.js that is used in the Build Step and for Serverless Functions. A
						new Deployment is required for your changes to take effect.</El>
					<Select items={['14.x', '12.x']} value="14.x" />
				</CardBody>
				<CardFooter>
					<El alignSelf="center">Learn more about <a href="">Node.js Version</a></El>
				</CardFooter>
			</Card>
		</El>

		<El colMd="6" mb="3">
			<Card title="Basic form">
				<CardBody>
					<FormInput
						label="Email address"
						required
						placeholder="Enter email"
						hint="We will never share your email with anyone else." />
					<FormInput
						label="Password"
						required
						placeholder="Password"
						hint="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji." />
					<FormSelect items={radioItems} value={radioValue} />
					<FormCheckboxGroup label="Checkboxes" items={radioItems} value={[radioValue]} />
				</CardBody>
				<CardFooter>
					<CardActions>
						<Button color="primary" ms="auto">Submit</Button>
					</CardActions>
				</CardFooter>
			</Card>
		</El>
		<El colMd="6" mb="3">
			<Card title="Horizontal form">
				<CardBody>
					<FormInput
						label="Email address"
						required
						placeholder="Enter email"
						hint="We will never share your email with anyone else." />
					<FormInput
						label="Password"
						required
						placeholder="Password"
						hint="Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji." />
					<FormSelect items={radioItems} value={radioValue} />
					<FormCheckboxGroup label="Checkboxes" items={radioItems} value={[radioValue]} />
				</CardBody>
				<CardFooter>
					<CardActions>
						<Button color="primary" ms="auto">Submit</Button>
					</CardActions>
				</CardFooter>
			</Card>
		</El>
		<El colMd="4" mb="3">
			<Card title="Input mask" mb="3">
				<CardBody>
					<FormInput label="Date" mask="datetime" maskOptions={dateOptions} />
					<FormInput label="Hour" mask="99:99:99" maskOptions={timeOptions} />
					<FormInput label="Date & Time" mask="99/99/9999 99:99:99" maskOptions={dateTimeOptions} />
					<FormInput label="Postal Code" mask="A9A-9A9" {maskOptions} />
					<FormInput label="Telephone" mask="999-9999" {maskOptions} />
					<FormInput label="Telephone with Code Area" mask="(999) 999-9999" {maskOptions} />
					<FormInput label="IP Address" mask="999.999.999.999" {maskOptions} />
				</CardBody>
				<CardFooter>
					<CardActions>
						<Button color="primary" ms="auto">Submit</Button>
					</CardActions>
				</CardFooter>
			</Card>
			<Card title="My Profile">
				<CardBody>
					<El row>
						<El col="auto">
							<Avatar size="md"><img src="/images/avatars/6.jpg" /></Avatar>
						</El>
						<El col>
							<FormInput label="Email-Address" placeholder="your-email@domain.com" />
						</El>
					</El>
					<FormTextarea
						label="Bio"
						rows="5"
						value="Big belly rude boy, million dollar hustler. 
Unemployed." />
					<FormInput label="Email-Address" value="" placeholder="your-email@domain.com" />
					<FormInput label="Password" type="password" value="123456" placeholder="Password" />
				</CardBody>
				<CardFooter>
					<CardActions>
						<Button color="primary" ms="auto">Save</Button>
					</CardActions>
				</CardFooter>
			</Card>
		</El>
		<El colMd="8" mb="3">
			<Card mb="3">
				<CardBody>
					<El tag="h3" mb="3">Edit Profile</El>
					<El row mb="3">
						<El colMd="5">
							<FormInput label="Company" value="Creative Code Inc." disabled />
						</El>
						<El colMd="3">
							<FormInput label="Username" value="michael23" placeholder="Username" />
						</El>
						<El colMd="4">
							<FormInput label="Email address" value="" placeholder="Email" />
						</El>
					</El>
					<El row mb="3">
						<El colMd="6">
							<FormInput label="First Name" value="John" placeholder="First name" />
						</El>
						<El colMd="6">
							<FormInput label="Last Name" value="Smith" placeholder="Last name" />
						</El>
					</El>
					<FormInput label="Address" value="Toronto, Canada" placeholder="Home Address" />
					<El row mt="4" mb="3">
						<El colMd="4">
							<FormInput label="City" value="Toronto" placeholder="City" />
						</El>
						<El colMd="3">
							<FormInput label="Postal Code" value="Toronto" placeholder="Postal Code" />
						</El>
						<El colMd="5">
							<FormSelect
								label="Country"
								value="Canada"
								placeholder="Country"
								items={['Canada', 'USA', 'Germany', 'UK', 'France']} />
						</El>
					</El>
					<FormTextarea
						label="About Me"
						rows="5"
						value="Oh so, your weak rhyme
You doubt I'll bother, reading into it
I'll probably won't, left to my own devices
But that's the difference in our opinions." />
				</CardBody>
				<CardFooter>
					<CardActions>
						<Button color="primary" ms="auto">Update Profile</Button>
					</CardActions>
				</CardFooter>
			</Card>

			<Card title="HTTP Request">
				<CardBody>
					<El row>
						<El colSm="3">
							<FormSelect
								label="Method"
								required
								items={['GET', 'POST', 'PUT', 'HEAD', 'PATCH']}
								value="GET" />
						</El>
						<El colSm="9">
							<FormInput
								label="URL"
								required
								value="https://content.googleapis.com/discovery/v1/apis/surveys/v2/rest"
								placeholder="http://domain.tld" />
						</El>
					</El>
					<Label>Assertions</Label>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Source</TableCell>
								<TableCell>Property</TableCell>
								<TableCell>Comparison</TableCell>
								<TableCell>Target</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>
									<Select value="Status code" items={sourceItems} />
								</TableCell>
								<TableCell>
									<Input />
								</TableCell>
								<TableCell>
									<Select value="Equals" items={comparisonItems} />
								</TableCell>
								<TableCell>
									<Input value="200" />
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									<Select value="JSON body" items={sourceItems} />
								</TableCell>
								<TableCell>
									<Input value="parameters.alt.type" />
								</TableCell>
								<TableCell>
									<Select value="Has value" items={comparisonItems} />
								</TableCell>
								<TableCell>
									<Input value="string" />
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									<Select value="Response time" items={sourceItems} />
								</TableCell>
								<TableCell>
									<Input />
								</TableCell>
								<TableCell>
									<Select value="Less than" items={comparisonItems} />
								</TableCell>
								<TableCell>
									<Input value="500" />
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									<Select value="Headers" items={sourceItems} />
								</TableCell>
								<TableCell>
									<Input value="content-type" />
								</TableCell>
								<TableCell>
									<Select value="Equals" items={comparisonItems} />
								</TableCell>
								<TableCell>
									<Input value="application/json; charset=UTF-8" />
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardBody>
				<CardFooter>
					<CardActions>
						<Button color="primary" ms="auto">Make request</Button>
					</CardActions>
				</CardFooter>
			</Card>
		</El>
	</El>
</El>

<style>
	.form-help {
		display: inline-flex;
		font-weight: var(--tblr-font-weight-bold);
		align-items: center;
		justify-content: center;
		width: 1.125rem;
		height: 1.125rem;
		font-size: 0.75rem;
		color: var(--tblr-muted);
		text-align: center;
		text-decoration: none;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		background: var(--tblr-gray-100);
		border-radius: 100rem;
		transition: background-color 0.3s, color 0.3s;
	}
	.payment {
		width: 2.49999rem;
		height: 1.5rem;
		display: inline-block;
		background: no-repeat center/100% 100%;
		vertical-align: middle;
		font-style: normal;
		box-shadow: 0 0 1px 1px rgb(0 0 0 / 10%);
		border-radius: 2px;
	}
	.payment-visa {
		background-image: url('/images/visa.svg');
	}
	.payment-master {
		background-image: url('/images/mastercard.svg');
	}
	.payment-paypal {
		background-image: url('/images/paypal.svg');
	}
</style>
