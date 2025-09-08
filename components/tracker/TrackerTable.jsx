"use client";
import { Table } from "react-bootstrap";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";
import { CiTrash, CiEdit } from "react-icons/ci";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TfiArrowsVertical } from "react-icons/tfi";
import { useTracker } from "@/app/context/TrackerContext";

export default function TrackerTable() {
  const { data, setData, formData, setFormData } = useTracker();
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  let showData = data;
  showData = showData.filter(
    (element) =>
      element.item.toLowerCase().includes(search.toLowerCase()) ||
      element.category.toLowerCase().includes(search.toLowerCase())
  );

  if (sortColumn) {
    showData.sort((a, b) => {
      if (sortColumn === "qty") {
        return sortOrder === "asc" ? a.qty - b.qty : b.qty - a.qty;
      } else {
        return sortOrder === "asc"
          ? a[sortColumn].localeCompare(b[sortColumn])
          : b[sortColumn].localeCompare(a[sortColumn]);
      }
    });
  }

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  function sortArrow(column) {
    if (sortColumn !== column) {
      return <TfiArrowsVertical />;
    }
    return sortOrder === "asc" ? <FaAngleUp /> : <FaAngleDown />;
  }
  function editItem(item) {
    setFormData(item);
  }

  function deleteItem(id) {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  }

  return (
    <section className="bg-white container mx-auto my-4 p-4 shadow-xl rounded-2xl">
      <p className="text-2xl text-green-700">My Recycling Log</p>
      <div className="my-4 flex flex-wrap items-center justify-between gap-x-6">
        <div className=" grow">
          <Input
            holder="Search for category or quantity"
            value={search}
            change={(e) => setSearch(e.target.value)}
            name="search"
            label="Search"
          />
        </div>
        <div className="my-4 flex flex-wrap items-center justify-between gap-4">
          <Button onClick={() => handleSort("category")}>
            category {sortArrow("category")}
          </Button>
          <Button onClick={() => handleSort("item")}>
            item {sortArrow("item")}
          </Button>
          <Button onClick={() => handleSort("qty")}>
            quantity{sortArrow("qty")}
          </Button>
        </div>
      </div>
      <Table striped="columns" hover bordered variant="secondary">
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
          {showData.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.category}</td>
              <td>{item.item}</td>
              <td>{item.qty}</td>
              <td>
                <div
                  className="text-blue-600 point"
                  onClick={() => editItem(item)}
                >
                  <CiEdit />
                </div>
              </td>
              <td>
                <div
                  className="text-red-600 point"
                  onClick={() => deleteItem(item.id)}
                >
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
