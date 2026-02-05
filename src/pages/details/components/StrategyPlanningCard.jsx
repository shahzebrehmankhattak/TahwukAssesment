import { Card } from "antd";
import React from "react";
import { Progress } from "antd";

const StrategyPlanningCard = () => {
  return (
    <>
      <Card className="mt-2">
        <div className="flex justify-center md:justify-between items-center flex-wrap">
          <div className="grid justify-items-center md:justify-items-start">
            <div className="rounded-[30px] border border-[#E0E8ED]  p-[10px] text-center mb-2">
              <span className="font-medium text-xs capitalize text-[#8597A8] leading-[22px]">
                Strategy & Planning
              </span>
            </div>
            <p className="font-bold text-base leading-[16px] capitalize text-[#1D3557] mb-1">
              Digital Transformation Strategic Planning
            </p>
            <p className="font-normal text-sm leading-[16px] capitalize text-[#8597A8] mt-1">
              Develop comprehensive strategic plans for digital transformation
              aligned with organizational goals
            </p>
          </div>
          <div className="progrees">
            <Progress
              type="circle"
              strokeColor="#1EA54E"
              percent={100}
              format={(percent) => (
                <span className="font-bold text-[#1EA54E]">{percent}%</span>
              )}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default StrategyPlanningCard;
