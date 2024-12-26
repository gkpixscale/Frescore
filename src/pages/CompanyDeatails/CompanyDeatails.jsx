import React, { useState } from 'react';
import './CompanyDeatails.css';
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
import { TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import LogoUploader from '../../components/LogoUploader/LogoUploader';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


const CompanyDeatails = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isMasterDropdownVisible, setIsMasterDropdownVisible] = useState(false);
    const navigate = useNavigate();

    // Initialize the form using useForm
    const { control, handleSubmit } = useForm({
        defaultValues: {
            companyName: "",
            legalName: "",
            logoUpload: "",
            phoneNumber: "",
            alternativePhoneNumber: "",
            gst: "",
            pan: "",
            cin: "",
            tan: "",
            email: "",
            bankName: "",
            accountNumber: "",
            ifscCode: "",
            accountHolderName: "",
            swiftCode: "",
            address: ""
        },
        mode: "onChange"
    });

    const toggleSidebar = () => {
        setIsSidebarVisible((prev) => !prev);
    };

    const toggleMasterDropdown = () => {
        setIsMasterDropdownVisible((prev) => !prev);
    };

    const goToHome = () => {
        navigate('/company');
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
                        <h1>Company Details Add or Edit</h1>
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
                    <div className="company-deatails">
                        <form onSubmit={handleSubmit((data) => console.log(data))}>
                            <div className='from-main-div'>
                                <h1>Company Details Add or Edit</h1>
                                <div className='form-div'>
                                    <div className='form-subdiv'>
                                        <Controller
                                            name="companyName"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Company Name is required"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>
                                                                Company Name<span>*</span>
                                                            </p>
                                                            <TextField
                                                                fullWidth={true}
                                                                value={value}
                                                                onChange={onChange}
                                                                placeholder='Company Name'
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '1px  #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                );
                                            }}
                                        />
                                        <Controller
                                            name="phoneNumber"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Phone Number is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>Phone Number<span>*</span></p>




                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className='form-subdiv'>
                                        <Controller
                                            name="legalName"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Legal Name is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>Legal Name<span>*</span></p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                        <Controller
                                            name="alternativePhoneNumber"
                                            control={control}
                                            rules={{
                                                required: false
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>Alternative Phone Number</p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="form-subdiv">
                                        <LogoUploader />
                                    </div>
                                </div>
                                <div className='form-div'>
                                    <div className="form-subdiv">
                                        <Controller
                                            name="gst"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "GST Number is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>GST<span>*</span></p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                        <Controller
                                            name="cin"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "CIN Number is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>CIN<span>*</span></p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="form-subdiv">
                                        <Controller
                                            name="pan"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "PAN Number is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>PAN<span>*</span></p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                        <Controller
                                            name="tan"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "TAN Number is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>TAN<span>*</span></p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="form-subdiv">
                                        {/* <Controller
                                        name="logoUpload"
                                        control={control}
                                        rules={{
                                            required: false
                                        }}
                                        render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                            return (
                                                <div className='input'>
                                                    <i class="fa-solid fa-upload"></i>
                                                    <input
                                                        type="file"
                                                        onChange={onChange}
                                                        error={invalid}
                                                        helperText={invalid && error.message}
                                                    />

                                                </div>
                                            );
                                        }}
                                    /> */}
                                        <LogoUploader />
                                    </div>
                                </div>
                                <div className='form-div'>
                                    <div className="form-subdiv">
                                        <Controller
                                            name="email"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "E-Mail is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>E-Mail<span>*</span></p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                        <Controller
                                            name="ifscCode"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "IFSC Code is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>IFSC Code<span>*</span></p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="form-subdiv">
                                        <Controller
                                            name="bankName"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Bank Name is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>Bank Name<span>*</span></p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                        <Controller
                                            name="accountNumber"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Account Number is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '4px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>Account Number<span>*</span></p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                    </div>
                                    <div className="form-subdiv">
                                        <Controller
                                            name="accountHolderName"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Account Holder Name is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '5px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>Account Holder Name<span>*</span></p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                        <Controller
                                            name="swiftCode"
                                            control={control}
                                            rules={{
                                                required: {
                                                    value: true,
                                                    message: "Swift Code is requiured"
                                                }
                                            }}
                                            render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                                return (
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        autoComplete="off"
                                                        sx={{
                                                            '& .MuiInputBase-root': { width: '40ch', margin: '5px' },
                                                            '& p': { fontSize: '14px', fontWeight: '500', marginLeft: '4px' },
                                                            '& span': { color: 'red' },
                                                        }}
                                                    >
                                                        <div>
                                                            <p>Swift Code<span>*</span></p>
                                                            <TextField
                                                                value={value}
                                                                onChange={onChange}
                                                                error={invalid}
                                                                helperText={invalid && error.message}
                                                                sx={{
                                                                    '& .MuiInputBase-input': { padding: '5px', border: '.5px solid #BDBFC7', borderRadius: '4px' },
                                                                    '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                                }}
                                                            />
                                                        </div>
                                                    </Box>
                                                )
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='form-div'>
                                    <Controller
                                        name="address"
                                        control={control}
                                        rules={{
                                            required: false
                                        }}
                                        render={({ field: { value, onChange }, fieldState: { error, invalid } }) => {
                                            return (
                                                <Box
                                                    component="form"
                                                    noValidate
                                                    autoComplete="off"
                                                    sx={{
                                                        '& .MuiInputBase-root': { width: '127ch', height: '10ch' },
                                                        '& p': { fontSize: '14px', fontWeight: '500', },
                                                        '& span': { color: 'red' },
                                                    }}
                                                >
                                                    <div>
                                                        <p>Address</p>
                                                        <TextField
                                                            value={value}
                                                            onChange={onChange}
                                                            error={invalid}
                                                            helperText={invalid && error.message}
                                                            sx={{
                                                                '& .MuiInputBase-input': { padding: '10px' },
                                                                '& .MuiFormHelperText-root': { color: 'red', fontSize: '12px' },
                                                            }}
                                                        />
                                                    </div>
                                                </Box>
                                            )
                                        }}
                                    />
                                </div>
                            </div>

                            <div className='form-btn'>
                                <button className='btn-back' onClick={goToHome}>Back</button>
                                <button className='btn-submit' type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CompanyDeatails;
