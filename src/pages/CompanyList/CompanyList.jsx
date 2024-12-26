import React, { useState } from 'react';
import './CompanyList.css'
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
import { useNavigate } from 'react-router-dom';

const CompanyList = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isMasterDropdownVisible, setIsMasterDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarVisible((prev) => !prev);
    };
    const toggleMasterDropdown = () => {
        setIsMasterDropdownVisible((prev) => !prev);
    };

    const goToHome = () => {
        navigate('/home'); // Navigate to the home page
    };

    const goToCompanyDeatails = () => {
        navigate('/company/add');
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
                        <h1>Company List</h1>
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
                            <p>- Company</p>
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
                    <div className='company-list'>
                        <h1>Company List</h1>
                        <div className='company-inputs'>
                            <div className='company-input'>
                                <p>Search</p>
                                <div class="search">
                                    <span class="fa fa-search"></span>
                                    <input type="text" placeholder='Frescore' />
                                </div>
                            </div>
                            <button className='add' onClick={goToCompanyDeatails}>Add</button>
                        </div>
                    </div>
                    <div className='company-list-table'>
                        <p>show &nbsp;<button className='company-list-table-btn'>10&nbsp;<i class="fa-solid fa-sort-down"></i></button>&nbsp; entries</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Company Name</th>
                                    <th>Legal Name</th>
                                    <th>Phone No.</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Frescor</td>
                                    <td>Frescor</td>
                                    <td>+91 99999 88888</td>
                                    <td><div className='table-icons'><i class="fa-solid fa-trash"></i><i class="fa-regular fa-eye"></i><i class="fa-solid fa-pen-to-square"></i></div></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Frescor</td>
                                    <td>Frescor</td>
                                    <td>+91 99999 88888</td>
                                    <td><div className='table-icons'><i class="fa-solid fa-trash"></i><i class="fa-regular fa-eye"></i><i class="fa-solid fa-pen-to-square"></i></div></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Frescor</td>
                                    <td>Frescor</td>
                                    <td>+91 99999 88888</td>
                                    <td><div className='table-icons'><i class="fa-solid fa-trash"></i><i class="fa-regular fa-eye"></i><i class="fa-solid fa-pen-to-square"></i></div></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Frescor</td>
                                    <td>Frescor</td>
                                    <td>+91 99999 88888</td>
                                    <td><div className='table-icons'><i class="fa-solid fa-trash"></i><i class="fa-regular fa-eye"></i><i class="fa-solid fa-pen-to-square"></i></div></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Frescor</td>
                                    <td>Frescor</td>
                                    <td>+91 99999 88888</td>
                                    <td><div className='table-icons'><i class="fa-solid fa-trash"></i><i class="fa-regular fa-eye"></i><i class="fa-solid fa-pen-to-square"></i></div></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='page'>
                            <p>Showing 1 to 10 of 100 entries</p>
                            <p>Previous&nbsp;&nbsp;
                                <button className='btn'>1</button> &nbsp;&nbsp;
                                2&nbsp;&nbsp;
                                3&nbsp;&nbsp;
                                4&nbsp;&nbsp;
                                5&nbsp;&nbsp;
                                ...&nbsp;&nbsp;
                                10&nbsp;&nbsp;
                                Next</p>
                        </div>
                    </div>
                    <button className='last-btn' onClick={goToHome}>Back</button>
                </div>
            </div>
        </div >
    );
};

export default CompanyList;
