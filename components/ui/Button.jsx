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
      className={`py-2 px-4 rounded-xl shadow-sm ring ring-yellow-700 text-yellow-700 bg-white hover:bg-yellow-700 hover:text-white transition-colors duration-200 ${className}`}
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
      className={`py-2 px-4 rounded-xl shadow-sm ring ring-green-700 bg-green-700 text-white hover:text-green-700 hover:bg-white transition-colors duration-200 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
