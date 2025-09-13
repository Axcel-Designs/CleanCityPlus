"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import Chart from "@/components/Chart";
import TrackerForm from "@/components/tracker/TrackerForm";
import TrackerTable from "@/components/tracker/TrackerTable";
import { useTracker } from "../context/TrackerContext";

export default function RecyclingTracker() {
  const { data } = useTracker();

  const totalQuantity = data.reduce((acc, crr) => acc + Number(crr.qty), 0);

  return (
    <main className="bg-gray-50">
      <Container className="py-20">
        <section className="text-center mb-5">
          <Row>
            <Col>
              <p className="text-6xl text-green-700">Recycling Tracker</p>
              <em>
                Log your recycling efforts, track your progress, and earn
                achievement badges for making a positive environmental impact.
              </em>
            </Col>
          </Row>
        </section>

        {/* Stats */}
        <section className="mb-5">
          <Row className="g-4 flex max-md:flex-col max-md:items-center">
            <Col xs={6} sm={6} md={4} lg={3}>
              <Card className="shadow-xl w-[200px] text-center p-2 rounded-2xl">
                <Card.Body>
                  <p className="text-4xl">🔢</p>
                  <p>Number of Recycle</p>
                  <p className="text-2xl font-semibold">{data.length}</p>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={6} md={4} lg={3}>
              <Card className="shadow-xl w-[200px] text-center p-2 rounded-2xl">
                <Card.Body>
                  <p className="text-4xl">♻️</p>
                  <p>Items Recycled</p>
                  <p className="text-2xl font-semibold">{totalQuantity}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <section className="mb-5">
          {data.length > 0 ? (
            <Row>
              <Col>
                <p className="text-2xl text-green-700 mb-3 p-4">
                  Badges unlocked
                </p>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <p className="text-2xl text-green-700 mb-3 p-4">
                  Badges still locked
                </p>
              </Col>
            </Row>
          )}

          <Row className="g-4">
            {data.length >= 100 && (
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="shadow-xl text-center p-3 rounded-xl">
                  <Card.Body>
                    <dt className="text-4xl">🏆</dt>
                    <b className="text-blue-600">Legend Recycler</b>
                    <p>10 recycling entries</p>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {data.length >= 10 && (
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="shadow-xl text-center p-3 rounded-xl">
                  <Card.Body>
                    <dt className="text-4xl">🏆</dt>
                    <b className="text-blue-600">Champion Recycler</b>
                    <p>10 recycling entries</p>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {data.length >= 5 && (
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="shadow-xl text-center p-3 rounded-xl">
                  <Card.Body>
                    <dt className="text-4xl">🎊</dt>
                    <b className="text-yellow-900">Consistent Recycler</b>
                    <p>5 recycling entries</p>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {data.length > 0 && (
              <Col xs={12} sm={6} md={4} lg={3}>
                <Card className="shadow-xl text-center p-3 rounded-xl">
                  <Card.Body>
                    <dt className="text-4xl">🎉</dt>
                    <b className="text-red-600">Getting Started</b>
                    <p>1 recycling entry</p>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </section>
        <section className="mb-5">
          <Row>
            <Col>
              <TrackerForm />
            </Col>
          </Row>
        </section>
        {data.length > 0 && (
          <>
            <section className="mb-5">
              <Row>
                <Col>
                  <p className="text-2xl text-green-700 mb-3 p-4">Chart</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Chart />
                </Col>
              </Row>
            </section>
            <section className="mb-5">
              <Row>
                <Col>
                  <TrackerTable />
                </Col>
              </Row>
            </section>
          </>
        )}
      </Container>
    </main>
  );
}
