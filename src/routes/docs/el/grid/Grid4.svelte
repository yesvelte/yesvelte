<script>
	import { El } from 'yesvelte'
</script>

<El container>
	<El row class="justify-content-md-center">
		<El col colLg="2">1 of 3</El>
		<El colMd="auto">Variable width content</El>
		<El col colLg="2">3 of 3</El>
	</El>
	<El row>
		<El col>1 of 3</El>
		<El colMd="auto">Variable width content</El>
		<El col colLg="2">3 of 3</El>
	</El>
</El>
