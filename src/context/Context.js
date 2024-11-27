import { createContext, useState, useEffect } from "react";
import {toast} from 'react-toastify';
import axios from 'axios';

export const Context = createContext(null);

const StoreContextProvider = (props)=>{
    const[doctors, setDoctors]= useState([]);
    const[userData, setUserData] = useState([]);
    const[token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

    const getAlldoctors = async()=>{
        try {
            const response = await axios.get('http://localhost:4000/api/doctor/list');
            if(response.data.success){
                setDoctors(response.data.data);
            }
            else{
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getUserData = async()=>{
        try {
            const response = await axios.get('http://localhost:4000/api/user/get-profile', {headers:{token}});
            if(response.data.success){
                setUserData(response.data.data);
            }
            else{
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
        
    }
    useEffect(() => {
        if(token){
            getUserData();
        }
        else{
            setUserData(false);
        }
    }, [token])
    useEffect(() => {
        getAlldoctors();
    }, [])
    const contextValue = {
        doctors, getAlldoctors,
        token,setToken,
        userData,setUserData,
        getUserData
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default StoreContextProvider;
