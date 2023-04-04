<script lang="ts">
	import CardBody from '$lib/card/CardBody.svelte'
	import { El, Card, Accordions, AccordionBody, Accordion, TableCell, Button, Icon } from 'yesvelte'
</script>

<Card>
	<CardBody>
		<El tag="h2">1. Introduction</El>
		<Accordions>
			<Accordion title="Welcome to our service!">
				<AccordionBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo
					hic eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam
					earum tenetur unde, cum beatae minus?
				</AccordionBody>
			</Accordion>
			<Accordion title="Who are we?">
				<AccordionBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo
					hic eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam
					earum tenetur unde, cum beatae minus?
				</AccordionBody>
			</Accordion>
			<Accordion title="Accordion Item #3">
				<AccordionBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo
					hic eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam
					earum tenetur unde, cum beatae minus?
				</AccordionBody>
			</Accordion>
		</Accordions>
	</CardBody>
</Card>
