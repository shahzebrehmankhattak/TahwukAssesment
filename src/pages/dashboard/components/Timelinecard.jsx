import { Card } from "antd";
import React from "react";

const items = [
  {
    key: "1",
    label: 2026,
  },
  {
    key: "2",
    label: 2025,
  },
  {
    key: "3",
    label: 2024,
  },
];

const timelineData = [
  { date: "Mar 17", label: "Kickoff Workshop", status: "completed" },
  { date: "March 18", label: "Data Collection", status: "completed" },
  { date: "May 8", label: "Initial Phase", status: "current" },
  { date: "May 9–July 12", label: "Verification", status: "pending" },
  { date: "July 13", label: "Completion Reviews", status: "pending" },
  { date: "August 21", label: "Cycle Conclusion", status: "pending" },
];

const Timelinecard = () => {
  const completedCount = timelineData.filter(
    (item) => item.status === "completed"
  ).length;

  const progressPercent =
    (completedCount / (timelineData.length - 1)) * 100;
  return (
    <div className="common-card">
      <div className="w-full bg-white ">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Project Timeline</h2>
        <select className="border rounded-lg px-3 py-1 text-sm">
          <option>2026</option>
        </select>
      </div>

      <div className="relative">
  <div className="h-3 bg-gray-200 rounded-full" />
  <div
    className="h-3 bg-green-500 rounded-full absolute top-0 left-0 transition-all"
    style={{ width: `${progressPercent}%` }}
  />

  {/* Dots */}
  <div className="absolute inset-0 flex items-center">
    {timelineData.map((item, index) => {
      const isCompleted = item.status === "completed";
      const isCurrent = item.status === "current";

      return (
        <div key={index} className="flex-1 flex justify-center">
          <div
            className={`w-3 h-3 rounded-full z-10
              ${
                isCompleted
                  ? "bg-white"
                  : isCurrent
                  ? "bg-red-500"
                  : "bg-red-500"
              }
            `}
          />
        </div>
      );
    })}
  </div>
</div>

{/* Labels */}
<div className="flex justify-between mt-6 text-center">
  {timelineData.map((item, index) => (
    <div key={index} className="flex-1 text-xs">
      <p className="text-gray-500">{item.date}</p>
      <p className="font-medium mt-1">{item.label}</p>
    </div>
  ))}
</div>
    </div>
    </div>
  );
};

export default Timelinecard;
