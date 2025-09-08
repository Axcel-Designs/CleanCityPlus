"use client";

import { Container, Row, Col } from "react-bootstrap";
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
    const updated = [...pledges, newPledge];
    setPledges(updated);
    localStorage.setItem("formLocal", JSON.stringify(updated));
  }

  return (
    <main className="bg-gray-100 h-full">
      <Container className="py-20">
        <section className="text-center text-gray-800 mb-4">
          <Row className="gy-2">
            <Col>
              <p className="text-6xl text-green-700">Pledge</p>
              <em>
                Join our community of environmental champions. Make a commitment
                to protect our planet and inspire others to take action.
              </em>
              <p className="text-sm text-yellow-700 mt-2">
                Pledge to reduce, reuse, and recycle. Your commitment helps
                build a cleaner future.
              </p>
            </Col>
          </Row>
        </section>
        <section className="my-4">
          <Row>
            <Col xs="auto">
              <div className="shadow-xl flex flex-col items-center text-gray-700 bg-blue-200 p-4 w-fit text-center rounded-2xl">
                <FiUsers className="text-4xl text-blue-600" />
                <p>Total Number of Pledges</p>
                <p>{pledges.length}</p>
              </div>
            </Col>
          </Row>
        </section>

        <section className="my-4">
          <Row className="justify-content-center">
            <Col lg md="auto">
              <PledgeForm onAddPledge={handlePledge} />
            </Col>
          </Row>
        </section>

        {/* Pledge List */}
        <section className="my-4">
          <Row>
            <Col>
              <PledgeList pledges={pledges} />
            </Col>
          </Row>
        </section>
      </Container>
    </main>
  );
}
