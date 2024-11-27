import React, { useState } from 'react';
import './Account.css';

const Account = () => {
  const [currentState, setCurrentState] = useState('sign up')
  return (
    <div className='account p-4'>
      <h3 className='mb-3'>{currentState}</h3>
      <p className='mb-3'>Please {currentState} to book appointment</p>
      {currentState === 'sign up' ? 
      <div className='mb-2'>
        <p className='mb-1'>Full Name</p>
        <input type='text' name='name' />  
      </div>: ''
      }
      <div className='mb-2'>
        <p className='mb-1'>Email</p>
        <input type='email' name='email' />  
      </div>
      <div className='mb-3'>
        <p className='mb-1'>Password</p>
        <input type='password' name='password' />  
      </div>
      {currentState === 'sign up' ? 
      <button className='mb-3'>create account</button>:
      <button className='mb-3'>login</button>}
      {currentState === 'sign up' ? 
      <p className='qst'>Already have an account? <span onClick={()=>setCurrentState('login')}>Login here</span></p>:
      <p className='qst'>Create a new account? <span onClick={()=>setCurrentState('sign up')}>click here</span></p>}
    </div>
  )
}

export default Account
