import React from 'react';
import './TopDoctors.css';
import Title from '../title/Title';
import Doctor from '../doctor/Doctor';
import { doctors } from '../../assets/assets';
import {Link} from 'react-router-dom';

const TopDoctors = () => {
  return (
    <div className='top-doctors py-5'>
      <Title title='Top Doctors to Book' paragraph='Simply browse through our extensive list of trusted doctors.'/>
      <div className='doctors-container'>
        {doctors.map((doctor)=>{
          return(
            <Doctor id={doctor._id} key={doctor._id} image={doctor.image} name={doctor.name} speciality={doctor.speciality}/>
          )
        })}
      </div>
      <Link to='/doctors' className='px-5 py-2 more'>more</Link>
    </div>
  )
}

export default TopDoctors;
