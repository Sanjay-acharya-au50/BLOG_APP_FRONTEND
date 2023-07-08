import axios from 'axios';
import React, { useState,useEffect } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {


    const [title, setTittle] = useState('')
    const [sumamry, setSummary] = useState('')
    const [files, setFiles] = useState('')
    const [quill, setQuill] = useState('')
    const navigate = useNavigate()


    console.log(files[0])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title)
        data.set("sumamry", sumamry)
        if(files[0]){
            data.set("files", files[0])
        }
        data.set("quill", quill)
        data.set("id", id)

        const res = await axios.put(`/edit/${id}`,
            data
        )
        console.log(res)
        if(res.status === 200){
            navigate(`/post/${id}`)
        }
    }


    const {id} = useParams();
    // console.log(id)

    useEffect(()=>{
        const myFun = async () => {
            const res = await axios.get(`/post/${id}`)
            console.log(res.data)

            setTittle(res.data.title)
            setSummary(res.data.sumamry)
            setQuill(res.data.quill)

        }
        myFun()
    },[])



  return (
    <div className='flex justify-center bg-gray-300 p-5 items-center'>
        <div className='w-[500px] bg-gray-100 p-5 rounded-xl'>

        <div className='text-center'>EditPost</div>
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input type='text' className='border p-2 m-1' onChange={(e)=>setTittle(e.target.value)} value={title} />
                <input type='summary' className='border p-2 m-1'  onChange={(e)=>setSummary(e.target.value)} value={sumamry}  />
                <input type='file' className='m-1' onChange={(e)=>setFiles(e.target.files)} />
                <ReactQuill  className=' m-1 ' onChange={(e)=>setQuill(e)} value={quill}/>
                <button  className='border p-2 m-1 bg-black text-white'>Edit Post</button>

            </form>
        </div>
        </div>

    </div>
  )
}

export default Edit