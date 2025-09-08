"use client";
import { useTracker } from "@/app/context/TrackerContext";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function Chart() {
  const { data } = useTracker();
  return (
    <ResponsiveContainer width={1} height={400}>
      <AreaChart data={data}>
        <Area type="monotone" dataKey="qty" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
