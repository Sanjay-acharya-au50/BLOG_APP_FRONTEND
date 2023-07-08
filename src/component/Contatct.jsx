import React from 'react'
import { AiFillGithub,AiFillFacebook,AiOutlineInstagram,AiFillLinkedin } from 'react-icons/ai';


const Contatct = () => {
  return (

<div className='py-5 bg-gray-300'>
    <div className='flex justify-center items-center'>

<a href='https://www.linkedin.com/in/sanjay-acharya-693a58121/' target="_blank" alt='LinkedIn'>  <AiFillLinkedin className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500'/></a>
<a href='https://github.com/Sanjay-acharya-au50' target="_blank" alt='GitHub'>  <AiFillGithub className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500'/></a>
<a href='https://www.instagram.com/sanju_93__/' target="_blank" alt='instagram' >  <AiOutlineInstagram className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500'/> </a>
<a href='https://www.facebook.com/sanjay.acharya.98229' target="_blank" alt='Facebook'>  <AiFillFacebook className='m-2 text-3xl hover:opacity-90 hover:scale-125 duration-500'/></a>
    </div>

</div>

  )
}

export default Contatct