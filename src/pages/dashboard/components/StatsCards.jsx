import { Card, Col, Row } from "antd";
import React from "react";

import { progressData } from '../../../assets/mock-data/ProgressData';



const StatsCards = () => {
  return (
    <>
      <Row gutter={[10,10]}>
        {progressData.map((item) => {
          return (
            <Col xl={4} lg={8} md={8} sm={8} xs={12}>
              <div className="common-card">
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold text-2xl leading-[16px] capitalize text-[#1D3557]">{item.percentage}</h3>
                  <img src={item.icon} alt="" />
                </div>
                <p className="font-normal text-sm leading-[16px] capitalize text-[#8597A8]">{item.label}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default StatsCards;

