import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Home.css';
import logo from '../../assets/frescor 1.png';
import notification from '../../assets/notification.png';
import user from '../../assets/user.png';
import frame from '../../assets/Frame.png';
import frame1 from '../../assets/Frame1.png';
import frame2 from '../../assets/Frame2.png';
import frame3 from '../../assets/Frame3.png';
import frame4 from '../../assets/Frame4.png';
import frame5 from '../../assets/Frame5.png';
import frame6 from '../../assets/Frame6.png';
import Layout from '../../components/Layout/Layout';

const Home = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isMasterDropdownVisible, setIsMasterDropdownVisible] = useState(false);

    const navigate = useNavigate(); // Initialize the navigation hook

    const toggleSidebar = () => {
        setIsSidebarVisible((prev) => !prev);
    };

    const toggleMasterDropdown = () => {
        setIsMasterDropdownVisible((prev) => !prev);
    };

    const goToCompanyList = () => {
        navigate('/company'); // Navigate to the CompanyList page
    };

    return (
        <div className={`home-container ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
            <header>
                <div className={`company-name ${isSidebarVisible ? '' : 'hidden'}`}>
                    <img src={logo} alt="Company Logo" />
                    <h1>Frescor</h1>
                </div>
                <div className="header-content">
                    <div className="header-toggle" onClick={toggleSidebar}>
                        <i className="fa-solid fa-bars"></i>
                        <h1>Dashboard</h1>
                    </div>
                    <div className="user">
                        <img src={notification} alt="Notification" />
                        <img src={user} alt="User" />
                        <p>Jerome Bell</p>
                    </div>
                </div>
            </header>
            <div className="content-area">
                <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
                    <div className="sidebar-menu">
                        <img src={frame} alt="Dashboard Icon" />
                        <p>Dashboard</p>
                    </div>
                    <div className="sidebar-menu-i" onClick={toggleMasterDropdown}>
                        <div className='sidebar-menu'>
                            <img src={frame1} alt="Master Icon" />
                            <p>Master</p>
                        </div>
                        <i className={`fa-solid ${isMasterDropdownVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div>
                    {isMasterDropdownVisible && (
                        <div className="dropdown-menu">
                            <p onClick={goToCompanyList}>- Company</p> {/* Call goToCompanyList on click */}
                            <p>- User</p>
                            <p>- Product</p>
                            <p>- Staff</p>
                            <p>- Customer</p>
                            <p>- Proforma</p>
                            <p>- Purchase</p>
                            <p>- Invoice</p>
                            <p>- Right Details</p>
                            <p>- Stock History</p>
                            <p>- Material Stock History</p>
                            <p>- Category Details</p>
                            <p>- Sub Category</p>
                            <p>- FAQ Details </p>
                            <p>- Role Datails</p>
                            <p>- Material stock</p>
                            <p>- Master Details</p>
                        </div>
                    )}
                    <div className="sidebar-menu">
                        <img src={frame2} alt="Inventory Icon" />
                        <p>Inventory</p>
                    </div>
                    <div className="sidebar-menu">
                        <img src={frame3} alt="Order Icon" />
                        <p>Order</p>
                    </div>
                    <div className="sidebar-menu">
                        <img src={frame4} alt="Report Icon" />
                        <p>Report</p>
                    </div>
                    <div className="sidebar-menu">
                        <img src={frame5} alt="Setting Icon" />
                        <p>Setting</p>
                    </div>
                    <div className="sidebar-menu">
                        <img src={frame6} alt="Logout Icon" />
                        <p>Log out</p>
                    </div>
                </div>
                <div className="layout-area">
                    <Layout />
                </div>
            </div>
        </div>
    );
};

export default Home;
