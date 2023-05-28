<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import type Litepicker from 'litepicker'
	import type { ILPConfiguration } from 'litepicker/dist/types/interfaces'
	import moment from 'moment'
	import type { DatePickerProps } from './DatePicker.types'
	import { El } from '../el'

	type $$Props = DatePickerProps

	export let componentName: $$Props['componentName'] = 'date-picker'
	export let format: $$Props['format'] = 'YYYY-MM-DD'
	export let borderRounded: $$Props['borderRounded'] = undefined
	export let borderFlush: $$Props['borderFlush'] = undefined
	export let disabled: $$Props['disabled'] = undefined
	export let options: $$Props['options'] = undefined
	export let placeholder: $$Props['placeholder'] = undefined
	export let range: $$Props['range'] = undefined
	export let size: $$Props['size'] = undefined
	export let state: $$Props['state'] = undefined
	export let name: $$Props['name'] = undefined
	export let value: $$Props['value'] = range ? [] : undefined
	export let id: $$Props['id'] = undefined

	const components = [get_current_component(), ...($$props.components ?? [])]
	const dispatch = createEventDispatcher()

	let element: HTMLElement
	let instance: Litepicker | undefined = undefined

	$: if (value) {
		if (range) {
			instance?.setStartDate(value[0])
			instance?.setEndDate(value[1])
		} else {
			instance?.setDate(value)
		}
	}

	let settings: ILPConfiguration
	$: settings = {
		...options,
		element,
		singleMode: range ? false : true,
		startDate: range ? value[0] : value,
		endDate: range ? value[1] : undefined,
		buttonText: {
			...(options?.buttonText ?? {}),
			apply: '',
			cancel: '',
			previousMonth: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="15 6 9 12 15 18" /></svg>`,
			nextMonth: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="9 6 15 12 9 18" /></svg>`,
			reset: '',
		},
		// format,
		format: {
			parse(date: any) {
				if (date instanceof Date) return date
				if (typeof date === 'string') return moment(date, format).toDate()
				if (typeof date === 'number') return moment(date).toDate()
				return moment().toDate()
			},
			output(date: any) {
				return moment(date).format(format)
			},
		},
		setup(picker: any) {
			picker.on('selected', (event: any) => {
				if (range) {
					const startDate = instance?.getStartDate()?.toDateString()
					const startValue = moment(startDate).format(format)

					const endDate = instance?.getEndDate()?.toDateString()
					const endValue = moment(endDate).format(format)

					if (value[0] === startValue && value[1] === endValue) return

					value = [startValue, endValue]
					dispatch('changed', value)
				} else {
					const date = event?.dateInstance?.toDateString()
					const newValue = moment(date).format(format)

					if (value === newValue) return

					value = newValue
					dispatch('changed', value)
				}
			})
		},
	}

	let cssProps: $$Props = {}
	let props: $$Props = {}

	$: {
		cssProps = {
			size,
			state,
			borderRounded,
			borderFlush,
		}

		props = {
			componentName,
			placeholder,
			disabled,
			name,
		}
	}
	onMount(() => {
		if (!element) return
		if (typeof window == 'undefined') return
		import('litepicker').then(({ Litepicker }) => {
			instance = new Litepicker(settings)
		})
	})

	onDestroy(() => {
		instance?.destroy()
	})
</script>

<El componentName="{componentName}-wrapper" cssProps={{ size }}>
	{#if $$slots.start}
		<slot name="start" />
	{/if}
	<slot />
	<El
		tag="input"
		{components}
		value={range ? value[0] + ' - ' + value[1] : value}
		bind:element
		bind:id
		{...$$restProps}
		{cssProps}
		{...props} />
	{#if $$slots.end}
		<slot name="end" />
	{/if}
</El>
