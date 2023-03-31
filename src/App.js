import React, { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashBoardPage from './pages/DashBoardPage';
import { userTypeMap } from './people/usertypes';
import Default from './pages/Default';


const App = () => {
  const [userType, setUserType] = useState(null);

  const handleLogin = (selectedUserType) => {
    const newUserType = userTypeMap[selectedUserType];
    setUserType(newUserType);
  };

  const handleLogout = () => {
    setUserType(null);
  };

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Default />} />
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/dashboard" element={<DashBoardPage userType={userType} onLogout={handleLogout} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
