import FactGenerator from "@/components/FactGenerator";
import Image from "next/image";
import cleanImg from "../public/cleanCity.png";
import Button, { ButtonGrn } from "@/components/ui/Button";
import Link from "next/link";
import { CardBody, CardHeader, CardText, CardTitle } from "react-bootstrap";
import Card from "react-bootstrap/Card";

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

export default async function Home() {
  return (
    <>
      <main className=" mx-auto">
        <section className=" pb-20 text-center grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <Image src={cleanImg} alt="img" />
          </div>
          <div className="flex flex-col justify-center items-center p-8">
            <h1 className="text-8xl font-bold text-green-700"> CleanCity+</h1>
            <h2 className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Join the movement to keep our planet clean! Track your recycling
              efforts and learn eco-friendly habits.
            </h2>
            <div className="flex justify-center gap-4 my-8">
              <Link href={"/recycling"} className="font-bold">
                <Button>Start Tracking</Button>
              </Link>
              <Link href={"/waste"} className="font-bold">
                <ButtonGrn>Learn About Waste</ButtonGrn>
              </Link>
            </div>
          </div>
        </section>
        {/* stats */}
        <section>
          <div className="container mx-auto grid md:grid-cols-3 gap-8 mb-16">
            {stats.map((item, index) => (
              <Card key={index} className="text-center ring p-8 rounded-2xl">
                <CardBody>
                  <div className={`${item.color}`}>
                    <CardTitle>{item.value}</CardTitle>
                  </div>
                  <CardText className="text-gray-600">{item.text}</CardText>
                </CardBody>
              </Card>
            ))}
          </div>
        </section>
        {/* did you know */}
        <section className="my-20">
          <FactGenerator />
        </section>
      </main>
    </>
  );
}
