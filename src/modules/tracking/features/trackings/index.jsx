import React, { useState } from "react";
import { Row, Col, Card, Space } from "antd";
import AsyncOrderSelect from "@/modules/order/components/asyncOrderInput";
import BillingInformation from "@/modules/order/components/billingInformation";

export default function Tracking() {
  const [data, setData] = useState();
  const onSelect = (val) => {
    setData(val);
  };
  console.log({ data });
  return (
    <>
      <div className="flex p-3 justify-between">
        <div style={{ width: "70%" }}>
          {/* <FilterListOrder filters={filters} onChange={changeFilter} /> */}
        </div>
        <div className="flex justify-between"></div>
      </div>
      <div className="table-responsive">
        <Row gutter={16}>
          <Col span={12}>
            <Space gutter={32} direction="vertical" style={{ width: "100%" }}>
              <AsyncOrderSelect style={{ width: "100%" }} onSelect={onSelect} />
              {data && <BillingInformation data={data} isPrint={false} />}
            </Space>
          </Col>
          <Col span={12}>
            <Card></Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
