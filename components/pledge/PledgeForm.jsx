"use client";
import { useEffect, useState } from "react";
import { ButtonGrn } from "../ui/Button";
import Input from "../ui/Input";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Table,
} from "react-bootstrap";
import useShow from "@/hooks/isShowHook";

export default function PledgeForm({ onAddPledge }) {
  const { isShow, handleClose, handleShow } = useShow();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pledge: "",
  });


  function dataForm(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPledge(formData);
    setFormData({ name: "", email: "", pledge: "" });
    handleShow();
  }

  return (
    <>
      <div className="ring-1 p-4 shadow-xl">
        <p className="text-2xl text-green-700">
          Make Your Environmental Pledge
        </p>
        <em>
          Commit to making a positive impact on the environment. Your pledge
          will inspire others to take action!
        </em>
        <form autoComplete="on" onSubmit={handleSubmit}>
          <Input
            holder={"Enter your full name"}
            label={"Full Name"}
            value={formData.name}
            change={dataForm}
            name={"name"}
          />
          <Input
            holder={"Enter your email address"}
            label={"Email Address"}
            value={formData.email}
            change={dataForm}
            type="email"
            name={"email"}
          />
          <div className="my-4">
            <label htmlFor={"pledge"} className="">
              Your Environmental Pledge
            </label>
            <textarea
              value={formData.pledge}
              onChange={dataForm}
              name="pledge"
              className="bg-gray-100 w-full ring hover:ring-green-700 outline-0 resize-none p-2"
              placeholder="I pledge to... (e.g., reduce plastic use, recycle more, use public transport, etc.)"
              rows={4}
              required
            ></textarea>
          </div>
          <ButtonGrn type="submit" children={"My Pledge"} classN={"w-full"} />
        </form>
      </div>
      <div className="my-4">
        <Modal show={isShow} onHide={handleClose}>
          <ModalHeader closeButton>
            <ModalTitle>Thanks</ModalTitle>
          </ModalHeader>
          <ModalBody>Pledge submitted successfully!</ModalBody>
        </Modal>
      </div>
    </>
  );
}
