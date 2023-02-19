<script lang="ts">
	import { Alert, El } from 'yesvelte'
</script>

<Alert title="Wow! Everything worked!" color="success">
	<El textMuted>Your account has been saved!</El>
</Alert>
<Alert title="Did you know?" color="info">
	<El textMuted>Here is something that you might like to know.</El>
</Alert>
<Alert title="Uh oh, something went wrong" color="warning">
	<El textMuted>Sorry! There was a problem with your request.</El>
</Alert>
<Alert title="I'm so sorry…" color="danger">
	<El textMuted>Your account has been deleted and can't be restored.</El>
</Alert>
