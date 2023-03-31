 const renderPage = () => {
    
    switch (activePage) {
      case 'Clients':
        return tableTypeMap.Clients
      case 'Systems':
        return tableTypeMap.Systems
      case 'Manufacturers':
        return tableTypeMap.Manufacturers
      case 'Users':
        return tableTypeMap.Users
      case 'Headings':
        return <div>Headings Page</div>;
      case 'Reports':
        return <div>Reports Page</div>;
      default:
        return <div>Default Page</div>;
    }
  };



  import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userTypeMap } from '../people/usertypes';
import { tableTypeMap } from '../people/tabletypes';
import Table from '../components/Table';

const DashboardPage = ({ userType, onLogout }) => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('');
 

  
  const renderPage = () => {
    
    switch (activePage) {
      case 'Clients':
        return tableTypeMap.Clients
      case 'Systems':
        return tableTypeMap.Systems
      case 'Manufacturers':
        return tableTypeMap.Manufacturers
      case 'Users':
        return tableTypeMap.Users
      case 'Headings':
        return <div>Headings Page</div>;
      case 'Reports':
        return <div>Reports Page</div>;
      default:
        return <div>Default Page</div>;
    }
  };
  const pageManager =async(event)=>{
    event.preventDefault();
    
    await setActivePage(event.target.value);
    console.log('page',event.target.value);
  };
  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h3>Pages</h3>
          <ul>
            {userType.pages.map((page) => (
              <li key={page} >
                <button value={page} onClick={pageManager}>{page}</button>
              </li>
            ))}
          </ul>
        </div>
        <div >
          {console.log("activepage",activePage)}
          <Table tableHollow={renderPage()} />
          </div>
      </div>
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <ProfileDropdown onLogout={handleLogout} />
      </div>
    </div>
  );
};

const ProfileDropdown = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <div>
      <button>Profile</button>
      <div style={{ position: 'absolute', top: 30, right: 0 }}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default DashboardPage;
