import React from 'react';
import './RelatedDoctors.css';
import { doctors } from '../../assets/assets';
import Title from '../title/Title';
import Doctor from '../doctor/Doctor';

const RelatedDoctors = ({speciality, id}) => {
    // const[relatedDoctors, setRelatedDoctors] = useState([]);
    // useEffect(()=>{
    //     if(doctors.length > 0 && speciality){
    //         const relatedDoctors = doctors.filter(doc => doc.speciality === speciality && doc._id === id)
    //         setRelatedDoctors(doctorsData);
    //     }
    // },[doctors, speciality])
    const relatedDoctors = doctors.filter(doc => doc.speciality === speciality && doc._id !== id);
    return (
    <div className='related-doctors my-5'>
        <Title title='Related Doctors' paragraph='Simply browse through our extensive list of trusted doctors.'/>
        <div className='doctors-container'>
            {relatedDoctors.map((doctor, index)=>{
                return(
                    <Doctor id={doctor._id} key={doctor._id} image={doctor.image} name={doctor.name} speciality={doctor.speciality}/>
                )
            })}
        </div>

    </div>
    )
}

export default RelatedDoctors
