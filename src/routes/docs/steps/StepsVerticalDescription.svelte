<script>
	import { Card, CardBody, El, Steps, StepItem } from 'yesvelte'
</script>

<Card>
	<CardBody>
		<Steps vertical>
			<StepItem>
				<El tag="h4" m="0">Order received</El>
				<El textMuted
					>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa cum expedita
					ipsam laborum nam ratione reprehenderit sed sint tenetur!</El>
			</StepItem>
			<StepItem>
				<El tag="h4" m="0">Order received</El>
				<El textMuted>Lorem ipsum dolor sit amet.</El>
			</StepItem>
			<StepItem active>
				<El tag="h4" m="0">Out for delivery</El>
				<El textMuted>Lorem ipsum dolor sit amet.</El>
			</StepItem>
			<StepItem>
				<El tag="h4" m="0">Finalized</El>
				<El textMuted>Lorem ipsum dolor sit amet.</El>
			</StepItem>
		</Steps>
	</CardBody>
</Card>
