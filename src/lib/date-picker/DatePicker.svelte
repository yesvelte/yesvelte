<script lang="ts">
	import { get_current_component } from 'svelte/internal'
	import { createEventDispatcher, onDestroy, onMount } from 'svelte'
	import type Litepicker from 'litepicker'
	import type { ILPConfiguration } from 'litepicker/dist/types/interfaces'
	import type { DatePickerProps } from './DatePicker.types'
	import { El } from '../el'
	import type { DateTime } from 'litepicker/dist/types/datetime'
	import { classname } from '../internal'

	type $$Props = DatePickerProps

	export let componentName: $$Props['componentName'] = 'date-picker'
	export let formatText: $$Props['formatText'] = undefined
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
					dispatch('changed', value)
				} else {
					const dateValue = formatValue(date1)
					const dateText = format(date1, 'text')

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
	<El {...$$restProps} componentName="{componentName}-wrapper" cssProps={{ size }}>
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
