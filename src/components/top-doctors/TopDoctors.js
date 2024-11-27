import React, { useContext } from 'react';
import './TopDoctors.css';
import Title from '../title/Title';
import Doctor from '../doctor/Doctor';
import {Link} from 'react-router-dom';
import { Context } from '../../context/Context';

const TopDoctors = () => {
  const{doctors}= useContext(Context);
  return (
    <div className='top-doctors py-5'>
      <Title title='Top Doctors to Book' paragraph='Simply browse through our extensive list of trusted doctors.'/>
      <div className='doctors-container'>
        {doctors.map((doctor)=>{
          return(
            <Doctor id={doctor._id} key={doctor._id} image={`http://localhost:4000/images/${doctor.image}`} name={doctor.name} speciality={doctor.speciality}/>
          )
        })}
      </div>
      <Link to='/doctors' className='px-5 py-2 more'>more</Link>
    </div>
  )
}

export default TopDoctors;
