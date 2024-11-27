import React from 'react';
import './MainTitle.css';

const MainTitle = ({title1, title2}) => {
    return (
    <div className='main-title'>
        <h3><span className='title1 me-2'>{title1}</span><span className='title2'>{title2}</span></h3>
    </div>
    )
}

export default MainTitle
