import React, { useContext, useEffect, useState } from 'react';
import './MyAppointment.css';
import {Context} from '../../context/Context';
import axios from 'axios';
import {toast} from 'react-toastify';

const MyAppointment = () => {
  const {token, getAlldoctors} = useContext(Context);
  const[appointments, setAppointments] = useState([]);
  const getAppointments = async()=>{
    try {
      const response = await axios.get('http://localhost:4000/api/user/appointments', {headers:{token}});
      if(response.data.success){
        setAppointments(response.data.data.reverse());
        console.log(response.data.data);
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  const cancelAppointment = async(appointmentId) =>{
    try {
      const response = await axios.post('http://localhost:4000/api/user/cancel-appointment', {appointmentId}, {headers:{token}});
      if(response.data.success){
        toast.success(response.data.message);
        getAppointments();
        getAlldoctors();
      }
      else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    getAppointments();
  }
  ,[token])
  return (
    <div className='my-appointment my-5'>
      <p className='mb-4'>My appointments</p>
      {appointments.map((appointment, index)=>{
        return(
        <div key={index} className='appointment d-flex justify-content-between py-3'>
          <div className='doc-infos d-flex gap-4'>
            <div className='img'>
              <img src={`http://localhost:4000/images/${appointment.docData.image}`} alt=''/>
            </div>
            <div className='text'>
              <p className='name'>{appointment.docData.name}</p>
              <p className='info mb-3'>{appointment.docData.speciality}</p>
              <p className='label'>Address</p>
              <p className='info'>{appointment.docData.adress.address1}</p>
              <p className='info mb-3'>{appointment.docData.adress.address2}</p>
              <div className='d-flex gap-1'>
                <p className='label'>Date & Time:</p>
                <p className='info'>{appointment.slotDate} | {appointment.slotTime}</p>
              </div>
            </div>
          </div>
          <div className='btns d-flex flex-column gap-2'>
            {!appointment.cancelled && <button className='pay'>Pay Online</button>}
            {!appointment.cancelled ? 
            <button onClick={()=>cancelAppointment(appointment._id)} className='cancel'>Cancel appointment</button>:
            <button className='cancelled'>Appointment cancelled</button>
            }
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default MyAppointment
