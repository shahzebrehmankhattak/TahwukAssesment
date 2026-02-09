import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const SemiCircularGauge = ({
  value = 0,
  max = 100,
  thickness = 20,
  activeColor = "#E11D2E",
  inactiveColor = "#EEF2F6",
  title = "",
  valueSuffix = "%",
}) => {
  const percentage = Math.min(Math.max(value, 0), max);

  const data = [
    { name: "Active", value: percentage },
    { name: "Remaining", value: max - percentage },
  ];

  return (
    <div className="w-full max-w-[280px] sm:max-w-[280px] mx-auto relative aspect-square">
      {/* Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            innerRadius="70%"
            outerRadius="82%"
            dataKey="value"
            stroke="none"
            cornerRadius={50}
          >
            <Cell fill={activeColor} />
            <Cell fill={inactiveColor} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center mt-2">
        <div className="font-bold text-[#1D3557] text-2xl sm:text-4xl md:text-5xl">
          {Math.round((percentage / max) * 100)}
          {valueSuffix}
        </div>

        {title && (
          <div className="text-xs sm:text-sm md:text-base text-[#8597A8] text-center">
            {title}
          </div>
        )}
      </div>
    </div>
  );
};

export default SemiCircularGauge;
