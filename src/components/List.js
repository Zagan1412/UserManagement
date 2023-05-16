import React,{useState} from 'react';
import { Button, Table } from 'antd';

export const initialData = [
  {
    key: '1',
    UserName: 'Zagan',
    Password: '123',
    Email: 'okita@gmail.com',
    FirstName: 'A',
    SurName: 'Nguyen',
    FullName: 'Nguyen Van A',
    
      ProvinceName: 'TP.HCM',
      DistrictName: 'Go Vap',
      WardName: '12',
      AddressNo: '448/31 Phan Huy Ich',
      FullNameA: '448/31 Phan Huy Ich, 12, Go Vap, TP.HCM ',
    
    DateOfBir: '14/12/2003',
    IntroduceYourself: 'IntroduceYourself'
  },
  {
    key: '2',
    UserName: 'Sonia',
    Password: '345',
    Email: 'aoi@gmail.com',
    FirstName: 'C',
    SurName: 'Pham',
    FullName: 'Pham Thi C',
    
      ProvinceName: 'TP.HCM',
      DistrictName: '4',
      WardName: '',
      AddressNo: '435',
      FullNameA: '435, , 4, TP.HCM ',
    
    DateOfBir: '15/10/2003',
    IntroduceYourself: 'IntroduceYourself'
  },
  {
    key: '3',
    UserName: 'Ikatatsu',
    Password: '135',
    Email: 'lubu@gmail.com',
    FirstName: 'D',
    SurName: 'Tran',
    FullName: 'Tran Thien D',
    
      ProvinceName: 'TP.HCM',
      DistrictName: 'Binh Thanh',
      WardName: '1',
      AddressNo: '435',
      FullNameA: '435, 1, Binh Thanh, TP.HCM ',
    
    DateOfBir: '15/10/2003',
    IntroduceYourself: 'IntroduceYourself'
  }
  
];

const UserList = ({ onSelectUser }) => {
    const [data, setData] = useState(initialData);
  const handleSelectUser = (user) => {
    onSelectUser(user);
  };

  const handleAddUser = (newUser) => {
    setData([...data, newUser]);
  };

  const handleDeleteUser = (user) => {
    const newData = data.filter(item => item.key !== user.key);
    setData(newData);
  };

  const columns = [
    {
      title: 'Username',
      dataIndex: 'UserName',
      key: 'UserName',
    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    },
    {
        render: (text, record) => <a onClick={() => handleSelectUser(record)}>Detail</a>
    },
    {
        render: (text, record) => <a onClick={() => handleDeleteUser(record)}>Delete</a>
    },
    {
        render: (text) => <a href='/update'>Update</a>
    }

  ];
  
  return (
    <div>
        <Table columns={columns} dataSource={data} />
        <Button type="primary" href='/create'>Add</Button>
        <Button href='/login'>Logout</Button>
    </div>
  );
};

export default UserList;