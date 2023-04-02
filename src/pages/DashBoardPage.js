import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { userTypeMap } from '../people/usertypes';
import { tableTypeMap } from '../people/tabletypes';
import Table from '../components/Table';
import "../Design/admin.css"

const DashboardPage = ({ userType, onLogout }) => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('');
   const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
  
    function handleDragStart(e) {
      setIsDragging(true);
    }
  
    function handleDragEnd(e) {
      setIsDragging(false);
    }
  
    function handleToggleSidebar() {
      setIsSidebarVisible(!isSidebarVisible);
    }
 

  
  const renderPage = (selectedpage) => {
    
    switch (selectedpage) {
      case 'Clients':
        return <Table tableHollow={tableTypeMap.Clients} />;
      case 'Systems':
        return <Table tableHollow={tableTypeMap.Systems} />;
      case 'Manufacturers':
        return <Table tableHollow={tableTypeMap.Manufacturers} />;
      case 'Users':
        return <Table tableHollow={tableTypeMap.Users} />;
      case 'Headings':
        return <div>Headings Page</div>;
      case 'Reports':
        return <Table tableHollow={tableTypeMap.Reports} />;
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
        <div className="admin">
              <div
        className={`admin-sidebar${isSidebarVisible ? " visible" : ""}${
          isDragging ? " dragging" : ""
        }`}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <button className="admin-sidebar-toggle" onClick={handleToggleSidebar}>
          {isSidebarVisible ? "<<" : ">>"}
        </button>
        <h1>Admin Profile</h1>
         <ul>
            {userType.pages.map((page) => (
              <li key={page} >
                <button value={page} onClick={pageManager}>{page}</button>
              </li>
              
            ))}
          </ul>
            {/* <li className={selected === 'logout' ? 'active' : ''}> */}
            {/* <div onClick={() => handleClick('logout')}> */}
    
        </div> 
        </div>
        <div style={{ flex: 3 }}>
          {renderPage(activePage)}</div>
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
     