import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context/UserContext'
import {Link} from 'react-router-dom'
import {formatISO9075} from 'date-fns'
import '../App.css'
import Footer from '../component/Footer'

import "react-toastify/dist/ReactToastify.css";

import Loading from '../component/Loading'




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
    <>





    {
      
      state._id ?
      <div>

    <div className='w-full flex flex-col justify-center items-center ] bg-gray-300'>
      <div className='w-[80%] m-3 shadow-2xl rounded-xl  bg-gray-200'>


        <div className='flex justify-center items-center flex-col  '>

<div className='font-bold text-[17px] md:text-[24px] m-2 fontStyle head text-center'>{state.title}</div>

        <img src={state.img} className='m-2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-2xl' alt='img'/>
        {
        userInfo.id === state.author._id && (<Link to={`/edit/${id}`} className='bg-black text-white p-2 w-[200px] text-center m-1 rounded-lg'>Edit</Link>)
    
        }
        <div className='font-bold fontStyle head'><span className='fsB'> Author : </span>{state.author.name}</div>

        <p className='font-bold text-gray-500 head text-[11px]'>{formatISO9075(new Date(state.createdAt))}</p>

        <div className='fontStyle p-3 text-[15px] md:p-5 head'>Summary : {state.sumamry}</div>
        <div dangerouslySetInnerHTML={{__html:state.quill}} className='p-3 md:p-5 fontStyle'/>
        </div>

</div>


    </div>
    <Footer/>

</div>
:<Loading/> 
}



    </>

  )
}

export default PostPage