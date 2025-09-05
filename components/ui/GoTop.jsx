"use client";
import useHoverHook from "@/hooks/hoverHook";
import React from "react";
import { FaAnglesUp } from "react-icons/fa6";

export default function GoTop() {
  const { active, handleHover } = useHoverHook();
  return (
    <section className="fixed bottom-20 flex justify-end cursor-pointer right-8">
      <div
        {...handleHover}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={active ? "text-gray-800" : ""}
      >
        <i className="text-2xl">
          <FaAnglesUp />
        </i>
      </div>
    </section>
  );
}

//   return (
//     <section className="fixed bottom-20 right-8 z-50">
//       <div
//         {...handleHover}
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className={`cursor-pointer transition-colors duration-200 ${
//           active ? "text-gray-900" : "text-gray-500"
//         }`}
//       >
//         <i className="fa-solid fa-angles-up fa-xl"></i>
//       </div>
//     </section>
//   );
// }
