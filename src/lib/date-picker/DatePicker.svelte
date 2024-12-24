<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import type Litepicker from 'litepicker'
	import type { ILPConfiguration } from 'litepicker/dist/types/interfaces'
	import type { DatePickerProps } from './DatePicker.types'
	import { El } from '../el'
	import type { DateTime } from 'litepicker/dist/types/datetime'
	import { classname } from '../internal'

	type $$Props = DatePickerProps

	let {
		componentName = 'date-picker',
		formatText,
		borderRounded,
		borderFlush,
		disabled,
		options,
		placeholder,
		range,
		size,
		state: validationState,
		name,
		value = $bindable(),
		text = $bindable(),
		id,
		startSnippet,
		endSnippet,
		...restProps
	}: $$Props = $props()

	let element: any | undefined = $state(undefined)
	let instance: Litepicker | undefined = $state(undefined)

	$effect(() => {
		if (value) {
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
	})

	function formatValue(date: DateTime | null | undefined): string {
		return date ? date.format('YYYY-MM-DD') : ''
	}

	function format(date: Date | DateTime | null | undefined, mode: 'text'): Date | string {
		if (!date) return ' --- '
		if (date.toJSDate) date = date.toJSDate()

		if (date) {
			if (formatText) {
				return formatText(date)
			}

			return new Date(date).toDateString()
		}
		return ''
	}

	let settings: ILPConfiguration = $derived({
		...options,
		element,
		singleMode: range ? false : true,
		startDate: range ? value[0] : value,
		endDate: range ? value[1] : undefined,
		buttonText: {
			...(options?.buttonText ?? {}),
			apply: '',
			cancel: '',
			previousMonth: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M15 6l-6 6l6 6"></path>
</svg>`,
			nextMonth: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 6l6 6l-6 6"></path>
</svg>`,
			reset: '',
		},
		setup(picker: any) {
			picker.on('render', (ui) => {
				const header = ui.querySelector('.month-item-header')

				const prevYearBtn = document.createElement('button')
				const nextYearBtn = document.createElement('button')

				prevYearBtn.setAttribute('type', 'button')
				prevYearBtn.classList.add(classname(componentName + '-button-year')!)

				nextYearBtn.setAttribute('type', 'button')
				nextYearBtn.classList.add(classname(componentName + '-button-year')!)

				prevYearBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M11 7l-5 5l5 5"></path>
   <path d="M17 7l-5 5l5 5"></path>
</svg>`

				nextYearBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M7 7l5 5l-5 5"></path>
   <path d="M13 7l5 5l-5 5"></path>
</svg>`

				function getDateOfSelectedPage() {
					return new Date(picker.calendars[0].toJSDate())
				}

				function nextYear() {
					const date = getDateOfSelectedPage()
					return new Date(date.getFullYear() + 1, date.getMonth(), date.getDay() + 1)
				}
				function prevYear() {
					const date = getDateOfSelectedPage()
					return new Date(date.getFullYear() - 1, date.getMonth(), date.getDay() + 1)
				}

				prevYearBtn.addEventListener('click', (event) => {
					instance?.gotoDate(prevYear())
				})

				nextYearBtn.addEventListener('click', (event) => {
					instance?.gotoDate(nextYear())
				})

				if (header) {
					header.insertBefore(prevYearBtn, header.firstChild)
					header.appendChild(nextYearBtn)
				}
			})

			picker.on('selected', (date1: DateTime | null, date2: DateTime | null | undefined) => {
				if (range) {
					const startDateValue = formatValue(date1)
					const startDateText = format(date1, 'text')

					const endDateValue = formatValue(date2)
					const endDateText = format(date2, 'text')

					if (value[0] === startDateValue && value[1] === endDateValue) return

					value = [startDateValue, endDateValue]

					text = startDateText + ' - ' + endDateText
					restProps.onchanged?.(value)
				} else {
					const dateValue = formatValue(date1)
					const dateText = format(date1, 'text')

					if (value === dateValue) return

					value = dateValue
					text = dateText
					restProps.onchanged?.(value)
				}

				if (element) element.value = text
			})
		},
	})

	let props: $$Props = $derived({
		...restProps,
		componentName,
		placeholder,
		disabled,
		tag: 'input',
		value: text,
		cssProps: {
			size,
			state: validationState,
			borderRounded,
			borderFlush,
		},
	})

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

{#if startSnippet || endSnippet}
	<El {...restProps} componentName="{componentName}-wrapper" cssProps={{ size }}>
		{#if startSnippet}
			<El tag="span" componentName="{componentName}-icon">
				{@render startSnippet()}
			</El>
		{/if}
		<El bind:element bind:id {...props} />
		{#if endSnippet}
			<El tag="span" componentName="{componentName}-icon">
				{@render endSnippet()}
			</El>
		{/if}
	</El>
{:else}
	<El bind:element bind:id {...props} />
{/if}

<!-- TODO: in form datePicker, should move it outside of form field group (right border should be round) -->
{#if value}
	<input type="hidden" {name} {value} />
{/if}
