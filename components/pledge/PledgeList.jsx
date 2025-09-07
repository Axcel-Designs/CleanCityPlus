"use client";
import { Table } from "react-bootstrap";

export default function PledgeList({ pledges = [] }) {
  return (
    <section className="my-4 shadow-xl/20">
        <Table striped="columns">
          <thead>
            <tr>
              <th>#</th>
              {/* {Object.keys(pledges[0]).map((key, i) => (
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
