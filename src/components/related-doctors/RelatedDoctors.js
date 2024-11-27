import React, { useContext } from 'react';
import './RelatedDoctors.css';
import Title from '../title/Title';
import Doctor from '../doctor/Doctor';
import { Context } from '../../context/Context';

const RelatedDoctors = ({speciality, id}) => {
    const {doctors} = useContext(Context);
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
                    <Doctor id={doctor._id} key={doctor._id} image={`http://localhost:4000/images/${doctor.image}`} name={doctor.name} speciality={doctor.speciality}/>
                )
            })}
        </div>

    </div>
    )
}

export default RelatedDoctors
