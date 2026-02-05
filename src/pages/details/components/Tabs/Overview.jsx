import { Button, Card, Table } from "antd";
import React from "react";
import { tableData } from "../../../../assets/mock-data/Overview";
import LeadersCard from "./LeadersCard";

const Overview = () => {
  return (
    <>
      <Card className="rounded-2xl border border-[#E0E8ED] shadow-sm">
        <div className="grid grid-cols-[200px_1fr] gap-4 overflow-x-auto">
          {tableData.map((row, index) => (
            <React.Fragment key={index}>
              {/* Left Column Label */}
              <div className="bg-[#F6F8FB] rounded-xl px-5 py-4 font-medium text-[#1D3557]">
                {row.label}
              </div>

              {/* Right Column Content */}
              <div className="bg-[#F6F8FB] rounded-xl px-6 py-4 text-sm text-[#1D3557] leading-relaxed">
                {row.value}
              </div>
            </React.Fragment>
          ))}
        </div>
      </Card>

      <LeadersCard />
    </>
  );
};

export default Overview;
