<script>
	import { El, Radio } from 'yesvelte'
</script>

<El mb="2">Choose one of these options:</El>
<Radio
	color="green"
	name="radio-description"
	label="Sponsorships"
	description="Sponsorships help your community know how to financially support this repository." />
<Radio
	name="radio-description"
	color="danger"
	label="Issues"
	description="Issues integrate lightweight task tracking into your repository. Keep projects on track with issue labels and milestones, and reference them in commit messages." />
<Radio name="radio-description" checked label="Preserve this repository">
	<span slot="description">
		Include this code in the <a href="https://archiveprogram.github.com/faq/">
			GitHub Archive Program.
		</a>
	</span>
</Radio>
