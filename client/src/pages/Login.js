import { Form, Input, Button } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to home page");
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
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
