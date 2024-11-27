import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import banner from '../../assets/appointment_img.png';

const Banner = () => {
  return (
    <div className='banner d-flex my-5 justify-content-between'>
        <div className='text d-flex flex-column justify-content-center'>
            <h1 className='text-light mb-3'>book appointment <br/> with 100+ trusted <br/> doctors</h1>
            <Link to='/login' className='px-4 py-2' >Create account</Link>
        </div>
        <div className='img'>
            <img src={banner} alt=''/>
        </div>
    </div>
  )
}

export default Banner
