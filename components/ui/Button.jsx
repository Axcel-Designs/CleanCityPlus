"use client";

import useHoverHook from "@/hooks/hoverHook";

export default function Button({ children, onClick, type = "button" }) {
  const { active, handleHover } = useHoverHook();

  return (
    <button
      onClick={onClick}
      {...handleHover}
      className={`py-2 px-4 rounded-xl shadow-sm transition-colors duration-200 border ${
        active ? "bg-[#b45309] text-white" : "bg-white text-[#b45309]"
      }`}
      type={type}
    >
      {children}
    </button>
  );
}
export function ButtonGrn({ children, onClick, type = "button" }) {
    const { active, handleHover } = useHoverHook();
  return (
    <button
      {...handleHover}
      onClick={onClick}
      className={`py-2 px-4 rounded-xl shadow-sm border transition-colors duration-200 ${
        active ? "text-green-700 bg-white" : "bg-green-700 text-white "
      }`}
      type={type}
    >
      {children}
    </button>
  );
}
