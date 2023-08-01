import axios from 'axios';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../component/Footer';


const CreatePost = () => {
    const [title, setTittle] = useState('')
    const [sumamry, setSummary] = useState('')
    const [files, setFiles] = useState('')
    const [quill, setQuill] = useState('')
    const navigate = useNavigate()

    console.log(files[0])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.set("title", title)
        data.set("sumamry", sumamry)
        data.set("files", files[0])
        data.set("quill", quill)
     try {
        const res = await axios.post("/post",
        data
    )
    console.log(res)
    if(res.status === 200){
        navigate("/")
    }
     } catch (error) {
        console.log(error)
     }
    }

  return (
    <>
    <div className='flex flex-col justify-center items-center bg-gray-300 h-[100vh] fontStyle'>
        <div className='w-[300px] md:w-[500px] bg-gray-100 p-5 rounded-xl'>

        <div className='text-center'>CreatePost</div>
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <input type='text' className='border p-2 m-1'  required onChange={(e)=>setTittle(e.target.value)} value={title} placeholder='Title'/>
                <input type='summary' className='border p-2 m-1' required  onChange={(e)=>setSummary(e.target.value)} value={sumamry} placeholder='Summary'/>
                <input type='file' className='m-1' required onChange={(e)=>setFiles(e.target.files)} />
                <ReactQuill className=' m-1' onChange={(e)=>setQuill(e)} value={quill}/>
                <button  className='border p-2 m-1 bg-black text-white'>Create Post</button>

            </form>
        </div>
        </div>

    </div>
    <Footer/>
        </>
  )
}

export default CreatePost