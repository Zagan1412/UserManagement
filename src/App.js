import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/List';
import LoginForm from "./components/Login";
import CreateUserForm from "./components/Create";
import UpdateUserForm from "./components/Update";
import { Button } from 'antd';

const ParentComponent = (props) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  const handleSelectUser = (user) => {
    props.setSelectedUser(user);
    navigate('/view');
  };

  return <UserList onSelectUser={handleSelectUser} />;
};

const ViewUser = ({ user }) => {
  if (!user) {
    return <div>No user selected</div>;
  }

  return (
    <div>
      <h1>Thông tin chi tiết</h1>
      <p>Username: {user.UserName}</p>
      <p>Password: {user.Password}</p>
      <p>Email: {user.Email}</p>
      <p>First Name: {user.FirstName}</p>
      <p>Surname: {user.SurName}</p>
      <p>FullName: {user.FullName}</p>
      <p>Address:</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ProvinceName: {user.ProvinceName}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DistrictName: {user.DistrictName}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WardName: {user.WardName}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AddressNo: {user.AddressNo}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FullNameA: {user.FullNameA}</p>
      <p></p>
      <p>DateOfBir: {user.DateOfBir}</p>
      <p>IntroduceYourself: {user.IntroduceYourself}</p>
      <Button type="primary" htmlType="submit" href='/list'>
        Back
      </Button>
    </div>
  );
};

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/create" element={<CreateUserForm />} />
        <Route path="/update" element={<UpdateUserForm />} />
        <Route
          path="/list"
          element={<ParentComponent setSelectedUser={setSelectedUser} />}
        />
        <Route path="/view" element={<ViewUser user={selectedUser} />} />
      </Routes>
    </Router>
  );
};

export default App;