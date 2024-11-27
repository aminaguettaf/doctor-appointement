import React from 'react';
import './Hero.css';
import profiles from '../../assets/group_profiles.png';
import doctors from '../../assets/header_img.png';


const Hero = () => {
  return (
    <div className='hero mt-4 d-flex justify-content-between'>
      <div className='text d-flex flex-column justify-content-center'>
        <h1 className='text-light mb-4'>book appoinment <br/> with trusted <br/> doctors</h1>
        <div className='desc d-flex align-items-center gap-3 mb-4'>
            <img src={profiles} alt=''/>
            <p className='text-light'>Simply browse through our extensive list of <br/> trusted doctors, <br/> schedule your appointment hassle-free.</p>
        </div>
        <a href='#specialities' className='py-2 px-4 d-flex gap-2 align-items-center'>Book appoinment <i className="fa-solid fa-arrow-right"></i></a>
      </div>
      <div className='img  position-relative'>
        <img src={doctors} alt=''/>
      </div>
    </div>
  )
}

export default Hero
