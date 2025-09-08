"use client";
import { useTracker } from "@/app/context/TrackerContext";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

export default function Chart() {
  const { data } = useTracker();
  return (
    <section className="container mx-auto my-4 p-4 shadow-xl rounded-2xl flex max-md:flex-wrap">
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <XAxis dataKey="item" />
          <YAxis />
          <CartesianGrid strokeDasharray="5 5 " />
          <Legend />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="qty"
            stroke="#8884d8"
            fill="#8884d8"
            // stackId="1"
          />
          <Area
            type="monotone"
            dataKey="category"
            stroke="#82ca9d"
            fill="#82ca9d"
            // stackId="1"
          />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="item" />
          <YAxis />
          <CartesianGrid strokeDasharray="5 5 " />
          <Legend />
          <Tooltip />
          <Bar
            type="monotone"
            dataKey="qty"
            stroke="#8884d8"
            fill="#8884d8"
            // stackId="1"
          />
          <Bar
            type="monotone"
            dataKey="category"
            stroke="#82ca9d"
            fill="#82ca9d"
            // stackId="1"
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
