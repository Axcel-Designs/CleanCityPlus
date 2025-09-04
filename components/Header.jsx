"use client";
import useIsActive from "@/hooks/isActiveHook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navBar = [
  {
    label: "Home",
    path: "/",
    icon: <i className="fa-solid fa-house fa-lg"></i>,
  },
  {
    label: "Waste Categories",
    path: "/wasteCategories",
    icon: <i className="fa-solid fa-table-list fa-lg"></i>,
  },
  {
    label: " Recycling Tracker",
    path: "/recyclingTracker",
    icon: <i className="fa-solid fa-recycle fa-lg"></i>,
  },
  {
    label: "Pledge",
    path: "/pledge",
    icon: <i className="fa-solid fa-hand-holding-dollar fa-lg"></i>,
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
          className={`hover:text-blue-900 p-2 ${
            menu.path === path
              ? "font-bold text-blue-950 border-b-2 border-red-600"
              : "text-gray-700"
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
  const { isActive, tggleActive } = useIsActive();

  return (
    <>
      <header className="flex items-center justify-between p-4 md:p-8 gap-2 shadow-lg/20">
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
        <div className="hidden max-md:flex" onClick={tggleActive}>
          <i
            className={`fa-solid fa-xl ${isActive ? "fa-times" : "fa-bars"}`}
          ></i>
        </div>
      </header>
      {isActive && (
        <nav className="md:hidden flex justify-end p-2 " onClick={tggleActive}>
          <div className="flex flex-col gap-4 mr-4">
            <Navbar />
          </div>
        </nav>
      )}
    </>
  );
}
