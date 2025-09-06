import { AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { wasteCat } from "../../utils/facts";

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
          {wasteCat.map((waste, i) => {
            <Accordion.Item eventKey={`'${i}'`} key={waste.idi}>
              <Accordion.Header>{waste.name}</Accordion.Header>
              {/* <Accordion.Body>{waste.tips}</Accordion.Body> */}
              console.log(i);
              console.log(waste.tips);
              
            </Accordion.Item>;
          })}
        </Accordion>
      </section>
      {wasteCat.map((waste, i) => {
        <p key={i}>{waste.name}</p>;
      })}
    </main>
  );
}
