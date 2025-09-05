"use client";
import useShow from "@/hooks/isShowHook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRecycle, FaHome, FaBars, FaTimes } from "react-icons/fa";
import { FaHandHoldingDollar, FaTableList } from "react-icons/fa6";

const navBar = [
  {
    label: "Home",
    path: "/",
    icon: <FaHome size="1.25em" />,
  },
  {
    label: "Waste",
    path: "/waste",
    icon: <FaTableList size="1.25em" />,
  },
  {
    label: " Recycling",
    path: "/recycling",
    icon: <FaRecycle size="1.25em" />,
  },
  {
    label: "Pledge",
    path: "/pledge",
    icon: <FaHandHoldingDollar size="1.25em" />,
  },
];

export function Navbar() {
  const path = usePathname();
  return (
    <>
      {navBar.map((menu, i) => (
        <Link
          href={menu.path}
          key={i}
          className={`hover:text-green-700 p-2 ${
            menu.path === path
              ? "font-bold text-green-950 border-b-2 border-red-600"
              : "text-green-800"
          }`}
        >
          <div className="flex items-center gap-2">
            {menu.icon}
            {menu.label}
          </div>
        </Link>
      ))}
    </>
  );
}

export default function Header() {
  const { isShow, tggleActive } = useShow();

  return (
    <>
      <header className="flex items-center justify-between p-4  gap-2 bg-green-50 border-b-2 border-green-600">
        <div className="flex items-center">
          <div className="rounded-full flex justify-around items-center text-center border-gray-400">
            <Link href={"/"}>
              <h3>CleanCity+</h3>
            </Link>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <Navbar />
        </nav>
        <div
          className="point hidden max-md:flex text-2xl text-green-950"
          onClick={tggleActive}
        >
          {isShow ? <FaTimes /> : <FaBars />}
        </div>
      </header>
      {isShow && (
        <nav className="md:hidden flex justify-end p-2 " onClick={tggleActive}>
          <div className="flex flex-col gap-4 mr-4">
            <Navbar />
          </div>
        </nav>
      )}
    </>
  );
}
