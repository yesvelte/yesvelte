<script>
	import { Button, FormCheckboxGroup, El, FormCheckbox } from 'yesvelte'

	let languages = ['HTML', 'CSS', 'JS', 'SVELTE']
	let colors = ['Red', 'Green', 'Blue', 'Yellow']
	let fruits = ['Apple', 'Banana', 'Cherry']
	let status = ['Active', 'Inactive', 'Online', 'Offline']

	let tcAccepted = false

	let model = {
		languages: ['CSS'],
		colors: ['Blue', 'Yellow'],
		fruits: [],
		status: undefined,
	}

	const onClick = () => {
		console.log(model)
	}
</script>

<El container>
	<El row>
		<FormCheckboxGroup
			col="6"
			inline
			items={languages}
			bind:value={model.languages}
			label="Languages" />
		<FormCheckboxGroup col="6" inline items={colors} bind:value={model.colors} label="Colors" />
		<FormCheckboxGroup
			col="6"
			inline
			items={fruits}
			bind:value={model.fruits}
			label="Fruits"
			required />
		<FormCheckboxGroup
			col="6"
			inline
			items={status}
			bind:value={model.status}
			label="Status"
			required />
		<FormCheckbox col="12" inline bind:checked={tcAccepted} label="Terms and Conditions">
			I accept terms and conditions of this website and I am over 18 years old. I agree to receive
			marketing and promotional materials from this website. I understand that I can unsubscribe at
			any time. I agree to the <a href={'#'}>Terms and Conditions</a>
			and <a href={'#'}>Privacy Policy</a>.
		</FormCheckbox>
		<El col textAlign="end">
			<Button color="primary" disabled={!tcAccepted} on:click={onClick}>Submit</Button>
		</El>
	</El>
</El>

<i>{JSON.stringify(model)}</i>
