"use client";
import { Table } from "react-bootstrap";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { CiTrash, CiEdit } from "react-icons/ci";

export default function TrackerTable({ data = [], search = "" }) {
  // const [search, setSearch] = useState([]);  

  return (
    <section className="container mx-auto my-4 shadow-xl">
      <div className="my-4 flex flex-wrap items-center justify-between gap-x-6">
        <div className=" grow">
          <Input
            holder="Search for category or qunatity"
            value={search}
            change={(e) => setSearch(e.target.value)}
            name="search"
            label="Search"
          />
        </div>
        <div className="my-4 flex flex-wrap items-center justify-between gap-4">
          {/* <Button children={"category"} onClick={""} />
          <Button children={"quantity"} onClick={""} />
          <Button children={"item"} onClick={""} /> */}
        </div>
      </div>
      <Table striped="columns">
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.category}</td>
              <td>{item.item}</td>
              <td>{item.qty}</td>
              <td>
                <div className="text-blue-600">
                  <CiEdit />
                </div>
              </td>
              <td>
                <div className="text-red-600">
                  <CiTrash />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}
