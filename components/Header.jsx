"use client";
import useShow from "@/hooks/isShowHook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaRecycle,
  FaHome,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { FaHandHoldingDollar, FaTableList } from "react-icons/fa6";

const navBar = [
  {
    label: "Home",
    path: "/",
    icon: <FaHome size="1.25em" />,
  },
  {
    label: "Waste Categories",
    path: "/waste",
    icon: <FaTableList size="1.25em" />,
  },
  {
    label: " Recycling Tracker",
    path: "/recyclingTracker",
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
          className={`p-2 ${
            menu.path === path
              ? "font-bold text-green-900 border-b-2 border-red-600"
              : ""
          }`}
        >
          <div className="flex items-center gap-2 text-green-700">
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
  const [dark, setDark] = useState(false);

  const tggleDark = () => {
    setDark(!dark);
  };

  useEffect(() => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <>
      <header className="flex items-center justify-between p-4 gap-2 bg-white/98 dark:bg-gray-900/98 dark:text-gray-200 shadow/20 z-40">
        <div className="flex items-center">
          <div className="rounded-full flex justify-around items-center text-center border-gray-400">
            <Link href={"/"} className="no-underline">
              <h3>CleanCity+</h3>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <nav className="hidden md:flex items-center gap-2">
            <Navbar />
          </nav>
          <div
            onClick={tggleDark}
            className="rounded-lg point text-xl text-green-900 dark:text-green-200"
          >
            {!dark ? <FaMoon /> : <FaSun />}
          </div>
          <div
            className="point hidden max-md:flex text-2xl text-green-950 dark:text-green-200"
            onClick={tggleActive}
          >
            {isShow ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>
      <div
        className={`
          bg-red-200 w-full overflow-hidden transition-all duration-500 ease-in-out 
           ${isShow ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {isShow && (
          <nav
            className="md:hidden flex justify-end p-2 fixed top-21 right-0 h-full  bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
            onClick={tggleActive}
          >
            <div className="flex flex-col gap-4 mr-4">
              <Navbar />
            </div>
          </nav>
        )}
      </div>
    </>
  );
}
