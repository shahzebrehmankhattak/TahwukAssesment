import { Card, Row, Col, Divider } from "antd";
import React from "react";
import { progressStatus } from "../../../assets/mock-data/ProgressData";
import { progressDataPercent } from "../../../assets/mock-data/ProgressData";
import { gridData } from "../../../assets/mock-data/ProgressData";
import { levelColors } from "../../../assets/mock-data/ProgressData";
import SemiCircularGauge from "../../../components/charts/SemiCircularGuage";
import { recentActivity, userData } from "../../../assets/mock-data/UserData";
import PerformanceBarChart from "../../../components/charts/BarChart";

const ProgressStatus = () => {
  return (
    <>
      <Card>
        <div className="flex justify-center md:justify-between flex-wrap mb-4">
          <h2 className="font-bold text-base leading-[16px] capitalize text-[#1D3557] ">
            Progress Status
          </h2>
          <div className="flex items-center flex-wrap gap-3">
            {progressStatus.map((item) => {
              return (
                <div className="flex items-center gap-1">
                  <div
                    className={`${item.color} h-[8px] w-[8px] rounded-full`}
                  ></div>
                  <span className="font-normal text-sm leading-[16px] capitalize text-[#1D3557]">
                    {item?.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <Row gutter={[14, 14]} justify="start">
          {progressDataPercent.map((card) => {
            return (
              <Col key={card} flex="1 0 10%">
                <Card className="bg-[#1D3557] rounded-[10px]">
                  <p className="font-bold text-xs leading-[16px] capitalize text-white text-center mb-2">
                    {card.name}
                  </p>
                  <div className="rounded-[10px] p-[10px] bg-[#FFFFFF1A] text-center text-white">
                    <p className="font-bold text-sm leading-[16px] capitalize text-white text-center ">
                      {card.percentage}
                    </p>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
        <div className="overflow-x-auto">
          <div className="flex gap-4 mt-3 min-w-max">
            {gridData.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-3">
                {column.items.map((item, itemIndex) => (
                  <Card
                    key={itemIndex}
                    size="small"
                    className="w-[140px] h-auto  rounded-xl border shadow-sm flex flex-col items-center bg-[#F5F8FB] border-[#E0E8ED]"
                  >
                    {/* Label */}
                    <div className="mb-2 font-normal text-[10px] leading-[16px] text-[#1D3557] text-center">
                      {item.label}
                    </div>

                    {/* Levels */}
                    <div className="flex flex-wrap justify-between gap-3 mt-2 p-4">
                      {item.levels.map((level, i) => (
                        <div
                          key={i}
                          className={`w-[24px] h-[24px] rounded-full flex items-center justify-center text-base font-normal ${levelColors[level]}`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Card>
      <Row gutter={[20, 15]}>
        <Col xl={8} lg={8} md={12} sm={12} xs={24}>
          <Card>
            <h3 className="font-bold text-base leading-[16px] capitalize text-[#1D3557] mb-10">
              Overall Compliance Score
            </h3>
            <div className="flex justify-center">
              <SemiCircularGauge value={65} title="Basic Standards 2025" />
            </div>
          </Card>
        </Col>
        <Col xl={8} lg={8} md={12} sm={12} xs={24}>
          <Card>
            <h3 className="font-bold text-base leading-[16px] capitalize text-[#1D3557] mb-12">
              Top Performing Perspective Leaders
            </h3>
            {userData?.map((user, index) => (
              <div key={user.id || index}>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full">
                      <img src={user.img} alt="" />
                    </div>
                    <div className="grid gap-1">
                      <p className="font-medium text-base leading-[22px] capitalize text-[#1D3557]">
                        {user.name}
                      </p>
                      <p className="font-medium text-base leading-[22px] capitalize text-[#8597A8]">
                        {user.description}
                      </p>
                    </div>
                  </div>
                  <div className="user-percentage">
                    <p className="font-bold text-base leading-[16px] capitalize text-[#1D3557]">
                      {user?.percentage}%
                    </p>
                  </div>
                </div>

                {/* Only show Divider if it's not the last user */}
                {index !== userData.length - 1 && <Divider />}
              </div>
            ))}
          </Card>
        </Col>
        <Col xl={8} lg={8} md={12} sm={12} xs={24}>
          <Card>
            <h4 className="font-bold text-base leading-[16px] capitalize text-[#1D3557]">
              Recent Activities
            </h4>
            <Divider className="mb-0" />
            {recentActivity?.map((user, index) => (
              <div key={user.id || index}>
                <div className="flex justify-between items-center mt-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#DB1F26] w-[6px] h-[6px]"></div>
                    <span className="font-medium text-base leading-[22px] capitalize text-[#1D3557]">
                      {user.activity}
                    </span>
                  </div>
                  <div className="user-percentage">
                    <p className="font-normal text-xs leading-[16px] capitalize text-[#8597A8]">
                      {user?.time} Ago
                    </p>
                  </div>
                </div>

                {/* Only show Divider if it's not the last user */}
                {index !== userData.length - 1 && <Divider />}
              </div>
            ))}
          </Card>
        </Col>
      </Row>
      <Row gutter={[15, 15]}>
        <Col xl={16} lg={16} md={24} sm={24} xs={24}>
          <Card>
            <h3 className="font-bold text-base leading-[16px] capitalize text-[#1D3557] mb-10">
              Audit Readiness
            </h3>
            <PerformanceBarChart />
          </Card>
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <Card>
            <h3 className="font-bold text-base leading-[16px] capitalize text-[#1D3557] mb-10">
              Audit Readiness
            </h3>
            <div className="flex justify-center">
              <SemiCircularGauge
                value={80}
                title="Basic Standards 2025"
                activeColor="#1EA54E"
                
              />
            </div>
            <Divider className=" mt-0"/>
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="grid justify-items-center items-center gap-2">
                  <p className="text-2xl font-bold leading-[16px] capitalize text-[#1D3557]">
                    12
                  </p>
                  <p className="text-sm font-normal leading-[16px] text-[#8597A8]">
                    Overdue Stds
                  </p>
                </div>
              </Col>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="grid justify-items-center items-center gap-2">
                  <p className="text-2xl font-bold leading-[16px] capitalize text-[#1D3557]">
                    5
                  </p>
                  <p className="text-sm font-normal leading-[16px] text-[#8597A8]">
                    Missing Evidence
                  </p>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProgressStatus;
