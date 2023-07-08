import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Footer from '../component/Footer'
import {  toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {userInfo, setUserInfo} = useContext(UserContext)
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", {email,password})
      console.log(res)
      if(res.status === 210){
        setUserInfo(res.data)
        console.log(res.data.email)
        const na = res.data.email;
        toast.success("Well Come!")
        navigate("/")
      }
    } catch (error) {
        console.log(error.response.data)
        toast.error(error.response.data)
    }
  }

  console.log("Ui",userInfo)

  return (
    <div>


    <div className='fontStyle bg-gray-300 h-[100vh] w-full flex flex-col justify-center items-center'>
      <div className='p-1 bg-gray-200 flex justify-center items-center flex-col shadow-2xl rounded-xl'>

    <div className='text-center '>Login</div>
    <form onSubmit={handleLogin} className='flex justify-center items-center flex-col w-[300px] h-[400px] '>
      <input type='text' className=' w-[80%] p-2 m-1' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='User name'/>
      <input type='password' className='w-[80%] p-2 m-1' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
      <button className=' p-2 bg-black text-white w-[80%] m-1'>login</button>
    </form>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Login