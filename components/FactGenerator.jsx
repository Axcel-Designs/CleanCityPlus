"use client";
import recyclingFacts from "@/utils/facts";
import { useState } from "react";
import Button from "./ui/Button";

const neatColors = [
  "#991b1b", // red-800
  "#9a3412", // orange-800
  "#166534", // green-800
  "#1e40af", // blue-800
  "#5b21b6", // violet-800
  "#86198f", // fuchsia-800
  "#374151", // gray-700
];

function randomColor() {
  return neatColors[Math.floor(Math.random() * neatColors.length)];
}

export default function FactGenerator() {
  const [randomFact, setRandomFact] = useState(
    recyclingFacts[Math.floor(Math.random() * recyclingFacts.length)]
  );
  const [ranColor, setRanColor] = useState("#166534");

  function getFacts() {
    setRandomFact(
      recyclingFacts[Math.floor(Math.random() * recyclingFacts.length)]
    );
    setRanColor(randomColor());
  }

  return (
    <div className="w-10/12 mx-auto text-center bg-green-50 p-4 my-4 flex flex-col justify-around items-center gap-2 min-h-[330px] rounded-2xl shadow-xl">
      <h1 className="text-gray-900 animate-bounce">Did You Know?</h1>
      <em
        style={{ color: ranColor }}
        className="my-4 transition-colors duration-500 ease-in-out text-2xl"
      >
        {randomFact}
      </em>
      <div className="my-4 font-bold">
        <Button onClick={getFacts}>New Fact</Button>
      </div>
    </div>
  );
}
