import { Card, Col, Form, Input, List, Row } from "antd";

const ConsigneeInformation = ({ form }) => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card>
          <List>
            {form.getFieldValue("assignee")?.map((item) => (
              <List.Item key={item.email}>
                <List.Item.Meta title={item.name} description={item.email} />
                <div>
                  {item.phone} - {item.address}
                </div>
              </List.Item>
            ))}
          </List>
        </Card>
      </Col>
      <Col span={12}>
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
