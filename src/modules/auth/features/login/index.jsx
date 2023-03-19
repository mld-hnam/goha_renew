import React from "react";
import { Button, Card, Col, Form, Input, Row } from "antd";

import { MailOutlined, LockOutlined } from "@ant-design/icons";

import { useAuthLogin } from "../../services";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const { mutate: login, isLoading } = useAuthLogin();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { updateToken, updateUser } = useAuth();

  const onLogin = async () => {
    try {
      const values = await form.validateFields();
      login(values, {
        onSuccess: (res) => {
          updateToken(res.tokens.access_token);
          updateUser(JSON.stringify(res.user));
          navigate("/dashboard");
        },
      });
    } catch (error) {}
  };

  return (
    <Row justify="center" align="center">
      <Col xs={24} sm={24} md={20} lg={18} xl={10}>
        <div className="mt-4">
          <Card style={{ widtd: "100%" }}>
            <h1>Sign In</h1>
            <p>
              Do you want check order ?{" "}
              <Link to="/tracking">Tracking page</Link>
            </p>
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
                <Input.Password
                  prefix={<LockOutlined className="text-primary" />}
                />
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
          </Card>
        </div>
      </Col>
    </Row>
  );
}
