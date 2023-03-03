<script>
	import { Progress, ProgressBar } from 'yesvelte'
</script>

<Progress separated>
	<ProgressBar value="20" color="green" />
	<ProgressBar value="50" color="info" />
	<ProgressBar value="70" color="warning" />
	<ProgressBar value="100" color="danger" />
</Progress>
