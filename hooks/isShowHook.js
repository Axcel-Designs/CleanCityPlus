import { useState } from "react";

export default function useShow() {
  const [isShow, setShow] = useState(false);
  const tggleActive = () => setShow(!isShow);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return { isShow, handleClose, handleShow, tggleActive };
}
