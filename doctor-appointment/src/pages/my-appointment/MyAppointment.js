import React from 'react';
import './MyAppointment.css';
import doc1 from '../../assets/doc1.png';

const MyAppointment = () => {
  return (
    <div className='my-appointment my-5'>
      <p className='mb-4'>My appointments</p>
      <div className='appointment d-flex justify-content-between py-3'>
        <div className='doc-infos d-flex gap-4'>
          <div className='img'>
            <img src={doc1} alt=''/>
          </div>
          <div className='text'>
            <p className='name'>dr. Aymen ferha</p>
            <p className='info mb-3'>General physician</p>
            <p className='label'>Address</p>
            <p className='info'>03 Avenue Bourrouba Messaoud</p>
            <p className='info mb-3'>Rue Ouled Brahem</p>
            <div className='d-flex gap-1'>
              <p className='label'>Date & Time:</p>
              <p className='info'>15 Nov 2024 | 12:00 PM</p>
            </div>
          </div>
        </div>
        <div className='btns d-flex flex-column gap-2'>
          <button className='pay'>Pay Online</button>
          <button className='cancel'>Cancel appointment</button>
        </div>
      </div>
    </div>
  )
}

export default MyAppointment
