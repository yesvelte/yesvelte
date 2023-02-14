<script>
	import { El } from 'yesvelte'
</script>

<El container>
	<El row>
		<El colSm="3">Level 1: colSm="3"</El>
		<El colSm="9">
			<El row>
				<El col="8" colSm="6">Level 2: col="8" colSm="6"</El>
				<El col="4" colSm="6">Level 2: col="4" colSm="6"</El>
			</El>
		</El>
	</El>
</El>
