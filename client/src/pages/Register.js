import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/user/register", values);
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to login page")
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="section-wrapper">
      <div className="logo-200"></div>
      <div className="circle-logo"></div>
      <div className="auth-wrapper">
        <div className="authentication">
          <div className="authentication-form card p-3">
            <h1 className="card-title">Welcome to Doc Spot</h1>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item label="Name" name="name">
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input placeholder="Password" type="password" />
              </Form.Item>
              <Button className="primary-button my-3" htmlType="submit">
                REGISTER
              </Button>
              <Link to="/login" className="anchor mt-2">
                CLICK HERE TO LOGIN
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
