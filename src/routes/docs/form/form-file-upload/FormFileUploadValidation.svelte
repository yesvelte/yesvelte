<script lang="ts">
	import { Divider, FormFileUpload } from 'yesvelte'

	let files_1: any
	let files_2: any

	let hint_1: string = ''
	let hint_2: string = ''
	let state_1: 'invalid' | undefined = undefined
	let state_2: 'invalid' | undefined = undefined

	$: console.log(files_1)
	$: if (files_1 && files_1[0] && files_1[0].size > 1024 * 1024 * 2) {
		hint_1 = 'File should be less than 2mb'
		state_1 = 'invalid'
	} else {
		hint_1 = ''
		state_1 = undefined
	}

	$: if (files_2 && files_2[0] && files_2[0].type !== 'image/png') {
		hint_2 = 'File type should png'
		state_2 = 'invalid'
	} else {
		hint_2 = ''
		state_2 = undefined
	}
</script>

<FormFileUpload label="Less than 2MB" hint={hint_1} state={state_1} bind:files={files_1} />

<Divider />

<FormFileUpload label="Png files" hint={hint_2} state={state_2} bind:files={files_2} />
