<script lang="ts">
	import { Alert, El } from 'yesvelte'
</script>

<Alert dismissible title="Wow! Everything worked!" color="success" icon="check">
	<El textMuted>Your account has been saved!</El>
</Alert>
<Alert dismissible title="Did you know?" color="info" icon="info-circle">
	<El textMuted>Here is something that you might like to know.</El>
</Alert>
<Alert dismissible title="Uh oh, something went wrong" color="warning" icon="alert-triangle">
	<El textMuted>Sorry! There was a problem with your request.</El>
</Alert>
<Alert dismissible title="I'm so sorry…" color="danger" icon="alert-circle">
	<El textMuted>Your account has been deleted and can't be restored.</El>
</Alert>
