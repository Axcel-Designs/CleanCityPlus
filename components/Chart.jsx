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
  PieChart,
  Pie,
  Cell,
  Rectangle,
} from "recharts";

export default function Chart() {
  const { data } = useTracker();

  const categoryTotals = Object.values(
    data.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = { category: curr.category, qty: 0 };
      }
      acc[curr.category].qty += Number(curr.qty);
      return acc;
    }, {})
  );

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#8dd1e1"];

  return (
    <section className="container mx-auto my-4 p-4 shadow-xl rounded-2xl">
      <p className="text-2xl text-green-700 mb-4">Recycling Progress</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryTotals}>
            <XAxis dataKey="category" />
            <YAxis />
            <CartesianGrid strokeDasharray="5 5" />
            <Legend />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="qty"
              fill="#82ca9d"
              activeBar={<Rectangle fill="yellow" stroke="brown" />}
            />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip />
            <Legend />
            <Pie
              data={categoryTotals}
              dataKey="qty"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {categoryTotals.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <XAxis dataKey="category" />
            <YAxis />
            <CartesianGrid strokeDasharray="5 5" />
            <Legend />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="qty"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="item" />
            <YAxis />
            <CartesianGrid strokeDasharray="5 5" />
            <Legend />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="qty"
              fill="#8884d8"
              activeBar={<Rectangle fill="blue" stroke="brown" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
