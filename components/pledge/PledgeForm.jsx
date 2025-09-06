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

export default function PledgeForm() {
  const { isShow, handleClose, handleShow } = useShow();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pledgeText: "",
  });
const [pledges, setPledges] = useState([]);

  function dataForm(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPledges((prev) => [...prev, formData])
    localStorage.setItem("formLocal", JSON.stringify([...prev, formData]));
    setFormData({ name: "", email: "", pledgeText: "" });
    handleShow();
  }
  useEffect(() => {
    const storedForm = JSON.parse(localStorage.getItem("formLocal"));
    if (storedForm) {
      setFormData(storedForm);
    }
  }, []);

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
            <label htmlFor={"pledgeText"} className="">
              Your Environmental Pledge
            </label>
            <textarea
              value={formData.pledgeText}
              onChange={dataForm}
              name="pledgeText"
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
      <div className="my-4">
        <Table striped="columns">
          <thead>
            {/* <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr> */}
            {pledges.map((item, i) => (
              <tr key={i}>
                <th>#</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.pledgeText}</th>
              </tr>
            ))}
          </thead>
          <tbody>
            {pledges.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.pledgeText}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
