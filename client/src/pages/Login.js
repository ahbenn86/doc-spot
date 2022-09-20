import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="section-wrapper">
      <div className="logo-200 login"></div>
      <div className="circle-logo">
        <div className="auth-wrapper">
          <div className="authentication login">
            <div className="authentication-form card p-3">
              <h1 className="card-title">Doc Spot Login</h1>
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Email" name="email">
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                  <Input placeholder="Password" type="password" />
                </Form.Item>
                <Button className="primary-button my-3" htmlType="submit">
                  LOGIN
                </Button>
                <Link to="/register" className="anchor login mt-2">
                  CLICK HERE TO REGISTER
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
