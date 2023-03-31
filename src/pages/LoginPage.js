import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userTypeMap } from '../people/usertypes';

const LoginPage = ({ onLogin }) => {
  const [selectedUserType, setSelectedUserType] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (selectedUserType) {
      onLogin(selectedUserType);
      navigate('/dashboard');
    }
  };

  return (
    <div>
      <h3>Login Page</h3>
      <label>
        Select User Type:
        <select value={selectedUserType} onChange={(e) => setSelectedUserType(e.target.value)}>
          <option value=""></option>
          {Object.keys(userTypeMap).map((key) => (
            <option key={key} value={key}>
              {userTypeMap[key].userType}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;