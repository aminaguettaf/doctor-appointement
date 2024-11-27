import React, { useContext, useState } from 'react';
import './MyProfile.css';
import profile from '../../assets/download.png';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../../context/Context';

const MyProfile = () => {
    const { token, userData, setUserData, getUserData } = useContext(Context);
    const [isEdit, setIsEdit] = useState(false);
    const [image, setImage] = useState();

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const updateUserData = async (e) => {
        e.preventDefault();
        try {
            
            const dobString = userData.dob ? new Date(userData.dob).toISOString() : '';

            const formData = new FormData();
            formData.append('name', userData.name);
            formData.append('email', userData.email);
            formData.append('phone', userData.phone);
            formData.append('image', image);
            formData.append('dob', dobString);
            formData.append('gender', userData.gender);

            const response = await axios.post('http://localhost:4000/api/user/update-profile', formData, { headers: { token } });
            if (response.data.success) {
                toast.success(response.data.message);
                await getUserData();
                setImage(false);
                setIsEdit(false);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <form  className='my-profile my-5'>
            <div className='header'>
                <div className='img'>
                    {isEdit ? (
                        image ? (
                            <img src={URL.createObjectURL(image)} alt='' />
                        ) : (
                            <label htmlFor='upload'>
                                <img src={profile} alt='' />
                                <input onChange={(e) => setImage(e.target.files[0])} name='image' id='upload' type='file' hidden />
                            </label>
                        )
                    ) : (
                        <img src={profile} alt='' />
                    )}
                </div>
                <br />
                {isEdit ? (
                    <input type='text' value={userData.name} name='name' onChange={onChangeHandler} />
                ) : (
                    <p className='username mt-2'>{userData.name}</p>
                )}
            </div>
            <hr />
            <div className='body'>
                <p className='sub-title'>contact information</p>
                <div className='d-flex gap-4'>
                    <p className='label'>Email id:</p>
                    <p>{userData.email}</p>
                </div>
                <div className='d-flex gap-4'>
                    <p className='label'>Phone:</p>
                    {isEdit ? (
                        <input type='text' value={userData.phone} name='phone' onChange={onChangeHandler} />
                    ) : (
                        <p>{userData.phone}</p>
                    )}
                </div>                     
                <p className='sub-title'>basic information</p>
                <div className='d-flex gap-4'>
                    <p className='label'>Gender:</p>
                    {isEdit ? (
                        <select onChange={onChangeHandler} value={userData.gender} name='gender'>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                        </select>
                    ) : (
                        <p>{userData.gender}</p>
                    )}
                </div>
                <div className='d-flex gap-4'>
                    <p className='label'>Birthday:</p>
                    {isEdit ? (
                        <input type='date' onChange={onChangeHandler} value={userData.dob} name='dob' />
                    ) : (
                        <p>{userData.dob}</p>
                    )}
                </div>
                {isEdit ? (
                    <button className='button' type='submit' onClick={updateUserData}>
                        Save information
                    </button>
                ) : (
                    <div className='button' onClick={() => setIsEdit(true)}>
                        Edit
                    </div>
                )}
            </div>
        </form>
    );
};

export default MyProfile;
