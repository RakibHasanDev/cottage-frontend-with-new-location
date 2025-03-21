import React, { useState, memo, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import SpinerLoading from "@/components/shared/SpinerLoading";

const AreaRechartComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const selectedYear = selectedDate.getFullYear();
  const selectedMonth = selectedDate.getMonth() + 1; // getMonth() is 0-based

  const url = `https://cottage-backend-voilerplate.vercel.app/count/dailyCount?year=${selectedYear}&month=${selectedMonth}`;

  const { data = [], isLoading } = useQuery({
    queryKey: ["updateCount", selectedYear, selectedMonth],
    queryFn: async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch data");
        return await res.json();
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes to prevent unnecessary re-fetching
  });

  const formattedData = useMemo(() => data, [data]);

  return (
    <div>
      <div className="mb-4">
        <label className="dark:text-gray-100 font-semibold mr-2">
          Select Month:
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={setSelectedDate}
          dateFormat="MM/yyyy"
          showMonthYearPicker
          className="border dark:border-gray-100 border-gray-400 rounded px-2 py-1 dark:bg-slate-500 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      {isLoading ? (
        <SpinerLoading />
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={formattedData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" style={{ fontSize: "14px" }} />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#8884d8"
              fill="url(#colorUv)"
            >
              <LabelList dataKey="visitors" position="top" />
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default memo(AreaRechartComponent);
