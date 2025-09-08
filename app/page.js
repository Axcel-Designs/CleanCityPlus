"use client";

import FactGenerator from "@/components/FactGenerator";
import Image from "next/image";
import cleanImg from "../public/cleanCity.png";
import Button, { ButtonGrn } from "@/components/ui/Button";
import Link from "next/link";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const stats = [
  {
    value: "75%",
    color: "text-[#991b1b]",
    text: "of waste is recyclable, but only 30% gets recycled",
  },
  {
    value: "2.01B",
    color: "text-[#1e40af]",
    text: "tons of municipal solid waste generated globally per year",
  },
  {
    value: "1.6B",
    color: "text-[#86198f]",
    text: "tons of CO2 saved annually through recycling",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pb-20 text-center ">
        <Container fluid>
          <Row className="align-items-center ">
            <Col xs={12} lg={6} className="p-0">
              <Image src={cleanImg} alt="CleanCity logo" />
            </Col>
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center p-4"
            >
              <p className="text-6xl font-bold text-green-700">CleanCity+</p>
              <p className="mt-4 font-bold text-lg text-gray-700 mx-auto">
                Join the movement to keep our planet clean! Track your recycling
                efforts and learn eco-friendly habits.
              </p>
              <div className="d-flex justify-content-center gap-3 my-4">
                <Link href="/recyclingTracker" className="font-bold">
                  <Button>Start Tracking</Button>
                </Link>
                <Link href="/waste" className="font-bold">
                  <ButtonGrn>Learn About Waste</ButtonGrn>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="mb-16">
        <Container>
          <Row className="g-4 align-items-stretch">
            {stats.map((item, index) => (
              <Col key={index} xs={12} md={4}>
                <Card className="text-center shadow-sm rounded-2xl h-100">
                  <CardBody>
                    <div className={item.color}>
                      <CardTitle as="h2" className=" font-bold">
                        {item.value}
                      </CardTitle>
                    </div>
                    <CardText className="text-gray-600">{item.text}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Did You Know */}
      <section className="my-20">
        <Container>
          <FactGenerator />
        </Container>
      </section>
    </main>
  );
}
