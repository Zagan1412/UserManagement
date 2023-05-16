import React from 'react';
import { Form, Input, Button } from 'antd';
import { initialData } from './List';

const CreateUserForm = () => {
    const onFinish = values => {
        const newUser = {
          key: Date.now().toString(),
          UserName: values.UserName,
          Password: values.Password,
          Email: values.Email,
          FirstName: values.FirstName,
          SurName: values.SurName,
          FullName: values.FullName,
          ProvinceName: values.ProvinceName,
          DistrictName: values.DistrictName,
          WardName: values.WardName,
          AddressNo: values.AddressNo,
          FullNameA: values.FullNameA,
          DateOfBir: values.DateOfBir,
          IntroduceYourself: values.IntroduceYourself
        };
        initialData.push(newUser);
        window.location.href = '/list';
      };

  return (
    <Form onFinish={onFinish}>
        <Form.Item>
            <center><h1>Tạo tài khoản</h1></center>
        </Form.Item>
      <Form.Item
        label="Username"
        name="UserName"
        rules={[{ required: true, message: 'Please input a username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="Password"
        rules={[{ required: true, message: 'Please input a password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Email"
        name="Email"
        rules={[{ required: true, message: 'Please input an email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="First Name"
        name="FirstName"
        rules={[{ required: true, message: 'Please input a first name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Surname"
        name="SurName"
        rules={[{ required: true, message: 'Please input a surname!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Full Name"
        name="FullName"
        rules={[{ required: true, message: 'Please input a fullname!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="Address"
      >
            <Form.Item
                label="ProvinceName"
                name="ProvinceName"
                rules={[{ required: true, message: 'Please input a provinceName!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="DistrictName"
                name="DistrictName"
                rules={[{ required: true, message: 'Please input a districtName!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="WardName"
                name="WardName"
                rules={[{ required: true, message: 'Please input a WardName!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="AddressNo"
                name="AddressNo"
                rules={[{ required: true, message: 'Please input a AddressNo!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="FullNameA"
                name="FullNameA"
                rules={[{ required: true, message: 'Please input a FullName!' }]}
            >
                <Input />
            </Form.Item>
      </Form.Item>
      <Form.Item
        label="Date Of Bir"
        name="DateOfBir"
        rules={[{ required: true, message: 'Please input a DateOfBir!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Introduce Your self"
        name="IntroduceYourself"
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateUserForm;