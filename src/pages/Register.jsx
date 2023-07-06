import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/register", {email,password})
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
        <div>Register</div>
        <form onSubmit={handleRegister}>
          <input type="text" name="" className='border' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" name="" className='border' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button className=' p-2 bg-black text-white'>Register</button>
        </form>

    </div>
  )
}

export default Register