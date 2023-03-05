<script>
	import { Checkbox } from 'yesvelte'
</script>

<Checkbox
	color="green"
	checked
	label="Sponsorships"
	description="Sponsorships help your community know how to financially support this repository." />
<Checkbox
	checked
	color="danger"
	label="Issues"
	description="Issues integrate lightweight task tracking into your repository. Keep projects on track with issue labels and milestones, and reference them in commit messages." />
<Checkbox checked label="Preserve this repository">
	<span slot="description">
		Include this code in the <a href="https://archiveprogram.github.com/faq/">
			GitHub Archive Program.
		</a>
	</span>
</Checkbox>
