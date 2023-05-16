import React from 'react';
import { Form, Input, Button } from 'antd';
import { initialData } from './List';

const onFinish = values => {
    const user = initialData.find(user => user.UserName === values.username && user.Password === values.password);
    if (user) {
      window.location.href = '/list';
    } else {
      alert('Invalid username or password');
    }
  };

const LoginForm = () => {
  return (
    
    <Form onFinish={onFinish}>
        <h1>Trang đăng nhập</h1>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input style={{ width: 300 }} />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password style={{ width: 300 }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Button htmlType="submit" href='/create'>
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;