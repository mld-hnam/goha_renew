import useModal from "@/hooks/useModal";
import AddAssigneeModal from "@/modules/customer/components/addAssigneeModal";
import { SendOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Col, Form, Input, List, Row } from "antd";
import VirtualList from "rc-virtual-list";

const ConsigneeInformation = ({ form }) => {
  const { openModal, closeModal } = useModal();
  const customer = form.getFieldValue("customer");

  const onAssign = (item) => {
    form.setFieldsValue({
      fullName_conSignee: item.name,
      email_conSignee: item.email,
      phone_conSignee: item.phone,
      address_conSignee: item.address,
    });
  };

  const onAddAssignee = (customer) => {
    return openModal(AddAssigneeModal, {
      customer,
      closeModal,
    });
  };

  return (
    <Row gutter={16}>
      <Col span={12}>
        <Card
          title="Assignees"
          extra={
            <Button onClick={() => onAddAssignee(customer)}>
              Add assignee
            </Button>
          }
        >
          <List>
            <VirtualList data={customer?.assignee} height={400} itemKey="phone">
              {(item) => (
                <List.Item key={item.phone}>
                  <List.Item.Meta
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={item.name}
                    description={item.email}
                  />
                  <div>
                    <Button
                      onClick={() => onAssign(item)}
                      shape="circle"
                      icon={<SendOutlined />}
                    />
                  </div>
                </List.Item>
              )}
            </VirtualList>
          </List>
        </Card>
      </Col>
      <Col span={12}>
        <Card>
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
