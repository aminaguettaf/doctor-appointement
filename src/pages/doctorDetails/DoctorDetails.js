import React, { useContext, useEffect, useState } from 'react';
import './DoctorDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import RelatedDoctors from '../../components/related-doctors/RelatedDoctors';
import { Context } from '../../context/Context';
import axios from 'axios';
import {toast} from 'react-toastify';

const DoctorDetails = () => {
    const{doctors, getAlldoctors, token} = useContext(Context);
    const params = useParams();
    const doctor = doctors.find(doctor => doctor._id === params.id);
    const navigate = useNavigate();

    const [docSlots, setDocSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const getAvailableSlot = async () => {
        // pour stocker les rendez-vous
        setDocSlots([]);

        //la date d"aujourd'hui
        const today = new Date();

        //pour les 7 jours de la semaine
        for (let i = 0; i < 7; i++) {
            //copie de today
            let currentDate = new Date(today);
            //on modifie currentDate on ajoutant 'i' jours a la date actuelle 
            currentDate.setDate(today.getDate() + i);

            // endTime de ce jour
            let endTime = new Date(currentDate);
            endTime.setHours(21, 0, 0, 0);

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                let day = currentDate.getDate();
                let month = currentDate.getMonth() + 1;
                let year = currentDate.getFullYear();

                const slotDate = day + "_" + month + "_" + year;
                const slotTime = formattedTime;
                
                const isSlotAvailable = doctor.slots_booked[slotDate] && doctor.slots_booked[slotDate].includes[slotTime] ? false : true;
                if(isSlotAvailable){
                    timeSlots.push({
                        datetime: new Date(currentDate),
                        time: formattedTime,
                    });
                }
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            setDocSlots(prev => [...prev, timeSlots]);
        }
    };

    const bookAppointment = async()=>{
        if(!token){
            toast.warn('Login to book an appointment');
            return navigate('/login');
        }
        try {
            const date = docSlots[slotIndex][0].datetime;
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            const slotDate = day + "_" + month + "_" + year;
            
            const response = await axios.post('http://localhost:4000/api/user/book-appointment', {docId:doctor._id, slotDate, slotTime}, {headers:{token}});
            if(response.data.success){
                toast.success(response.data.message);
                getAlldoctors();
                navigate('/my-appointment');
            }
            else{
                toast.error(response.data.message);
            }

        } catch (error) {
            toast.error(error.message);
        }
    }
    useEffect(() => {
        if (doctor) {
            getAvailableSlot();
        }
    }, [doctor]);

    if (!doctor) {
        return <p>Loading doctor details...</p>;
    }

    return (
        <div className='doctor-details'>
            <div className='doctor-infos d-flex gap-3 my-4'>
                <div className='img'>
                    <img src={`http://localhost:4000/images/${doctor.image}`} alt={doctor.name} />
                </div>
                <div className='text p-4'>
                    <h3 className='mb-2'>{doctor.name}</h3>
                    <div className='infos d-flex align-items-center gap-2 mb-4'>
                        <p>{doctor.degree} - {doctor.speciality}</p>
                        <p className='experience px-2 py-1'>{doctor.experience} years of experience</p>
                    </div>
                    <div className='about mb-4'>
                        <p className='fw-bold'>About</p>
                        <p>{doctor.about}</p>
                    </div>
                    <div className='fee d-flex align-items-center gap-2'>
                        <p>Appointment fee:</p>
                        <p>${doctor.fees}</p>
                    </div>
                </div>
            </div>
            <div className='booking-slots my-4'>
                <p className='mb-4'>Booking slots</p>
                <div className='d-flex align-items-center gap-3'>
                    {
                        docSlots.length > 0 && docSlots.map((daySlots, index) => {
                            return(
                                
                                <div onClick={()=>setSlotIndex(index)} key={index} className={`day-slot p-4 d-flex flex-column align-items-center justofy-content-center gap-2 ${slotIndex === index && 'active'}`}>
                                    <p>{daysOfWeek[daySlots[0].datetime.getDay()]}</p>
                                    <p>{daySlots[0].datetime.getDate()}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='time-slots d-flex gap-2 py-4'>
                    {docSlots.length && docSlots[slotIndex].map((item,index)=>{
                        return(
                            <p onClick={()=>setSlotTime(item.time)} className={`time-slot ${item.time === slotTime && 'active'}`} key={index}>{item.time.toLowerCase()}</p>
                        )
                    })}
                </div>
                <button onClick={bookAppointment}>Book an appointment</button>
            </div>
            <RelatedDoctors speciality={doctor.speciality} id={doctor._id}/>
        </div>
    );
}

export default DoctorDetails;
