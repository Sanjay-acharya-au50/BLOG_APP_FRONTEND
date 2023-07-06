import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../context/UserContext'
import {Link} from 'react-router-dom'

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
    <div>

    <div>Overview</div>    
    {
        state._id ?
        <>


        <img src={`http://localhost:5000/${state.img}`} alt='img'/>
        <div>auth:{state.author.email}</div>
        {
        userInfo.id === state.author._id && (<Link to={`/edit/${id}`}>edit</Link>)
    
        }
        <div>{state.createdAt}</div>
        <div>{state.title}</div>
        <div dangerouslySetInnerHTML={{__html:state.summary}}/>
        </>
   : "loading" }


    </div>
  )
}

export default PostPage