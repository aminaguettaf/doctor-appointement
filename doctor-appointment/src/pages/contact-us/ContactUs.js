import React from 'react';
import './ContactUs.css';
import MainTitle from '../../components/main-title/MainTitle';
import contact from '../../assets/contact_image.png';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <MainTitle title1='contact' title2='us'/>
      <div className='contact-container d-flex align-items-center gap-5'>
        <div className='img'>
          <img src={contact} alt=''/>
        </div>
        <div className='text'>
          <h5 className='mb-4'>our office</h5>
          <p className='mb-4'>03 Rue Bourouba Messaoud <br/> Rue Ouled Brahem Setif</p>
          <p className='mb-4'>Tel: 0557516383 <br/> Email: aminaguettaf98@gmail.com</p>
          <h5 className='mb-4'>Carrers at prescripto</h5>
          <p className='mb-4'>Learn more about our teams and job openings.</p>
          <button className='p-4'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
