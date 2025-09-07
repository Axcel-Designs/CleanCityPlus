"use client";
import React, { useState } from "react";
import { ButtonGrn } from "../ui/Button";
import Input from "../ui/Input";
import { wasteCat } from "@/utils/facts";

export default function TrackerForm() {
  const [formData, setFormData] = useState({ item: "", qty: "", category: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function formChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('entryLocal',JSON.stringify(formData))
    setFormData({ item: "", qty: "", category: "" });
  } 

  return (
    <section className="container mx-auto my-4 p-4 shadow-xl">
      {/* <div>TrackerForm</div> */}
      <p className="text-2xl ">Add Recycling Entry</p>
      <form onSubmit={handleSubmit} autoComplete="on">
        <div className="flex flex-wrap justify-between items-center gap-1">
          <select className="ring px-4 py-2 bg-gray-100 outline-0" onChange={formChange} name="category">
            {wasteCat.map((category, i) => (
              <option key={i} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <Input
            label={"Item Description"}
            holder={"Enter item description"}
            value={formData.item.trim()}
            change={formChange}
            name={"item"}
          />
          <Input
            label={"Quantity"}
            holder={"Enter quantity"}
            type="number"
            value={formData.qty.trim()}
            change={formChange}
            name={"qty"}
          />
        </div>
        <ButtonGrn children={"Add"} type="submit" />
      </form>
    </section>
  );
}
