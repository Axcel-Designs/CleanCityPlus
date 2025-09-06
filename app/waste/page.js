import { AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function wasteCategories() {
  return (
    <main className="container mx-auto my-4">
      <section className="text-center text-gray-800 my-4">
        <h1>Waste </h1>
        <em>
          Learn about different types of waste and how to properly dispose of
          them to maximize recycling and minimize environmental impact.
        </em>
        <p className="text-sm text-yellow-700">
          Click on a category to learn more about proper disposal and helpful
          tips.
        </p>
      </section>
      <section className="container mx-auto">
        <Accordion>
          <AccordionItem eventKey="0">
            <AccordionHeader>Accordion Item #1</AccordionHeader>
            <AccordionBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </section>

    </main>
  );
}
