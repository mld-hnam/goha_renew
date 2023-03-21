import { Card, Col, Form, Input, Row } from "antd";

const ConsigneeInformation = () => {
  return (
    <Row gutter={16}>
      <Col span={16} offset={3}>
        <Card>
          <Form.Item
            label="Email"
            name="email_conSignee"
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
            <Input />
          </Form.Item>
          <Form.Item
            label="Full Name"
            name="fullName_conSignee"
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
            name="phone_conSignee"
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
            name="address_conSignee"
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
  );
};

export default ConsigneeInformation;
