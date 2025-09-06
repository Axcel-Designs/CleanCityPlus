import { AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { wasteCat } from "@/utils/facts";

export default function wasteCategories() {
  return (
    <main className="container mx-auto my-20">
      <section className="text-center text-gray-800 mb-4 grid gap-2">
        <p className="text-6xl text-green-700">Waste Categories</p>
        <em>
          Learn about different types of waste and how to properly dispose of
          them to maximize recycling and minimize environmental impact.
        </em>
        <p className="text-sm text-yellow-700">
          Click on a category to learn more about proper disposal and helpful
          tips.
        </p>
      </section>
      <section className="mb-25">
      <Accordion flush>
        <div className="container mx-auto flex flex-col gap-4">
          {wasteCat.map((waste, i) => (
            <AccordionItem eventKey={`'${i}'`} key={waste.id}>
              <AccordionHeader>
                <div className={`${waste.color} text-xl flex gap-2`}>
                  <span>{waste.icon}</span>
                  {waste.name}
                </div>
              </AccordionHeader>
              <AccordionBody className={`${waste.bgColor}`}>
                <dl>
                  <dt>Waste Tips:</dt>
                  {waste.tips.map((tip, i) => (
                    <dd key={i}>{tip}.</dd>
                  ))}
                </dl>
                <br />
                <dl>
                  <dt>Waste disposal guidelines:</dt>
                </dl>
                <dd>{waste.disposal}</dd>
                <dl>
                  <dt>Examples:</dt>
                  <dd className="flex flex-wrap gap-x-4 ">
                    {waste.examples.map((eg, i) => (
                      <div key={i} className={`${waste.color}`}>
                        {eg}
                      </div>
                    ))}
                  </dd>
                </dl>
              </AccordionBody>
            </AccordionItem>
          ))}
        </div>
      </Accordion>
      </section>
        
    </main>
  );
}
