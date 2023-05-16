import React from 'react';
import { Descriptions,Form, Button } from 'antd';

const ViewUser = ({ user }) => {
  return (
    <Descriptions title="User Info">
      <Descriptions.Item label="Username">{user.UserName}</Descriptions.Item>
      <Descriptions.Item label="Password">{user.Password}</Descriptions.Item>
      <Descriptions.Item label="Email">{user.Email}</Descriptions.Item>
      <Descriptions.Item label="FirstName">{user.FirstName}</Descriptions.Item>
      <Descriptions.Item label="Surname">{user.SurName}</Descriptions.Item>
      <Descriptions.Item label="FullName">{user.FullName}</Descriptions.Item>
      <Descriptions.Item label="ProvinceName">{user.ProvinceName}</Descriptions.Item>
      <Descriptions.Item label="DistrictName">{user.DistrictName}</Descriptions.Item>
      <Descriptions.Item label="WardName">{user.WardName}</Descriptions.Item>
      <Descriptions.Item label="AddressNo">{user.AddressNo}</Descriptions.Item>
      <Descriptions.Item label="FullNameA">{user.FullNameA}</Descriptions.Item>
      <Descriptions.Item label="DateOfBir">{user.DateOfBir}</Descriptions.Item>
      <Descriptions.Item label="IntroduceYourself">{user.IntroduceYourself}</Descriptions.Item>
    </Descriptions>,
    <Form>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ViewUser;