import React from "react";
import useUpdateCustomer from "../services/useUpdateCustomer";
import { useForm } from "antd/lib/form/Form";
import { Avatar, Button, Card, Col, Form, Input, List, Modal, Row } from "antd";
import { useAuth } from "@/hooks/useAuth";
import { useInvalidateCustomer } from "../services/useGetCustomers";
import { DeleteOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import VirtualList from "rc-virtual-list";

export default function AddAssigneeModal({
  customer,
  closeModal,
  ...restProps
}) {
  const [form] = useForm();
  const invalidateCustomer = useInvalidateCustomer();
  const { mutateAsync: updateCustomer, isLoading } = useUpdateCustomer({});
  const { profile } = useAuth();
  const navigate = useNavigate();

  const onUpdateCustomer = async (customer) => {
    try {
      await updateCustomer(
        {
          ...customer,
          id: customer.id,
          userId: profile.id,
        },
        {
          onSuccess: async () => {
            await invalidateCustomer();
            await closeModal();
            navigate("/customers");
          },
        }
      );
    } catch (error) {
      console.log({ error });
    }
  };

  const onSubmit = async () => {
    await form.validateFields();
    const values = form.getFieldsValue();
    const isAssignee = customer.assignee.find(
      (item) => item.phone === values.phone || item.email === values.email
    );
    if (!isAssignee) {
      const assignee = [...customer.assignee, values];
      const payload = {
        ...customer,
        assignee,
      };
      onUpdateCustomer(payload);
    }
  };

  const onRemove = async (item) => {
    const dataUpdate = customer.assignee.filter(
      (k) => k.phone !== item.phone || k.email !== item.email
    );
    if (!dataUpdate) return;
    const payload = {
      ...customer,
      assignee: dataUpdate,
    };
    onUpdateCustomer(payload);
  };

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
          <Card title="Assignees">
            <List>
              <VirtualList
                data={customer.assignee}
                height={400}
                itemKey="phone"
              >
                {(item) => (
                  <List.Item key={item.email}>
                    <List.Item.Meta
                      avatar={<Avatar icon={<UserOutlined />} />}
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
                )}
              </VirtualList>
            </List>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Create assignee">
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
