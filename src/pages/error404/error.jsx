import React from 'react'
import './Error.css'
import error from '../../assets/error.png'
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
    };

    return (
        <div className='Error-Container'>
            <img src={error} alt="" />
            <p>The page you're looking for doesn't exist. It may have been moved, deleted, or perhaps the URL was typed incorrectly.</p>
            <p> Please make sure the web address is correct.</p>
            <p> You can return to the previous page by clicking the "Back" button in your browser.</p>
            <button className='add' onClick={goToHome}>Back To Home</button>
        </div>
    )
}

export default Error
