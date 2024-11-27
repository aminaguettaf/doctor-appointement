import React, { useContext, useState } from 'react';
import './AllDoctors.css';
import Doctor from '../../components/doctor/Doctor';
import { Context } from '../../context/Context';

const AllDoctors = () => {
  const {doctors} = useContext(Context);
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
          <li onClick={()=>handleSpeciality('general physician')}>General physician</li>
          <li onClick={()=>handleSpeciality('gynecologist')}>Gynecologist</li>
          <li onClick={()=>handleSpeciality('dermatologist')}>Dermatologist</li>
          <li onClick={()=>handleSpeciality('pedraticians')}>Pedraticians</li>
          <li onClick={()=>handleSpeciality('neurologist')}>Neurologist</li>
          <li onClick={()=>handleSpeciality('gastroenterologist')}>Gastroenterologist</li>
        </ul>
        <div className='doctors-container'>
          {filtredDoctors.map((doctor,index)=>{
            return(
              <Doctor id={doctor._id} key={doctor._id} image={`http://localhost:4000/images/${doctor.image}`} name={doctor.name} speciality={doctor.speciality}/>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AllDoctors
