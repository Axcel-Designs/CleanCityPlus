"use client";
import { Table } from "react-bootstrap";

export default function PledgeList({ pledges = [] }) {
  return (
    <section className="bg-white container mx-auto my-4 p-4 shadow-xl rounded-2xl">
      <Table striped="columns" hover>
        <thead>
          <tr>
            <th>#</th>
            {/* {Object.keys(pledges).map((key, i) => (
                <th key={i}>{key}</th>
              ))} */}
            <th>Name</th>
            <th>Email</th>
            <th>Pledge</th>
          </tr>
        </thead>
        <tbody>
          {pledges.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              {Object.keys(item).map((value, j) => (
                <td key={j}>{item[value]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}
