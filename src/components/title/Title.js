import React from 'react';
import './Title.css';

const Title = ({title, paragraph}) => {
  return (
    <div className='title mb-5'>
      <h3 className='mb-4'>{title}</h3>
      <p>{paragraph}</p>
    </div>
  )
}

export default Title
