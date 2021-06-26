import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useTokenStore } from "../utils/useTokenStore";

const Signin = () => {
  const { setTokens } = useTokenStore();
  const { push, location } = useHistory<{ from: { pathname: string } }>();

  const onFinish = async () => {};

  return (
    <div className=" flex justify-center mt-2 md:mt-20 ">
      <Form
        name="login"
        className="max-w-sm w-80"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item>
          <Typography.Title level={3}>Sign In</Typography.Title>
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your Email!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Link
            to="/forgot-password"
            className="float-right"
            component={Typography.Link}
          >
            Forgot password?
          </Link>
        </Form.Item>

        <Form.Item>
          <Button className="w-full" type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signin;
