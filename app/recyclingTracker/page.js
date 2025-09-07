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
      <section className="container mx-auto my-4 p-4 ">
        <p className="text-2xl text-green-700">Badges</p>
        <div className="flex flex-wrap justify-start gap-2">
          <div>
            {data.length >= 10 && (
              <dl className="flex flex-col text-center shadow-xl/30 p-2 rounded-xl">
                <dt className="text-4xl shadow-2xl">🏆</dt>
                <b className='text-blue-600'>Champion Recycler </b>
                <p>10 recycling entries</p>
              </dl>
            )}
          </div>
          <div>
            {data.length >= 5 && (
              <dl className="flex flex-col text-center shadow-xl/30 p-2 rounded-xl">
                <dt className="text-4xl">🎊</dt>
                <b className='text-yellow-900'>Consistent Recycler</b>
                <p>5 recycling entries</p>
              </dl>
            )}
          </div>
          <div>
            {data.length > 0 && (
              <dl className="flex flex-col text-center shadow-xl/30 p-2 rounded-xl">
                <dt className="text-4xl">🎉</dt>
                <b className='text-red-600'>Getting Started </b>
                <p>1 recycling entry</p>
              </dl>
            )}
          </div>
        </div>
      </section>
      <TrackerForm />
      <Chart />
      <TrackerTable />
    </main>
  );
}
