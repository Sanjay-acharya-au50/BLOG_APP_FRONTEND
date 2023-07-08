import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import '../App.css'
import {  toast } from "react-toastify";





const Header = () => {
  const navigate = useNavigate()

const {userInfo , setUserInfo} = useContext(UserContext)
  console.log(userInfo)
  useEffect(() => {
    
    const myFun = async () => {


    const res = await axios.get("/home")
    console.log(res);
    if(res.status === 200){
      console.log("resdata",res.data)

      setUserInfo(res.data);
    }
  }
  myFun()
  },[]);
  console.log("contetx",userInfo)




  const handleLogout = async () => {
    const logout = await axios.post("/logout")
    console.log(logout)
    if(logout.status === 200){ 
      
      setUserInfo("")
      toast.success("oops!! bye bye!")
      navigate("/")
    }

  }



  return (
    <div className='flex justify-between px-2 md:px-10  py-3 border bg-zinc-500 text-white	fontStyle'>
    <Link to='/' className='flex justify-center items-center head '>SAN Blog</Link>
    <div>

    {
          userInfo?.id ? (
        <div className='flex gap-2 items-center'>
      <Link to='/create' className='bg-black text-white text-[14px] md:text-[17px] p-2 rounded'>Create</Link> 
      <button className='bg-black text-white text-[14px] md:text-[17px] p-2 rounded ' onClick={handleLogout}>Logout</button>
        </div>
      ) : (

        <>
        <Link to='/login' className='m-1 bg-black text-white text-[14px] md:text-[17px] p-2 rounded '>Login</Link>
    <Link to='/register' className='m-1 bg-black text-white text-[14px] md:text-[17px] p-2 rounded '>Register</Link>
        </>
  )
}


    
    </div>    
      
    </div>
    
  )
}

export default Header