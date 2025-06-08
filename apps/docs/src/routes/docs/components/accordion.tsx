import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@aakaar/react";
import AccordionRegistry from "../../../../public/registry/accordion.json";
import { Demo } from "../../../components/code";
import { Installation } from "../../../components/installation";

export default () => {
	return (
		<article>
			<h1>Accordion</h1>
			<p>
				The accordion component is a vertically stacked list of items that
				utilizes toggleable content. It is perfect for FAQs, Q&As, and other
				similar content.
			</p>
			<h2>Demo</h2>
			<Demo
				code={`
<Accordion type="single" collapsible className="w-5/6">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other
      components&apos; aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It&apos;s animated by default, but you can disable it if you
      prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>
		`}
			>
				<Accordion type="single" collapsible className="w-5/6">
					<AccordionItem value="item-1">
						<AccordionTrigger>Is it accessible?</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Is it styled?</AccordionTrigger>
						<AccordionContent>
							Yes. It comes with default styles that matches the other
							components&apos; aesthetic.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3">
						<AccordionTrigger>Is it animated?</AccordionTrigger>
						<AccordionContent>
							Yes. It&apos;s animated by default, but you can disable it if you
							prefer.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</Demo>

			<Installation registry={AccordionRegistry} componentName="accordion" />
		</article>
	);
};
