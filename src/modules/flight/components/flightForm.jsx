import { Card, Col, Form, Input, Row } from "antd";

import React from "react";

export default function FlightForm({
  form,
  initialValues = {},
  onSubmit,
  isLoading,
}) {
  return (
    <Form
      layout="vertical"
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      initialValues={initialValues}
      onFinish={onSubmit}
    >
      <Row>
        <Col span={12} offset={6}>
          <Card loading={isLoading}>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={24}>
                <Form.Item
                  label="Flight Code"
                  name="code"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Code",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Form>
  );
}
