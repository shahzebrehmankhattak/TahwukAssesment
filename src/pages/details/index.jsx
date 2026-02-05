import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import StrategyPlanningCard from "./components/StrategyPlanningCard";
import EvidenceCards from "./components/EvidenceCards";
import Tabs from "./components/Tabs";

const Details = () => {
  const naviagte = useNavigate();
  return (
    <>
      <div className="flex items-center gap-2  mb-5">
        <ArrowLeftOutlined
          className="#1D3557 text-base"
          onClick={() => {
            naviagte(-1);
          }}
        />
        <h2 className="font-bold text-base leading-[16px] capitalize text-[#1D3557]">
          Digital Transformation Strategic Planning
        </h2>
      </div>
      <StrategyPlanningCard />
      <EvidenceCards />
      <Tabs />
    </>
  );
};

export default Details;
