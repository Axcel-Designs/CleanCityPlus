"use client";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { wasteCat } from "@/utils/facts";

export default function WasteCategories() {
  return (
    <main className="bg-gray-50">
      <Container className="py-20">
        {/* Section Heading */}
        <section className="text-center text-gray-700 mb-4">
          <Row className="gy-2">
            <Col>
              <p className="text-6xl text-green-700">Waste Categories</p>
              <em>
                Learn about different types of waste and how to properly dispose
                of them to maximize recycling and minimize environmental impact.
              </em>
              <p className="text-sm text-yellow-700 mt-2">
                Click on a category to learn more about proper disposal and
                helpful tips.
              </p>
            </Col>
          </Row>
        </section>

        {/* Accordion Section */}
        <section className="mb-5">
          <Accordion flush>
            <Row className="gy-4">
              {wasteCat.map((waste, i) => (
                <Col xs={12} key={waste.id}>
                  <AccordionItem
                    eventKey={i.toString()}
                    className="bg-white rounded-2xl"
                  >
                    <AccordionHeader>
                      <div className={`${waste.color} text-2xl flex gap-2`}>
                        <span>{waste.icon}</span>
                        {waste.name}
                      </div>
                    </AccordionHeader>
                    <AccordionBody className={`${waste.bgColor}`}>
                      <dl>
                        <dt>Waste Tips:</dt>
                        {waste.tips.map((tip, idx) => (
                          <dd key={idx}>{tip}.</dd>
                        ))}
                      </dl>
                      <br />
                      <dl>
                        <dt>Waste disposal guidelines:</dt>
                      </dl>
                      <dd>{waste.disposal}</dd>
                      <dl>
                        <dt>Examples:</dt>
                        <dd className="d-flex flex-wrap gap-3">
                          {waste.examples.map((eg, idx) => (
                            <div key={idx} className={`${waste.color}`}>
                              {eg}
                            </div>
                          ))}
                        </dd>
                      </dl>
                    </AccordionBody>
                  </AccordionItem>
                </Col>
              ))}
            </Row>
          </Accordion>
        </section>
      </Container>
    </main>
  );
}
