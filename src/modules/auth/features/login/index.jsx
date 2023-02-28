import React from "react";
import { Button, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useAuthLogin } from "../../services";

export default function Login() {
  const { mutate: login, isLoading } = useAuthLogin();
  const onLogin = (values) => {
    login(values);
  };
  return (
    <Form layout="vertical" name="login-form" onFinish={onLogin}>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            message: "Please input your email",
          },
          {
            type: "email",
            message: "Please enter a validate email!",
          },
        ]}
      >
        <Input prefix={<MailOutlined className="text-primary" />} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined className="text-primary" />} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={isLoading}>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
}
