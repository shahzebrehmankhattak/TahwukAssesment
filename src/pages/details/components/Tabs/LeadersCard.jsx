import { Card, Col, Row } from "antd";
import React from "react";
import { userData } from "../../../../assets/mock-data/UserData";

const LeadersCard = () => {
  return (
    <div className="common-card mt-4">
      <h3 className="font-bold text-base leading-[16px] capitalize text-[#1D3557] mb-3">
        Leaders
      </h3>
      <Row gutter={[15,15]}>
        {userData?.map((item) => {
          return (
            <>
              <Col xl={4.5} lg={4.5} md={6} sm={12} xs={24}>
                <Card className="bg-[#F5F8FA] border-none">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="grid gap-1">
                      <p className="font-medium text-base leading-[22px] capitalize text-[#1D3557]">
                        {item.name}
                      </p>
                      <p className="font-medium text-base leading-[22px] capitalize text-[#8597A8]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default LeadersCard;
