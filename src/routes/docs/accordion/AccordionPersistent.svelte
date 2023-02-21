<script>
	import { Accordions, Accordion, AccordionBody, AccordionHeader } from 'yesvelte'
</script>

<Accordions persistent>
	<Accordion open>
		<AccordionHeader>Accordion Item #1 (open when page is loaded)</AccordionHeader>
		<AccordionBody>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo hic
			eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam earum
			tenetur unde, cum beatae minus?
		</AccordionBody>
	</Accordion>
	<Accordion>
		<AccordionHeader>Accordion Item #2</AccordionHeader>
		<AccordionBody>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo hic
			eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam earum
			tenetur unde, cum beatae minus?
		</AccordionBody>
	</Accordion>
	<Accordion>
		<AccordionHeader>Accordion Item #3</AccordionHeader>
		<AccordionBody>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur qui facere, explicabo hic
			eius veritatis commodi quasi dignissimos quia odit obcaecati consectetur? Officiis nam earum
			tenetur unde, cum beatae minus?
		</AccordionBody>
	</Accordion>
</Accordions>
