import { useState } from "react";

export default function useIsActive() {
  const [isActive, setIsActive] = useState(false)
  const tggleActive = () => setIsActive(!isActive)

  return { isActive, tggleActive };
}