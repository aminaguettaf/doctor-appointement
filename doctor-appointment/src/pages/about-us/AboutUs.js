import React from 'react';
import './AboutUs.css';
import MainTitle from '../../components/main-title/MainTitle';
import about from '../../assets/about_image.png';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <MainTitle title1='about' title2='us'/>
      <div className='about-container d-flex align-items-center gap-5 mb-5'>
        <div className='img'>
          <img src={about} alt=''/>
        </div>
        <div className='text'>
          <p className='mb-4'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p className='mb-4'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <p className='mb-4'>Our Vision</p>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div className='choose-us'>
        <MainTitle title1='why' title2='choose us'/>
        <div className='choose-container d-flex '>
          <div className='box p-5'>
            <p className='mb-3'>efficiency:</p>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='box p-5'>
            <p className='mb-3'>convenience:</p>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='box p-5'>
            <p className='mb-3'>personalization:</p>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
