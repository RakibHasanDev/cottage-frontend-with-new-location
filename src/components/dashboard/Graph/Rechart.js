import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import SpinerLoading from "@/components/shared/SpinerLoading";

const Rechart = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const url = `https://cottage-backend-voilerplate.vercel.app/count/monthlyCount?year=${selectedYear}`;

  const { data = [], isLoading } = useQuery({
    queryKey: ["monthlyVisitors", selectedYear],
    queryFn: async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch data");
        const jsonData = await res.json();

        // Modify July 2023 data before setting state
        return jsonData.map((item) =>
          item?.month === "July, 2023"
            ? { ...item, visitors: item.visitors + 672 }
            : item
        );
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes to prevent unnecessary refetch
  });

  return (
    <div className="w-full">
      <div className="mb-4">
        <label
          className="dark:text-gray-100 font-semibold mr-2"
          htmlFor="yearPicker"
        >
          Select Year:
        </label>
        <select
          id="yearPicker"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border dark:border-gray-100 border-gray-400 rounded px-3 py-1 dark:bg-slate-500 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none"
        >
          {[...Array(10)].map((_, i) => {
            const year = new Date().getFullYear() - i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>

      {isLoading ? (
        <SpinerLoading />
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="visitors" fill="#82ca9d">
              <LabelList dataKey="visitors" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Rechart;
