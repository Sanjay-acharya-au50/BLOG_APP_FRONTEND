import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Footer from '../component/Footer';
const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/register", {name,email,password})
      console.log(res)
      if(res.status === 200){
        navigate("/login");
        console.log("register succ")
      }
    } catch (error) {
        console.log(error)
    }
  }


  return (
    <div>


    <div className='bg-gray-300 h-[100vh] w-full flex justify-center items-center fontStyle'>
      <div className='p-1 bg-gray-200 flex justify-center items-center flex-col shadow-2xl rounded-xl'>

        <div>Register</div>
        <form onSubmit={handleRegister} className='flex justify-center items-center flex-col w-[300px] h-[400px]'>
          <input type="text" name="" className='w-[80%] p-2 m-1' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="text" name="" className='w-[80%] p-2 m-1' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" name="" className=' w-[80%] p-2 m-1' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button className=' p-2 bg-black text-white m-1  w-[80%]'>Register</button>
        </form>
        </div>
        </div>
        <Footer/>

    </div>
  )
}

export default Register