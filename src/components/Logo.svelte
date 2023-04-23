<script>
	import { El } from 'yesvelte'
</script>

<El tag="h1" {...$$restProps} class="y-logo" textColor="primary">YeSvelte</El>

<style>
	:global(.y-logo) {
		margin: 0;
		/* color: #2773bf; */
	}
</style>
