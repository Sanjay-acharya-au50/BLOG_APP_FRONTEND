import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context/UserContext'
import {Link} from 'react-router-dom'
import {formatISO9075} from 'date-fns'


const PostPage = () => {
    const {userInfo} = useContext(UserContext)
    console.log(userInfo)
    const [state, setState] = useState([])
    const {id} = useParams();
    // console.log(id)

    useEffect(()=>{
        const myFun = async () => {
            const res = await axios.get(`/post/${id}`)
            console.log(res.data)
            setState(res.data);
        }
        myFun()
    },[])
    console.log(state)
  return (
    <div className='w-full flex justify-center items-center  bg-gray-300'>
      <div className='w-[80%] m-3 shadow-2xl rounded-xl bg-gray-200'>


    {
        state._id ?
        <div className='flex justify-center items-center flex-col  '>

<div className='font-bold text-[24px] m-2 '>{state.title}</div>

        <img src={`https://sanjay-blog-app.onrender.com/${state.img}`} className='m-2 w-[400px] h-[400px] rounded-2xl' alt='img'/>
        {
        userInfo.id === state.author._id && (<Link to={`/edit/${id}`} className='bg-black text-white p-2 w-[200px] text-center m-1'>edit</Link>)
    
        }
        <div className='font-bold'>Author : {state.author.email}</div>

        <p className='font-bold text-gray-500'>{formatISO9075(new Date(state.createdAt))}</p>

        <div>{state.sumamry}</div>
        <div dangerouslySetInnerHTML={{__html:state.quill}}/>
        </div>
   : "loading" }

</div>

    </div>
  )
}

export default PostPage