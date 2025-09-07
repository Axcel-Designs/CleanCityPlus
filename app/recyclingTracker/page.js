"use client";
import Chart from "@/components/Chart";
import TrackerForm from "@/components/tracker/TrackerForm";
import TrackerTable from "@/components/tracker/TrackerTable";
import { useTracker } from "../context/TrackerContext";

export default function RecyclingTracker() {
  const { data } = useTracker();

  const totalQuantity = data.reduce((acc, crr, i) => {
    acc += Number(crr.qty);
    return acc;
  }, 0);

  return (
    <main className="container mx-auto my-20">
      <section className="text-center">
        <p className="text-6xl text-green-700">Recycling Tracker</p>
        <em>
          Log your recycling efforts, track your emrogress, and earn achievement
          badges for making a positive environmental impact
        </em>
      </section>
      <section className="my-4 flex gap-2">
        <div className="shadow-xl wo-[190px] flex flex-col items-center text-gray-700 bg-blue-200 p-4 text-center rounded-2xl">
          <p className="text-4xl text-blue-600">🔢 </p>
          <p>Number of Recycle</p>
          <p className="text-2xl font-semibold">{data.length}</p>
        </div>
        <div className="shadow-xl w-[190px] flex flex-col items-center text-gray-700 bg-blue-200 p-4 text-center rounded-2xl">
          <p className="text-4xl text-blue-600">♻️</p>
          <p>Items Recycled</p>
          <p className="text-2xl font-semibold">{totalQuantity}</p>
        </div>
      </section>
      <TrackerForm />
      <Chart />
      <section></section>
      <TrackerTable />
    </main>
  );
}
