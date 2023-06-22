<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import type Litepicker from 'litepicker'
	import type { ILPConfiguration } from 'litepicker/dist/types/interfaces'
	import type { DatePickerProps } from './DatePicker.types'
	import { El } from '../el'
	import type { DateTime } from 'litepicker/dist/types/datetime'

	type $$Props = DatePickerProps

	export let componentName: $$Props['componentName'] = 'date-picker'
	export let formatText: $$Props['formatText'] = undefined
	export let formatValue: $$Props['formatValue'] = undefined
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
	export let text: $$Props['text'] = undefined
	export let id: $$Props['id'] = undefined

	const components = [
		{ component: get_current_component(), except: ['changed'] },
		...($$props.components ?? []),
	]
	const dispatch = createEventDispatcher()

	let element: HTMLElement
	let instance: Litepicker | undefined = undefined

	$: if (value) {
		if (element) element.value = text

		if (range) {
			instance?.setStartDate(value[0])
			instance?.setEndDate(value[1])

			text = (format(value[0], 'text') + ' - ' + format(value[1], 'text')) as string
		} else {
			instance?.setDate(value)

			text = format(value, 'text') as string
		}
	}

	function format(date: Date | DateTime | null | undefined, mode = 'value'): Date | string {
		if (!date) return ' --- '
		if (date.toJSDate) date = date.toJSDate()

		if (date) {
			if (mode === 'value') {
				if (formatValue) {
					return formatValue(date)
				}
				return new Date(date).toISOString()
			} else {
				if (formatText) {
					return formatText(date)
				}

				return new Date(date).toDateString()
			}
		}
		return ''
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
		setup(picker: any) {
			picker.on('selected', (event: any) => {
				if (range) {
					const startDate = instance?.getStartDate()
					const startDateValue = format(startDate)
					const startDateText = format(startDate, 'text')

					const endDate = instance?.getEndDate()

					const endDateValue = format(endDate)
					const endDateText = format(endDate, 'text')

					if (value[0] === startDateValue && value[1] === endDateValue) return

					value = [startDateValue, endDateValue]

					text = startDateText + ' - ' + endDateText
					dispatch('changed', value)
				} else {
					const date = event?.dateInstance
					const dateValue = format(date)
					const dateText = format(date, 'text')

					if (value === dateValue) return

					value = dateValue
					text = dateText
					dispatch('changed', value)
				}

				if (element) element.value = text
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

{#if $$slots.start || $$slots.end}
	<El componentName="{componentName}-wrapper" cssProps={{ size }}>
		{#if $$slots.start}
			<El tag="span" componentName="{componentName}-icon">
				<slot name="start" />
			</El>
		{/if}
		<El
			tag="input"
			{components}
			value={text}
			bind:element
			bind:id
			{...$$restProps}
			{cssProps}
			{...props} />
		{#if $$slots.end}
			<El tag="span" componentName="{componentName}-icon">
				<slot name="end" />
			</El>
		{/if}
	</El>
{:else}
	<El
		tag="input"
		{components}
		value={text}
		bind:element
		bind:id
		{...$$restProps}
		{cssProps}
		{...props} />
{/if}

<!-- TODO: in form datePicker, should move it outside of form field group (right border should be round) -->
{#if value}
	<input type="hidden" {name} {value} />
{/if}
