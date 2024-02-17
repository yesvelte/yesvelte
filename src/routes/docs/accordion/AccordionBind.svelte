<script>
	import { Accordion, Accordions, AccordionHeader, AccordionBody, Button, El} from 'yesvelte'

	let accordion1Open = false
	let accordion2Open = true

	function onClick() {
		accordion1Open = !accordion1Open
		accordion2Open = !accordion2Open
	}
</script>

<Accordions>
	<Accordion bind:open={accordion1Open}>
		<AccordionHeader>Accorion Header #1</AccordionHeader>
		<AccordionBody>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dolor iusto perferendis non iste autem animi adipisci vel itaque, optio nobis doloribus libero, neque delectus fuga. Nisi quaerat repellat molestiae.</AccordionBody>
	</Accordion>
	<Accordion bind:open={accordion2Open}>
		<AccordionHeader>Accorion Header #2</AccordionHeader>
		<AccordionBody>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dolor iusto perferendis non iste autem animi adipisci vel itaque, optio nobis doloribus libero, neque delectus fuga. Nisi quaerat repellat molestiae.</AccordionBody>
	</Accordion>
</Accordions>
<El py="3"/>
<Button on:click={onClick}>Toggle</Button>
