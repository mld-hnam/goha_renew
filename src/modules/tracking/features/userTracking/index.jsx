import React from "react";
import { Row, Col, Card, Timeline, Input, Button } from "antd";
import BillingInformation from "@/modules/order/components/billingInformation";
import { ArrowLeftOutlined, CheckCircleFilled } from "@ant-design/icons";
import useGetAllHistory from "../../services/useGetAllHistory";
import { OrderStatus } from "@/modules/order/services";
import { debounce } from "lodash";
import useOrderFindByCode from "../../services/useOrderFindByCode";
import { useNavigate } from "react-router-dom";

export default function UserTracking() {
  const { mutate: findCode, data } = useOrderFindByCode();
  const navigate = useNavigate();
  const onSearch = debounce((value) => {
    if (value) {
      findCode({ code: value });
    }
  }, 300);

  const { data: histories } = useGetAllHistory(
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

  return (
    <>
      <Row gutter={16}>
        <Col span={24}>
          <Button
            style={{ display: "flex", alignItems: "center", marginBottom: 30 }}
            onClick={() => navigate("/login")}
            type="primary"
          >
            <ArrowLeftOutlined />
          </Button>
        </Col>
        <Col span={24}>
          <Card title="Search order">
            <Input.Search
              onChange={(e) => onSearch(e.target.value)}
              onSearch={onSearch}
              placeholder="Please input order code..."
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={24}>
          {histories && (
            <Card title="Status Order">
              <Timeline mode="left">{renderTimeLine()}</Timeline>
            </Card>
          )}
        </Col>
        <Col span={24}>
          {data && <BillingInformation isPrint={false} data={data} />}
        </Col>
      </Row>
    </>
  );
}
