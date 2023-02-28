<script>
	import { Page, Doc, Preview } from '$components'
	import StepsDefault from './StepsDefault.svelte'
	import StepsCounter from './StepsCounter.svelte'
	import StepsColor from './StepsColor.svelte'
	import StepsWithoutTitle from './StepsWithoutTitle.svelte'
	import StepsClick from './StepsClick.svelte'
	import StepsHorizontal from './StepsHorizontal.svelte'
	import StepsVertical from './StepsVertical.svelte'
	import StepsVerticalDescription from './StepsVerticalDescription.svelte'
</script>

<Page
	title="Steps"
	description="Steps are used to guide users through complex processes, making them easier and more intuitive. Breaking a multi-step process into smaller parts and tracking progress along the way helps users complete it successfully.">
	<Doc title="Default">
		<Preview src="./StepsDefault.svelte">
			<StepsDefault />
		</Preview>
	</Doc>

	<!-- TODO: add tooltip example after adding Tooltip component -->
	<!-- <Doc title="Tooltip">
		<Preview src="./StepsDots.svelte">
			<div class="custom-class">
				<StepsDots />
			</div>
		</Preview>
	</Doc> -->

	<Doc title="Color">
		<p slot="description">
			You can change color of steps using <code>color</code> prop.
		</p>
		<Preview src="./StepsColor.svelte">
			<StepsColor />
		</Preview>
	</Doc>

	<Doc title="Horizontal Steps">
		<Preview src="./StepsHorizontal.svelte">
			<StepsHorizontal />
		</Preview>
	</Doc>

	<Doc title="Vertical Steps">
		<Preview src="./StepsVertical.svelte">
			<StepsVertical />
		</Preview>
	</Doc>

	<Doc title="Vertical Steps with description">
		<Preview src="./StepsVerticalDescription.svelte">
			<StepsVerticalDescription />
		</Preview>
	</Doc>

	<!-- <Doc title="Without title">
		<Preview src="./StepsWithoutTitle.svelte">
			<StepsWithoutTitle />
		</Preview>
	</Doc> -->

	<Doc title="Steps with numbers">
		<Preview src="./StepsCounter.svelte">
			<StepsCounter />
		</Preview>
	</Doc>

	<Doc title="Steps with Click event">
		<Preview src="./StepsClick.svelte">
			<StepsClick />
		</Preview>
	</Doc>
</Page>
