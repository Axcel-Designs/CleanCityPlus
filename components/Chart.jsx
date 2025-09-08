'use client'
import { useTracker } from "@/app/context/TrackerContext";
import {AreaChart,Area,ResponsiveContainer} from 'recharts'

export default function Chart() {
   const { data } = useTracker()
  return (
    <section className="container mx-auto my-4 p-4 shadow-xl rounded-2xl">
      <div>Chart</div>
      {/* <ResponsiveContainer width={1} height={400}>
        <AreaChart data={data}>
          <Area type="monotone" dataKey="qty" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer> */}
    </section>
  );
}
