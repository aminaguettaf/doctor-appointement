import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { Context } from '../../context/Context';

const Navbar = () => {
    const[activeLink, setActiveLink] = useState('');
    const[showMenu, setShowMenu] = useState(false);
    const{token, setToken} = useContext(Context);

    const location = useLocation();
    useEffect(()=>{
        const path = location.pathname;
        if(path === '/'){
            setActiveLink('home');
        }
        else if(path === '/doctors'){
            setActiveLink('doctors');
        }
        else if(path === '/about'){
            setActiveLink('about')
        }
        else if(path === '/contact'){
            setActiveLink('contact');
        }
        else{
            setActiveLink('');
        }
    },[location])

    const logout = ()=>{
        setToken('');
        localStorage.removeItem('token');
    }
    return (
    <div className='nav-bar d-flex align-items-center justify-content-between py-3'>
        <Link className='logo' to='/'>
            <img src={logo} alt=''/>
        </Link>
        <div className={`nav-menu d-flex align-items-center gap-4 ${showMenu && 'show'}`}>
            <div className='menu-bar'>
                <img src={logo} alt=''/>
                <i onClick={()=>setShowMenu(false)} className="fa-solid fa-xmark"></i>
            </div>
            <ul className='d-flex align-items-center gap-4'>
                <li onClick={()=>{setActiveLink('home'); setShowMenu(false)}} className={`${activeLink === 'home' ? 'active' : ''}`}><Link to='/'>home</Link></li>
                <li onClick={()=>{setActiveLink('doctors'); setShowMenu(false)}} className={`${activeLink === 'doctors' ? 'active' : ''}`}><Link to='/doctors'>all doctors</Link></li>
                <li onClick={()=>{setActiveLink('about'); setShowMenu(false)}} className={`${activeLink === 'about' ? 'active' : ''}`}><Link to='/about'>about</Link></li>
                <li onClick={()=>{setActiveLink('contact'); setShowMenu(false)}} className={`${activeLink === 'contact' ? 'active' : ''}`}><Link to='/contact'>contact</Link></li>
            </ul>
        </div>
        <div className='right-navbar d-flex align-items-center gap-4'>
            {token ?
            <div className='logout position-relative'>
                <div className='d-flex align-items-center gap-2'>
                    <i className="fa-solid fa-user user"></i>
                    <i className="fa-solid fa-angle-down angle"></i>
                </div>
                <ul className='position-absolute'>
                    <li className='mb-3'><Link to='/my-profile'>my profile</Link></li>
                    <li className='mb-3'><Link to='/my-appointment'>my appointments</Link></li>
                    <li onClick={logout}>logout</li>
                </ul>
            </div>:
            <Link className='login-btn px-4 py-2' to='/login'>Create account</Link>  
            }
            <div className='bars'>
                <i onClick={()=>setShowMenu(true)} className="fa-solid fa-bars-staggered fa-fw"></i>
            </div>
        </div>
    </div>
    )
}

export default Navbar
