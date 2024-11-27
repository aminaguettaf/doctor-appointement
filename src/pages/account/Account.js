import React, { useContext, useState } from 'react';
import './Account.css';
import axios from 'axios';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import { Context } from '../../context/Context';

const Account = () => {
  const [currentState, setCurrentState] = useState('sign up');
  const {setToken} = useContext(Context);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const onChangeHandler = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData((prev)=>({...prev, [name] : value}));
  }
  const onSubmitHandler = async(e)=>{
    try {
      e.preventDefault();
      let url;
      if(currentState === 'sign up'){
        url = 'http://localhost:4000/api/user/sign-up';
      }
      else{
        url = 'http://localhost:4000/api/user/login';
      }
      const response = await axios.post(url,data);
      if(response.data.success){
        toast.success(response.data.success);
        navigate('/');
        setToken(response.data.token);
        localStorage.setItem('token',  response.data.token);
      }
      else{
        toast.error(response.data.success);
      }
    }
    catch(error) {
      toast.error(error.message);
    }
  }
  return (
    <form onSubmit={onSubmitHandler} className='account p-4'>
      <h3 className='mb-3'>{currentState}</h3>
      <p className='mb-3'>Please {currentState} to book appointment</p>
      {currentState === 'sign up' ? 
      <div className='mb-2'>
        <p className='mb-1'>Full Name</p>
        <input type='text' name='name' value={data.name} onChange={onChangeHandler}/>  
      </div>: ''
      }
      <div className='mb-2'>
        <p className='mb-1'>Email</p>
        <input type='email' name='email' value={data.email} onChange={onChangeHandler}/>  
      </div>
      <div className='mb-3'>
        <p className='mb-1'>Password</p>
        <input type='password' name='password' value={data.password} onChange={onChangeHandler}/>  
      </div>
      {currentState === 'sign up' ? 
      <button type='submit' className='mb-3'>create account</button>:
      <button type='submit' className='mb-3'>login</button>}
      {currentState === 'sign up' ? 
      <p className='qst'>Already have an account? <span onClick={()=>setCurrentState('login')}>Login here</span></p>:
      <p className='qst'>Create a new account? <span onClick={()=>setCurrentState('sign up')}>click here</span></p>}
    </form>
  )
}

export default Account
