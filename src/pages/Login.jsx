import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

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
        console.log(userInfo)
        console.log(res.data)
        navigate("/")
      }
    } catch (error) {
        console.log(error)
    }
  }
  console.log("Ui",userInfo)

  return (
    <div>
      
    <div>Login</div>
    <form onSubmit={handleLogin}>
      <input type='text' className='border' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' className='border' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button className=' p-2 bg-black text-white'>login</button>
    </form>

    </div>
  )
}

export default Login