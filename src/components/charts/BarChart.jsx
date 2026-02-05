import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Sample data for 12 months
const performanceData = [
  { month: "Jan", performance: 75 },
  { month: "Feb", performance: 60 },
  { month: "Mar", performance: 80 },
  { month: "Apr", performance: 55 },
  { month: "May", performance: 90 },
  { month: "Jun", performance: 70 },
  { month: "Jul", performance: 85 },
  { month: "Aug", performance: 60 },
  { month: "Sep", performance: 95 },
  { month: "Oct", performance: 50 },
  { month: "Nov", performance: 78 },
  { month: "Dec", performance: 88 },
];

const PerformanceBarChart = ({ data = performanceData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        {/* Define the gradient */}
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0078D7" stopOpacity={1} />
            <stop offset="100%" stopColor="#0078D7" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="month" />
        <YAxis domain={[0, 100]} />
        <Tooltip />

        {/* Apply gradient fill to the bars */}
        <Bar dataKey="performance" fill="url(#barGradient)" barSize={35} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceBarChart;
