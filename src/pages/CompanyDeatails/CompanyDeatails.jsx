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
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import InputBox from '../../components/input/Input';
import Grid from "@mui/material/Grid2";
import FileUpload from '../../components/Upload/FileUpload';

const CompanyDeatails = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [isMasterDropdownVisible, setIsMasterDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            companyName: "",
            legalName: "",
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
            address: "",
            logo: "",
            qrCode: ""
        }
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

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
                            <p>- FAQ Details</p>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='edit-form'>
                                <h2>Company Details Add or Edit</h2>
                                {/* -------------------- Frist Grid -------------------- */}
                                {/*  */}
                                <Grid container spacing={1}>
                                    <Grid size={{ xs: 8, md: 8 }}>
                                        <Grid container spacing={1}>
                                            <Grid size={{ md: 12, xs: 6 }}>
                                                <Grid container spacing={1}>
                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <Controller
                                                            name="companyName"
                                                            control={control}
                                                            rules={{
                                                                required: 'Company name is required',
                                                                pattern: {
                                                                    value: /^[A-Za-z\s]+$/,
                                                                    message: 'Company name can only contain letters and spaces',
                                                                },
                                                            }}
                                                            render={({ field: { value, onChange }, fieldState: { error } }) => {
                                                                const handleInputChange = (e) => {
                                                                    const inputValue = e.target.value;
                                                                    const filteredValue = inputValue.replace(/[^A-Za-z\s]/g, '');
                                                                    onChange(filteredValue);
                                                                };

                                                                return (
                                                                    <InputBox
                                                                        value={value}
                                                                        onChange={handleInputChange}
                                                                        label="Company Name"
                                                                        name="companyName"
                                                                        placeholder="Frescor"
                                                                        error={error}
                                                                    />
                                                                );
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <Controller
                                                            name="legalName"
                                                            control={control}
                                                            rules={{
                                                                required: 'Company name is required',
                                                                pattern: {
                                                                    value: /^[A-Za-z\s]+$/,
                                                                    message: 'Company name can only contain letters and spaces',
                                                                },
                                                            }}
                                                            render={({ field: { value, onChange }, fieldState: { error } }) => {
                                                                const handleInputChange = (e) => {
                                                                    const inputValue = e.target.value;
                                                                    const filteredValue = inputValue.replace(/[^A-Za-z\s]/g, '');
                                                                    onChange(filteredValue);
                                                                };

                                                                return (
                                                                    <InputBox
                                                                        value={value}
                                                                        onChange={handleInputChange}
                                                                        label="Legal Name"
                                                                        name="legalName"
                                                                        placeholder="Frescor"
                                                                        error={error}
                                                                    />
                                                                );
                                                            }}
                                                        />

                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid size={{ md: 12, xs: 6 }} >
                                                <Grid container spacing={1}>
                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <Controller
                                                            name="phoneNumber"
                                                            control={control}
                                                            rules={{
                                                                required: 'Phone Number is required',
                                                                pattern: {
                                                                    value: /^[0-9]{10}$/,
                                                                    message: 'Please enter a valid phone number in the format 99999 88888',
                                                                },
                                                            }}
                                                            render={({ field: { value, onChange }, fieldState: { error } }) => {
                                                                const handleInputChange = (e) => {
                                                                    let inputValue = e.target.value;
                                                                    inputValue = inputValue.replace(/[^0-9]/g, '');
                                                                    if (inputValue.length > 10) {
                                                                        inputValue = inputValue.slice(0, 10);
                                                                    }
                                                                    onChange(inputValue);
                                                                };
                                                                return (
                                                                    <InputBox
                                                                        value={value}
                                                                        onChange={handleInputChange}
                                                                        label="Phone Number"
                                                                        name="phoneNumber"
                                                                        placeholder="+91 99999 88888"
                                                                        error={error}
                                                                    />
                                                                );
                                                            }}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <Controller
                                                            name="alternativePhoneNumber"
                                                            control={control}
                                                            rules={{
                                                                pattern: {
                                                                    value: /^[0-9]{10}$/,
                                                                },
                                                            }}
                                                            render={({ field: { value, onChange }, fieldState: { error } }) => {
                                                                const handleInputChange = (e) => {
                                                                    let inputValue = e.target.value;
                                                                    inputValue = inputValue.replace(/[^0-9]/g, '');
                                                                    if (inputValue.length > 10) {
                                                                        inputValue = inputValue.slice(0, 10);
                                                                    }
                                                                    onChange(inputValue);
                                                                };
                                                                return (
                                                                    <InputBox
                                                                        value={value}
                                                                        onChange={handleInputChange}
                                                                        label="Alternative Phone Number"
                                                                        name="alternativePhoneNumber"
                                                                        placeholder="+91 99999 88888"
                                                                        error={error}
                                                                    />
                                                                );
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid size={{ xs: 4, md: 4 }}>
                                        <Grid container spacing={1}>
                                            <FileUpload />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/*  */}
                                {/* -------------------- Second Grid -------------------- */}
                                {/*  */}
                                <Grid container spacing={1}>
                                    <Grid size={{ xs: 8, md: 8 }}>
                                        <Grid container spacing={1}>
                                            <Grid size={{ md: 12, xs: 6 }}>
                                                <Grid container spacing={1}>
                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <Controller
                                                            name="gst"
                                                            control={control}
                                                            rules={{
                                                                required: 'GST Number is required',
                                                                pattern: {
                                                                    value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[A-Z]{1}[A-Z0-9]{1}$/,
                                                                    message: 'Please enter a valid GST number in the format 00AAAAA0000A0A0',
                                                                },
                                                            }}
                                                            render={({ field: { value, onChange }, fieldState: { error } }) => (
                                                                <InputBox
                                                                    value={value}
                                                                    onChange={onChange}
                                                                    label="GST"
                                                                    name="gst"
                                                                    placeholder="00AAAAA0000A0A0"
                                                                    error={error}
                                                                />
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <Controller
                                                            name="pan"
                                                            control={control}
                                                            rules={{
                                                                required: 'PAN Number is required',
                                                                pattern: {
                                                                    value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                                                                    message: 'Please enter a valid PAN number in the format AAAAA0000A',
                                                                },
                                                            }}
                                                            render={({ field: { value, onChange }, fieldState: { error } }) => (
                                                                <InputBox
                                                                    value={value}
                                                                    onChange={onChange}
                                                                    label="PAN"
                                                                    name="pan"
                                                                    placeholder="AAAAA0000A"
                                                                    error={error}
                                                                />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid size={{ md: 12, xs: 6 }} >
                                                <Grid container spacing={1}>
                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <Controller
                                                            name="cin"
                                                            control={control}
                                                            rules={{
                                                                required: 'CIN Number is required',
                                                                pattern: {
                                                                    value: /^[A-Z]{1}[0-9]{5}[A-Z]{2}[0-9]{4}[A-Z]{3}[0-9]{6}$/,
                                                                    message: 'Please enter a valid CIN number in the format A00000AA0000AAA000000',
                                                                },
                                                            }}
                                                            render={({ field: { value, onChange }, fieldState: { error } }) => (
                                                                <InputBox
                                                                    value={value}
                                                                    onChange={onChange}
                                                                    label="CIN"
                                                                    name="cin"
                                                                    placeholder="A00000AA0000AAA000000"
                                                                    error={error}
                                                                />
                                                            )}
                                                        />
                                                    </Grid>
                                                    <Grid size={{ xs: 12, md: 6 }}>
                                                        <Controller
                                                            name="tan"
                                                            control={control}
                                                            rules={{
                                                                required: 'TAN Number is required',
                                                                pattern: {
                                                                    value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                                                                    message: 'Please enter a valid TAN number in the format AAAAA0000A',
                                                                },
                                                            }}
                                                            render={({ field: { value, onChange }, fieldState: { error } }) => (
                                                                <InputBox
                                                                    value={value}
                                                                    onChange={onChange}
                                                                    label="TAN Number"
                                                                    name="tan"
                                                                    placeholder="AAAA00000A"
                                                                    error={error}
                                                                />
                                                            )}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid size={{ xs: 4, md: 4 }}>
                                        <Grid container spacing={1}>
                                            <FileUpload />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/*  */}
                                {/* -------------------- Third Grid -------------------- */}
                                {/*  */}
                                <Grid container spacing={1}>
                                    <Grid container spacing={1} size={{ xs: 12, md: 12 }}>
                                        <Grid size={{ xs: 4, md: 4 }}>
                                            <Controller
                                                name="email"
                                                control={control}
                                                rules={{
                                                    required: 'E-Mail is required',
                                                    pattern: {
                                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                        message: 'Please enter a valid email address',
                                                    },
                                                }}
                                                render={({ field: { value, onChange }, fieldState: { error } }) => (
                                                    <InputBox
                                                        value={value}
                                                        onChange={onChange}
                                                        label="E-Mail"
                                                        name="email"
                                                        placeholder="frescor@gmail.com"
                                                        error={error}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 4, md: 4 }}>
                                            <Controller
                                                name="bankName"
                                                control={control}
                                                rules={{
                                                    required: 'Bank Name is required',
                                                    pattern: {
                                                        value: /^[A-Za-z\s]+$/,
                                                        message: 'Bank name can only contain letters and spaces',
                                                    },
                                                }}
                                                render={({ field: { value, onChange }, fieldState: { error } }) => {
                                                    const handleInputChange = (e) => {
                                                        const inputValue = e.target.value;
                                                        const filteredValue = inputValue.replace(/[^A-Za-z\s]/g, '');
                                                        onChange(filteredValue);
                                                    };
                                                    return (
                                                        <InputBox
                                                            value={value}
                                                            onChange={handleInputChange}
                                                            label="Bank Name"
                                                            name="bankName"
                                                            placeholder="Bank Name"
                                                            error={error}
                                                        />
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 4, md: 4 }}>
                                            <Controller
                                                name="accountNumber"
                                                control={control}
                                                rules={{
                                                    required: 'Account Number is required',
                                                    pattern: {
                                                        value: /^[0-9]{12}$/,
                                                        message: 'Please enter a valid phone number in the format 9999 8888 7777',
                                                    }
                                                }}
                                                render={({ field: { value, onChange }, fieldState: { error } }) => {
                                                    const handleInputChange = (e) => {
                                                        let inputValue = e.target.value;
                                                        inputValue = inputValue.replace(/[^0-9]/g, '');
                                                        if (inputValue.length > 12) {
                                                            inputValue = inputValue.slice(0, 12);
                                                        }
                                                        onChange(inputValue);
                                                    };
                                                    return (
                                                        <InputBox
                                                            value={value}
                                                            onChange={handleInputChange}
                                                            label="Account Number"
                                                            name="accountNumber"
                                                            placeholder="9999 8888 7777"
                                                            error={error}
                                                        />
                                                    );
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1} size={{ xs: 12, md: 12 }}>
                                        <Grid size={{ xs: 4, md: 4 }}>
                                            <Controller
                                                name="ifscCode"
                                                control={control}
                                                rules={{
                                                    required: 'IFSC Code is required',
                                                    pattern: {
                                                        value: /^[A-Z]{4}[0-9]{7}$/,
                                                        message: 'Please enter a valid IFSC code in the format AAAA0000000',
                                                    },
                                                }}
                                                render={({ field: { value, onChange }, fieldState: { error } }) => (
                                                    <InputBox
                                                        value={value}
                                                        onChange={onChange}
                                                        label="IFSC Code"
                                                        name="ifscCode"
                                                        placeholder="AAAA0000000"
                                                        error={error}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 4, md: 4 }}>
                                            <Controller
                                                name="accountHolderName"
                                                control={control}
                                                rules={{
                                                    required: 'Account Holder Name is required',
                                                    pattern: {
                                                        value: /^[A-Za-z\s]+$/,
                                                        message: 'Account holder name can only contain letters and spaces',
                                                    },
                                                }}
                                                render={({ field: { value, onChange }, fieldState: { error } }) => {
                                                    const handleInputChange = (e) => {
                                                        const inputValue = e.target.value;
                                                        const filteredValue = inputValue.replace(/[^A-Za-z\s]/g, '');
                                                        onChange(filteredValue);
                                                    };
                                                    return (
                                                        <InputBox
                                                            value={value}
                                                            onChange={handleInputChange}
                                                            label="Account Holder Name"
                                                            name="accountHolderName"
                                                            placeholder="Jhon Smith"
                                                            error={error}
                                                        />
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 4, md: 4 }}>
                                            <Controller
                                                name="swiftCode"
                                                control={control}
                                                rules={{
                                                    required: 'Swift Code is required',
                                                    pattern: {
                                                        value: /^[A-Z]{11}$/,
                                                        message: 'Please enter a valid Swift Code in the format AAAABBCCDDD',
                                                    },
                                                }}
                                                render={({ field: { value, onChange }, fieldState: { error } }) => {
                                                    const handleInputChange = (e) => {
                                                        const inputValue = e.target.value;
                                                        const filteredValue = inputValue.replace(/[^A-Za-z\s]/g, '');
                                                        onChange(filteredValue);
                                                    };
                                                    return (
                                                        <InputBox
                                                            value={value}
                                                            onChange={handleInputChange}
                                                            label="Swift Code"
                                                            name="swiftCode"
                                                            placeholder="AAAABBCCDDD"
                                                            error={error}
                                                        />
                                                    )
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {/*  */}
                                {/* -------------------- Fourth Grid -------------------- */}
                                {/*  */}
                                <Grid container spacing={1}>
                                    <Controller
                                        name="address"
                                        control={control}
                                        render={({ field: { value, onChange }, fieldState: { error } }) => (
                                            <InputBox
                                                value={value}
                                                onChange={onChange}
                                                label="Address"
                                                name="address"
                                                placeholder="Address"
                                                error={error}
                                            />
                                        )}
                                    />
                                </Grid>
                                {/*  */}

                            </div>
                            <div className='form-btn'>
                                <button className='last-btn' type="button" onClick={goToHome}>Back</button>
                                <button className='add' type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDeatails;
