import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import AllDoctors from './pages/all-doctors/AllDoctors';
import AboutUs from './pages/about-us/AboutUs';
import ContactUs from './pages/contact-us/ContactUs';
import Account from './pages/account/Account';
import DoctorDetails from './pages/doctorDetails/DoctorDetails';
import MyProfile from './pages/my-profile/MyProfile';
import MyAppointment from './pages/my-appointment/MyAppointment';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='container'>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/doctors' element={<AllDoctors />}/>
          <Route path='/about' element={<AboutUs />}/>
          <Route path='/contact' element={<ContactUs />}/>
          <Route path='/login' element={<Account />}/>
          <Route path='/appoinment/:id' element={<DoctorDetails />}/>
          <Route path='/my-profile' element={<MyProfile />}/>
          <Route path='/my-appointment' element={<MyAppointment />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
