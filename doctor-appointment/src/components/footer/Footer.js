import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
    <div className='footer row py-5'>
        <div className='col-lg-6'>
            <img className='mb-4' src={logo} alt=''/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='col-lg-3'>
            <h5 className='mb-4'>company</h5>
            <ul>
                <li>home</li>
                <li>about us</li>
                <li>delivery</li>
                <li>privacy policy</li>
            </ul>
        </div>
        <div className='col-lg-3'>
            <h5 className='mb-4'>get in touch</h5>
            <ul>
                <li>+213 557516383</li>
                <li>aminaguettaf98@gmail.com</li>
            </ul>
        </div>
    </div>
    )
}

export default Footer
