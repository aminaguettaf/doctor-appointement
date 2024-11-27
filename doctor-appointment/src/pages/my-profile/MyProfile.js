import React, {useState} from 'react';
import './MyProfile.css';
import profile from '../../assets/download.png';

const MyProfile = () => {
    const[isEdit, setIsEdit] = useState(false);
    const[userData, setUserData] = useState({
        name:'amina',
        // image:"assets.download",
        email:'aminaguettaf98@gmail.com',
        phone:'0557516383',
        adress:{
            line1:'03 Avenue Bourouba Messaoud',
            line2:'Rue Ouled Brahem'
        },
        gender:'Male',
        dob:'2000-01-20'
    })
    return (
    <div className='my-profile my-5'>
        <div className='header'>
            <img src={profile} alt=''/>
            <br/>
            {isEdit ?
            <input type='text' value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))} />
            :<p className='username mt-2'>{userData.name}</p>
            }
        </div>
        <hr/>
        <div className='body'>
            <p className='sub-title'>contact information</p>
            <div className='d-flex  gap-4'>
                <p className='label'>Email id:</p>
                <p>{userData.email}</p>
            </div>
            <div className='d-flex gap-4'>
                <p className='label'>Phone:</p>
                {isEdit ?
                <input type='text' value={userData.phone} onChange={e =>setUserData(prev => ({...prev, phone:e.target.value}))}/>:
                <p>{userData.phone}</p>
                }
            </div>
            <div className='d-flex gap-4'>
                <p className='label'>Adress:</p>
                {isEdit ? 
                <div>
                    <input type='text' value={userData.adress.line1} onChange={e => setUserData(prev => ({...prev,adress: {...prev.adress, line1: e.target.value}}))}/><br/>
                    <input type='text' value={userData.adress.line2} onChange={e => setUserData(prev => ({...prev,adress: {...prev.adress, line2: e.target.value}}))}/>
                </div> :
                <p>
                    {userData.adress.line1}
                    <br/>
                    {userData.adress.line2}
                </p>
                }
            </div>
            <p className='sub-title'>basic information</p>
            <div className='d-flex gap-4'>
                <p className='label'>Gender:</p>
                {isEdit ? 
                <select onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>                                                                    
                </select>:
                <p>{userData.gender}</p>                                                                 
                }
            </div>
            <div className='d-flex gap-4'>
                <p className='label'>Birthday:</p>
                {isEdit ?
                <input type='date' onChange={e => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob}/>:
                <p>{userData.dob}</p>
                }
            </div>
            {isEdit ? <button onClick={()=>setIsEdit(false)}>Save information</button>: <button onClick={()=>setIsEdit(true)}>Edit</button>}
        </div>
    </div>
    )
}

export default MyProfile
