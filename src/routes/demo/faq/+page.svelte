<script lang="ts">
	import CardBody from '$lib/card/CardBody.svelte'
	import { El, Card, Accordions, AccordionBody, Accordion, TableCell, Button, Icon } from 'yesvelte'
</script>

<Card>
	<CardBody p="5">
		<El tag="h2">1. Introduction</El>
		<Accordions mb="3">
			<Accordion title="Welcome to our service!" open>
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
			<Accordion title="What are our values?">
				<AccordionBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo
					hic eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam
					earum tenetur unde, cum beatae minus?
				</AccordionBody>
			</Accordion>
		</Accordions>
		<El tag="h2">2. Functionality</El>
		<Accordions mb="3">
			<Accordion title="What are the key features?" open>
				<AccordionBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo
					hic eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam
					earum tenetur unde, cum beatae minus?
				</AccordionBody>
			</Accordion>
			<Accordion title="Does your App support mobile devices?">
				<AccordionBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo
					hic eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam
					earum tenetur unde, cum beatae minus?
				</AccordionBody>
			</Accordion>
			<Accordion title="Why should I choose your service?">
				<AccordionBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo
					hic eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam
					earum tenetur unde, cum beatae minus?
				</AccordionBody>
			</Accordion>
			<Accordion title="Is my data secure?">
				<AccordionBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo
					hic eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam
					earum tenetur unde, cum beatae minus?
				</AccordionBody>
			</Accordion>
		</Accordions>
		<El tag="h2">3. Payments</El>
		<Accordions>
			<Accordion title="Is there any free plan?" open>
				<AccordionBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo
					hic eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam
					earum tenetur unde, cum beatae minus?
				</AccordionBody>
			</Accordion>
			<Accordion title="What are the available payment options?">
				<AccordionBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo
					hic eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam
					earum tenetur unde, cum beatae minus?
				</AccordionBody>
			</Accordion>
			<Accordion title="Can I get a refund?">
				<AccordionBody>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo
					hic eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam
					earum tenetur unde, cum beatae minus?
				</AccordionBody>
			</Accordion>
		</Accordions>
	</CardBody>
</Card>
