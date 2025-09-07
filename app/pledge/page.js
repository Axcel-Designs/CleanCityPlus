"use client";
import PledgeForm from "@/components/pledge/PledgeForm";
import PledgeList from "@/components/pledge/PledgeList";
import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";

export default function PledgePage() {
  const [pledges, setPledges] = useState([]);

  useEffect(() => {
    const storedForm = JSON.parse(localStorage.getItem("formLocal"));
    if (storedForm) {
      setPledges(Array.isArray(storedForm) ? storedForm : [storedForm]);
    }
  }, []);

  function handlePledge(newPledge) {
    setPledges([...pledges, newPledge]);
    localStorage.setItem("formLocal", JSON.stringify([...pledges, newPledge]));
  }

  return (
    <main className="container mx-auto my-20">
      <section className="text-center text-gray-800 mb-4 grid gap-2">
        <p className="text-6xl text-green-700">Pledge</p>
        <em>
          Join our community of environmental champions. Make a commitment to
          protect our planet and inspire others to take action.
        </em>
        <p className="text-sm text-yellow-700">
          Pledge to reduce, reuse, and recycle. Your commitment helps build a
          cleaner future.
        </p>
      </section>
      <section className="my-4">
        <div className="shadow-xl flex flex-col items-center text-gray-700 bg-blue-200 p-4 w-fit text-center rounded-2xl">
          <FiUsers className="text-4xl text-blue-600" />
          <p>Total Number of Pledges</p>
          <p>{pledges.length}</p>
        </div>
      </section>
      <PledgeForm onAddPledge={handlePledge} />
      <PledgeList pledges={pledges} />
    </main>
  );
}
