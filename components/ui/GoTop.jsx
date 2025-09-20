"use client";
import { FaAnglesUp } from "react-icons/fa6";

export default function GoTop() {
  return (
    <section className="fixed bottom-20 flex justify-end cursor-pointer right-8">
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-green-950 dark:text-green-200"
      >
        <FaAnglesUp className="text-2xl" />
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
