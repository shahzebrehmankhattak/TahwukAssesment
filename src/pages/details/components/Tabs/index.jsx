import React, { useState } from "react";
import Overview from "./Overview";
import { Button, Card, Table } from 'antd'
import Evidence from "./Evidence";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <>
      <div className="flex gap-3 mb-4 bg-[#E0E8ED80] p-1 rounded-lg w-[235px] mt-4">
        <Button
          onClick={() => setActiveTab("overview")}
          className={`px-6 rounded  border-none font-normal text-sm ${
            activeTab === "overview"
              ? "bg-white text-[#1D3557] "
              : "bg-transparent text-[#8597A8]"
          }`}
        >
          Overview
        </Button>

        <Button
          onClick={() => setActiveTab("evidence")}
          className={`px-6 rounded border-none font-normal text-sm ${
            activeTab === "evidence"
              ? "bg-white text-[#1D3557] "
              : "bg-transparent text-[#8597A8] border-none"
          }`}
        >
          Evidence
        </Button>
      </div>
  {activeTab === "overview" && (
    <div>
      <Overview/>
    </div>
      )}

      {activeTab === "evidence" && (
        <div>
        <Evidence/>
        </div>
      )}
    </>
  );
};

export default Tabs;
