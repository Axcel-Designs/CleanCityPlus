import FactGenerator from "@/components/FactGenerator";
import Image from "next/image";
import { Button } from "react-bootstrap";
import cleanImg from "../public/cleanCity.png";

export default async function Home() {
  return (
    <>
      <main className=" mx-auto">
        <section className=" pb-20 text-center grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="">
            <Image src={cleanImg} alt="img" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-8xl font-bold text-green-700"> CleanCity+</h1>
            <h2 className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
              Join the movement to keep our planet clean! Track your recycling
              efforts and learn eco-friendly habits.
            </h2>
          </div>
        </section>
        <div className="mt-6">
          <Button variant="success" size="lg">
            Get Started
          </Button>
        </div>
        <div className="mt-12">
          <FactGenerator />
        </div>
      </main>
    </>
  );
}
