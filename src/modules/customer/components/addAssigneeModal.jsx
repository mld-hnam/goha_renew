import React from "react";
import useUpdateCustomer from "../services/useUpdateCustomer";
import { useForm } from "antd/lib/form/Form";
import { Avatar, Button, Card, Col, Form, Input, List, Modal, Row } from "antd";
import { useAuth } from "@/hooks/useAuth";
import { useInvalidateCustomer } from "../services/useGetCustomers";
import { DeleteOutlined } from "@ant-design/icons";

export default function AddAssigneeModal({
  customer,
  closeModal,
  ...restProps
}) {
  const [form] = useForm();
  const invalidateCustomer = useInvalidateCustomer();
  const { mutateAsync: updateCustomer, isLoading } = useUpdateCustomer();
  const { profile } = useAuth();

  const onSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      const isAssignee = customer.assignee.find(
        (item) => item.phone === values.phone || item.email === values.email
      );
      if (!isAssignee) {
        const assignee = [...customer.assignee, values];
        await updateCustomer(
          {
            ...customer,
            assignee,
            id: customer.id,
            userId: profile.id,
          },
          {
            onSuccess: async () => {
              await invalidateCustomer();
              await closeModal();
            },
          }
        );
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const onRemove = () => {};

  return (
    <Modal
      {...restProps}
      title={`Update ${customer.fullname}`}
      footer={[
        <Button type="default" onClick={closeModal}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={isLoading}
          onClick={onSubmit}
        >
          Submit
        </Button>,
      ]}
      width={1000}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <List>
              {customer.assignee?.map((item, index) => (
                <List.Item key={item.email}>
                  <List.Item.Meta
                    avatar={<Avatar src="/img/avatars/thumb-1.jpg" />}
                    title={item.name}
                    description={item.email}
                  />
                  <div>
                    <Button
                      onClick={() => onRemove(item)}
                      shape="circle"
                      icon={<DeleteOutlined />}
                    />
                  </div>
                </List.Item>
              ))}
            </List>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Form layout="vertical" form={form}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid Email",
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
                    message: "Please enter a valid Address",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Modal>
  );
}
