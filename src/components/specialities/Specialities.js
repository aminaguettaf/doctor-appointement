import React from 'react';
import './Specialities.css';
import Title from '../title/Title';
import {Link} from 'react-router-dom';
import { specialityData } from '../../assets/assets';

const Specialities = () => {
  return (
    <div className='py-5' id='specialities'>
      <Title title='Find by Speciality' paragraph='Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.'/>
      <div className='speciality-container d-flex gap-3'>
        {specialityData.map((data,index)=>{
            return(
                <Link key={index} to='' className='d-flex flex-column align-items-center gap-2'>
                    <img src={data.image} alt=''/>
                    <p>{data.speciality}</p>
                </Link>
            )
        })}
      </div>
    </div>
  )
}

export default Specialities
