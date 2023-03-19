import React, { useState } from "react";
import { Row, Col, Card, Space, Timeline } from "antd";
import AsyncOrderSelect from "@/modules/order/components/asyncOrderInput";
import BillingInformation from "@/modules/order/components/billingInformation";
import { CheckCircleFilled } from "@ant-design/icons";
import useGetAllHistory from "../../services/useGetAllHistory";
import Loading from "@/components/loading";
import { OrderStatus } from "@/modules/order/services";

export default function Tracking() {
  const [data, setData] = useState();

  const onSelect = (val) => {
    setData(val);
  };

  const { data: histories, isLoading } = useGetAllHistory(
    { orderId: data?.id },
    {
      enabled: Boolean(data),
    }
  );

  const renderTimeLine = () => {
    return Object.keys(OrderStatus).map((item) => {
      const currentItem = histories.find((k) => k?.status === item);
      const isActive = currentItem?.state === true;
      return (
        <Timeline.Item
          color={isActive ? "green" : "gray"}
          dot={isActive && <CheckCircleFilled style={{ fontSize: "16px" }} />}
          label={item}
        >
          {currentItem?.note || "Waiting..."}
        </Timeline.Item>
      );
    });
  };
  console.log({ histories });

  return (
    <>
      <div className="table-responsive">
        <Row gutter={16}>
          <Col span={12}>
            <Space gutter={32} direction="vertical" style={{ width: "100%" }}>
              <AsyncOrderSelect style={{ width: "100%" }} onSelect={onSelect} />
              {data && <BillingInformation data={data} isPrint={false} />}
            </Space>
          </Col>
          <Col span={12}>
            <Card title="Tracking Order">
              {isLoading ? (
                <div className="text-center">
                  <Loading />
                </div>
              ) : (
                <Timeline mode="left">{histories && renderTimeLine()}</Timeline>
              )}
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
