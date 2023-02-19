<script lang="ts">
	import { Alert } from 'yesvelte'
</script>

<Alert dismissible important icon="check" color="success">Your account has been saved!</Alert>
<Alert dismissible important icon="info-circle" color="info">
	Here is something that you might like to know.
</Alert>
<Alert dismissible important icon="alert-triangle" color="warning">
	Sorry! There was a problem with your request.
</Alert>
<Alert dismissible important icon="alert-circle" color="danger">
	Your account has been deleted and can't be restored.
</Alert>
