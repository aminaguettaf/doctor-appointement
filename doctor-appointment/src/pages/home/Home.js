import React from 'react';
import './Home.css';
import Hero from '../../components/hero/Hero';
import Specialities from '../../components/specialities/Specialities';
import TopDoctors from '../../components/top-doctors/TopDoctors';
import Banner from '../../components/banner/Banner';

const Home = () => {
  return (
    <div>
      <Hero />
      <Specialities />
      <TopDoctors />
      <Banner />
    </div>
  )
}

export default Home
