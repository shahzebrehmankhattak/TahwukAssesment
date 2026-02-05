import { Card, Col, Row } from "antd";
import React from "react";
import file from "../../../assets/files.png";
import fileExport from "../../../assets/file-export.png";
import fileSearch from "../../../assets/file-Search.png";
import fileValidation from "../../../assets/file-verified.png";

const EvidenceCards = () => {
  return (
    <Row gutter={[15, 15]} className="mt-2">
      <Col xl={6} lg={6} md={6} sm={6} xs={12}>
        <Card>
          <div className="flex items-center gap-4">
            <img src={file} alt="" />
            <div>
              <p className="font-bold text-2xl leading-[16px] capitalize text-[#1D3557]">
                4
              </p>
              <p className="font-normal text-sm leading-[16px] capitalize text-[#8597A8] mt-3">
                Total Evidence
              </p>
            </div>
          </div>
        </Card>
      </Col>
      <Col xl={6} lg={6} md={6} sm={6} xs={12}>
        <Card>
          <div className="flex items-center gap-4">
            <img src={fileSearch} alt="" />
            <div>
              <p className="font-bold text-2xl leading-[16px] capitalize text-[#1D3557]">
                3
              </p>
              <p className="font-normal text-sm leading-[16px] capitalize text-[#8597A8] mt-3">
                Under Review Evidence
              </p>
            </div>
          </div>
        </Card>
      </Col>
      <Col xl={6} lg={6} md={6} sm={6} xs={12}>
        <Card>
          <div className="flex items-center gap-4">
            <img src={fileExport} alt="" />
            <div>
              <p className="font-bold text-2xl leading-[16px] capitalize text-[#1D3557]">
                2
              </p>
              <p className="font-normal text-sm leading-[16px] capitalize text-[#8597A8] mt-3">
                In Progress Evidence
              </p>
            </div>
          </div>
        </Card>
      </Col>
      <Col xl={6} lg={6} md={6} sm={6} xs={12}>
        <Card>
          <div className="flex items-center gap-4">
            <img src={fileValidation} alt="" />
            <div>
              <p className="font-bold text-2xl leading-[16px] capitalize text-[#1D3557]">
                1
              </p>
              <p className="font-normal text-sm leading-[16px] capitalize text-[#8597A8] mt-3">
                Completed Evidence
              </p>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default EvidenceCards;
