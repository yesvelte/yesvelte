<script>
	import { El, FormFileUpload } from 'yesvelte'
</script>

<El row>
	<FormFileUpload label="Profile Picture" hint="Choose a file smaller than 2mb" />
	<FormFileUpload label="Profile Picture" state="valid" hint="the file size is less than 2mb!" />
	<FormFileUpload label="Profile Picture" state="invalid" hint="the file is larger than 2mb!" />
</El>
