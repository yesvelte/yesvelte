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
		{ name: 'James Cameron', img: '/images/avatars/1.jpg' },
		{ name: 'Sam Worthington', img: '/images/avatars/2.jpg' },
		{ name: 'Zoe Saldana', img: '/images/avatars/3.jpg' },
		{ name: 'Kate Winslet', img: '/images/avatars/4.jpg' },
		{ name: 'Jamie Flatters', img: '/images/avatars/5.jpg' },
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
</script>

<El container="xl">
	<El tag="h1" my="3">Form Elements</El>
	<Card title="Form Elements" mb="3">
		<CardBody>
			<El row>
				<El colXl="4" colLg="12">
					<Label>Static</Label>
					<El>Input value</El>
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
					<FormField>
						<Label slot="label">Input group</Label>
						<Input placeholder="Search for...">
							<Button slot="end">Go!</Button>
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
							<El alignSelf="center"><Icon name="question-mark" /></El>
							<Popover trigger="click">
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
							<Button icon><Icon name="bold" /></Button>
							<Button icon><Icon name="italic" /></Button>
							<Button icon><Icon name="link" /></Button>
							<Button icon><Icon name="copy" /></Button>
							<Button icon><Icon name="cut" /></Button>
							<Button icon><Icon name="file-plus" /></Button>
							<Button icon><Icon name="file-minus" /></Button>
						</ButtonGroup>
					</FormField>
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
					<FormField label="Date of birth">
						<El row>
							<El col="5">
								<FormSelect bind:value={selectedDate.month} items={monthItems} />
							</El>
							<El col="3">
								<FormSelect bind:value={selectedDate.day} items={dayItems} />
							</El>
							<El col="4">
								<FormSelect bind:value={selectedDate.year} items={yearItems} />
							</El>
						</El>
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
					<FormField label="Form buttons">
						<El row>
							<El col="6" pe="2">
								<Button col="12">
									<Icon name="brand-github" />
									Login with Github
								</Button>
							</El>
							<El col="6" ps="2">
								<Button col="12">
									<Icon name="brand-twitter" color="twitter" />
									Login with Twitter
								</Button>
							</El>
						</El>
					</FormField>
					<FormAutocomplete items={tags} label="Tags input" />
					<FormAutocomplete items={itemsWithImage} label="Select with avatars" let:item>
						<El>
							<Avatar>
								<img src={item.img} alt="" />
							</Avatar>
							{item.name}
						</El>
					</FormAutocomplete>
					<FormField label="Advanced select with validation state">
						<FormSelect items={countries} state="valid" bind:value={countries[2]} />
						<FormSelect items={countries} state="invalid" bind:value={countries[1]} />
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
							<Avatar size="md"><img src="/images/avatars/2.jpg" /></Avatar>
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
