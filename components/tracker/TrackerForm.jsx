"use client";
import React, { useState } from "react";
import { ButtonGrn } from "../ui/Button";
import Input from "../ui/Input";
import { wasteCat } from "@/utils/facts";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import useShow from "@/hooks/isShowHook";
import { useTracker } from "@/app/context/TrackerContext";

export default function TrackerForm() {
  const { data, setData, formData, setFormData } = useTracker();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const { isShow, handleClose, handleShow } = useShow();

  function formChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    setData([...data, formData]);
    localStorage.setItem("entryLocal", JSON.stringify([...data, formData]));
    setFormData({ item: "", qty: "", category: "" });
    handleShow();
    // setIsSubmit(true);
  }

  return (
    <section className="container mx-auto my-4 p-4 shadow-xl rounded-2xl">
      <p className="text-2xl text-green-700">Add Recycling Entry</p>
      <form onSubmit={handleSubmit} autoComplete="on">
        <div className="flex flex-wrap justify-between items-center gap-1">
          <select
            className="ring px-4 py-2 bg-gray-100 outline-0"
            name="category"
            value={formData.category}
            onChange={formChange}
          >
            {wasteCat.map((category, i) => (
              <option key={i} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <Input
            label={"Item Description"}
            holder={"Enter item description"}
            value={formData.item}
            change={formChange}
            name={"item"}
          />
          <Input
            label={"Quantity"}
            holder={"Enter quantity"}
            type="number"
            value={formData.qty}
            change={formChange}
            name={"qty"}
          />
        </div>
        <ButtonGrn children={"Add"} type="submit" />
      </form>
      <div className="my-4">
        <Modal show={isShow} onHide={handleClose}>
          <ModalHeader closeButton>
            <ModalTitle>Thanks</ModalTitle>
          </ModalHeader>
          <ModalBody>Logged successfully!</ModalBody>
        </Modal>
      </div>
    </section>
  );
}
