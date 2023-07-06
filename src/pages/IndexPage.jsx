import React, { useEffect, useState } from 'react'
import Post from '../component/Post'
import axios from 'axios'

const IndexPage = () => {
const [post, setPost] = useState([]);

useEffect(()=>{
  const fun = async () => {

    const res = await axios("/post")
    console.log("rse:",res)
    setPost(res.data)
  }
  fun()
},[])
console.log(post)

  return (
    <div className='p-3 m-3'>
        {
           post.length > 0 && post.map((item) => {
              return(
            <>
              <Post {...item}/>
            </>
              )
          })
        }

    </div>
  )
}

export default IndexPage