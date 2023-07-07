import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import '../App.css'


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

      setUserInfo(null)
      navigate("/")
    }

  }



  return (
    <div className='flex justify-between px-10  py-3 border bg-zinc-500 text-white	'>
    <Link to='/' className='flex justify-center items-center logo'>SAN Blog</Link>
    <div>

    {
          userInfo?.id ? (
        <div className='flex gap-2 items-center'>
      <p>{userInfo.name}</p>
      <Link to='/create'>create Post</Link> 
      <button className='bg-black text-white p-2 rounded ' onClick={handleLogout}>logout</button>
        </div>
      ) : (

        <>
        <Link to='/login' className='m-2'>Login</Link>
    <Link to='/register' className='m-2'>Register</Link>
        </>
  )
}


    
    </div>

    </div>
  )
}

export default Header