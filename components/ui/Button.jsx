"use client";

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-xl shadow-sm ring ring-[#b45309] text-[#b45309] bg-white hover:bg-[#b45309] hover:text-[#000] transition-colors duration-200 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
export function ButtonGrn({
  children,
  onClick,
  className = "",
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-xl shadow-sm ring ring-green-700 bg-green-700 text-white hover:text-green-700 hover:bg-[#000] transition-colors duration-200 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
