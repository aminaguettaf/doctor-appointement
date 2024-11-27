import React, { useState } from 'react';
import './AllDoctors.css';
import { doctors } from '../../assets/assets';
import Doctor from '../../components/doctor/Doctor';

const AllDoctors = () => {
  const [filtredDoctors, setFiltredDoctors] = useState(doctors);
  const handleSpeciality = (speciality)=>{
    if(!speciality){
      setFiltredDoctors(doctors);
    }
    else{
      const filtred = doctors.filter(doctor => doctor.speciality === speciality);
      setFiltredDoctors(filtred);
    }
  }
  return (
    <div className='all-doctors py-5'>
      <p className='mb-4'>Browse through the doctors specialist.</p>
      <div className='doctors-content d-flex gap-4'>
        <ul>
          <li onClick={()=>handleSpeciality('General physician')}>General physician</li>
          <li onClick={()=>handleSpeciality('Gynecologist')}>Gynecologist</li>
          <li onClick={()=>handleSpeciality('Dermatologist')}>Dermatologist</li>
          <li onClick={()=>handleSpeciality('Pedraticians')}>Pedraticians</li>
          <li onClick={()=>handleSpeciality('Neurologist')}>Neurologist</li>
          <li onClick={()=>handleSpeciality('GastroenterologistGastroenterologist')}>Gastroenterologist</li>
        </ul>
        <div className='doctors-container'>
          {filtredDoctors.map((doctor,index)=>{
            return(
              <Doctor id={doctor._id} key={doctor._id} image={doctor.image} name={doctor.name} speciality={doctor.speciality}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllDoctors
