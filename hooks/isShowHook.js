import { useState } from "react";

export default function useShow() {
  const [isShow, setIsShow] = useState(false);
  const tggleActive = () => setIsShow(!isShow);

  return { isShow, tggleActive };
}
