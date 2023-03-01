import React from "react";
import { Button, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useAuthLogin } from "../../services";
import { API_BASE_URL } from "@/configs/appConfig";

export default function Login() {
  const { mutate: login, isLoading } = useAuthLogin({});
  const [form] = Form.useForm();

  const onLogin = async () => {
    try {
      const values = await form.validateFields();
      console.log(values);
      console.log(API_BASE_URL);
      login(values, {
        onSuccess: (res) => {
          login(res);
        },
      });
    } catch (error) {}
  };

  return (
    <Form form={form} layout="vertical" name="login-form">
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
        <Button
          type="primary"
          htmlType="submit"
          onClick={onLogin}
          block
          loading={isLoading}
        >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
}
