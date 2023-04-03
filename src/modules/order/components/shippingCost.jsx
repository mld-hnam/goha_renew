import {
  Button,
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Space,
  Typography,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import React from "react";

const ShippingCost = ({ values }) => {
  return (
    <Card>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Weight"
            name="weight"
            rules={[
              {
                required: true,
                message: "Please input your Weight!",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Shipping Cost Per LBS"
            name="cost"
            rules={[
              {
                required: true,
                message: "Please input your Cost!",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>

          <Row gutter={6}>
            <Col span={18}>
              <Typography
                style={{
                  textAlign: "left",
                  paddingTop: 5,
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Other Fees:
              </Typography>

              <Form.List label="Other Fees:" name="fees">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, "name"]}
                          rules={[{ required: true, message: "Missing name" }]}
                        >
                          <Input placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "price"]}
                          rules={[{ required: true, message: "Missing price" }]}
                        >
                          <InputNumber
                            placeholder="Price"
                            style={{ width: "100%" }}
                          />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        style={{
                          width: "120px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        icon={<PlusOutlined />}
                      >
                        Add More
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Insurance"
            name="insurance"
            rules={[
              {
                required: true,
                message: "Please input your Insurance!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>Yes</Radio>
              <Radio value={false}>No</Radio>
            </Radio.Group>
          </Form.Item>

          {values?.insurance === true && (
            <Form.Item
              label="Declare Value"
              name="declareValue"
              rules={[
                {
                  required: true,
                  message: "Please input your Declare Value!",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>
          )}

          <Form.Item
            label="Payment By"
            name="paymentBy"
            rules={[
              {
                required: true,
                message: "Please input your Payment By!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="ZELLE">ZELLE</Radio>
              <Radio value="CASH">CASH</Radio>
              <Radio value="UNPAID">UNPAID</Radio>
            </Radio.Group>
          </Form.Item>

          <Row>
            <Col span={24}>
              <Typography
                style={{
                  textAlign: "left",
                  paddingTop: 5,
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Package Number: {values?.packageNumber?.length}
              </Typography>

              <Form.List label="Other Fees:" name="packageNumber">
                {(fields, { add, remove }) => (
                  <Row>
                    <Col span={24}>
                      {fields.map(({ key, name, ...restField }) => (
                        <Row>
                          <Col span={18}>
                            <Form.Item
                              {...restField}
                              name={[name, "lbs"]}
                              rules={[
                                { required: true, message: "Missing lbs" },
                              ]}
                            >
                              <Input width={100} placeholder="lbs" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, "description"]}
                              rules={[
                                {
                                  required: true,
                                  message: "Missing description",
                                },
                              ]}
                            >
                              <Input.TextArea
                                placeholder="Description"
                                width={200}
                                rows={3}
                              />
                            </Form.Item>
                          </Col>
                          <Col span={6}>
                            <Space style={{ padding: 10 }}>
                              <MinusCircleOutlined
                                onClick={() => remove(name)}
                              />
                            </Space>
                          </Col>
                        </Row>
                      ))}
                    </Col>
                    <Col span={24}>
                      <Form.Item>
                        <Button
                          type="dashed"
                          onClick={() => add()}
                          block
                          style={{
                            width: "120px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          icon={<PlusOutlined />}
                        >
                          Add More
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                )}
              </Form.List>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ShippingCost;
