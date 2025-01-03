import React, { useState } from 'react';
import './LoginPage.css';
import amico from '../../assets/amico.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [generatedOtp, setGeneratedOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const navigate = useNavigate();

    const handleGetOtp = (e) => {
        e.preventDefault();
        if (mobileNumber.length === 10) {
            const otpGenerated = Math.floor(100000 + Math.random() * 900000).toString();
            setGeneratedOtp(otpGenerated);
            setIsOtpSent(true);
            console.log(`Generated OTP: ${otpGenerated}`);
        } else {
            alert('Please enter a valid 10-digit mobile number.');
        }
    };

    const handleOtpChange = (value, index) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        const enteredOtp = otp.join('');
        if (enteredOtp === generatedOtp) {
            setIsVerified(true);
            navigate('/home')
            alert('OTP Verified Successfully!');
        } else {
            alert('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className="loginpage">
            <div className="loginpage-img">
                <img src={amico} alt="Login Illustration" />
            </div>
            <div className="loginpage-content">
                <div className="loginpage-div">
                    <h1>Log In to Frescor</h1>
                    {!isOtpSent ? (
                        <form onSubmit={handleGetOtp} className="form">
                            <div >
                                <p>Mobile Number</p>
                                <input
                                    className='input-size'
                                    type="text"
                                    placeholder="+91 99999 88888"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    maxLength="10"
                                />
                            </div>
                            <button type="submit">Get OTP</button>
                        </form>
                    ) : (
                        <form onSubmit={handleVerifyOtp} className="form">
                            <p className="p2" >OTP is sent to <span className='span'> +91 99999 888888</span></p>
                            <div className="input-container">
                                <p >Mobile Number</p>
                                <input
                                    className="input1"
                                    type="text"
                                    placeholder="+91 99999 88888"
                                    readOnly
                                />
                                <i className="fa-regular fa-pen-to-square icon"></i>
                            </div>

                            <p>Enter OTP</p>
                            <div className="otp">
                                {otp.map((digit, index) => (
                                    <input
                                        placeholder='0'
                                        key={index}
                                        id={`otp-input-${index}`}
                                        type="text"
                                        value={digit}
                                        onChange={(e) =>
                                            handleOtpChange(e.target.value, index)
                                        }
                                        maxLength="1"
                                    />
                                ))}
                            </div>
                            <p className="p2"><span className='span'>Don't receive OTP?</span> 00:59</p>
                            <button type="submit">Verify</button>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
};

export default LoginPage;
