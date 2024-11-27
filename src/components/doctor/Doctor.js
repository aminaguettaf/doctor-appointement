import React from 'react';
import './Doctor.css';
import {Link} from 'react-router-dom';

const Doctor = ({image, name, speciality, id}) => {
  return (
    <Link to={`/appoinment/${id}`} className='doctor'>
        <div className='img'>
            <img src={image} alt=''/>
        </div>
        <div className='text p-3'>
            <div className='d-flex gap-2 align-items-center mb-2'>
                <p className='dot'></p>
                <p className='available'>Available</p>
            </div>
            <h5 className='mb-2'>{name}</h5>
            <p>{speciality}</p>
        </div>
    </Link>
  )
}

export default Doctor
