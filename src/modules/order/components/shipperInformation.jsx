import { Card, Col, Form, Input, Row } from "antd";
import AsyncCustomerSelect from "./asyncCustomerSelect";
import AsyncFlightSelect from "./asyncFlightSelect";

const ShipperFormPart = ({ form }) => {
  const onSelectCustomer = (value) => {
    form.setFieldsValue({
      fullName_ship: value.fullname,
      phone_ship: value.phone,
      address_ship: value.address,
    });
  };

  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Form.Item
              label="Email"
              name="email_ship"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-Mail!",
                },
                {
                  required: true,
                  message: "Please input your E-Mail!",
                },
              ]}
            >
              <AsyncCustomerSelect onSelect={onSelectCustomer} />
            </Form.Item>
            <Form.Item
              label="Flight No"
              name="flightNo"
              rules={[
                {
                  required: true,
                  message: "Please input your flight code!",
                },
              ]}
            >
              <AsyncFlightSelect />
            </Form.Item>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Form.Item
              label="Full Name"
              name="fullName_ship"
              rules={[
                {
                  required: true,
                  message: "Please input your Full Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone_ship"
              rules={[
                {
                  required: true,
                  message: "Please input your Phone!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your Address!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ShipperFormPart;
