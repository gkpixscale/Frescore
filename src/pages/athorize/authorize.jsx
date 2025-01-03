import React from 'react'
import authorize from '../../assets/authorize.png'
import { useNavigate } from 'react-router-dom';

const Authorize = () => {

    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
    };

    return (
        <div>
            <div className='Error-Container'>
                <img src={authorize} alt="" />
                <h1>You are not authorize</h1>
                <button className='add' onClick={goToHome}>Back To Home</button>
            </div>
        </div>
    )
}

export default Authorize
