import React from 'react'
import '../App.css'

const Footer = () => {
  return (
    <div className='text-center md:text-start md:grid grid-cols-6 fontStyle bg-gray-500 '>

    <div className='sm:hidden md:block  grid-span-1 text-[#dfe6e9] p-10'>
    <p className='footerHead font-bold' >Features</p>
    <p>module</p>
    <p>Layouts</p>
    <p>Workflow</p>
    <p>Developers</p>
    <p>Premium Support</p>
    </div>

    <div className='sm:hidden md:block grid-span-1 text-[#dfe6e9]  p-10'>
    <p className='footerHead font-bold' >Products</p>
    <p>Theme</p>
    <p>Marketplace</p>
    <p>Cloud</p>
    <p>Plugin</p>
    <p>Plans & Pricing</p>
</div>



    <div className='text-[15px] md:text-1xl grid-span-1 text-[#dfe6e9]  p-10'>
    <p className='footerHead font-bold' >Resources</p>
    <p>Documentation</p>
    <p>Help Articles & FAQ</p>
    <p>24/7 Support</p>
    <p>Developer</p>
    <p>System</p>

</div>


    <div className='sm:hidden md:block grid-span-1 text-[#dfe6e9]  p-10'>
    <p className='footerHead font-bold' >Blog</p>
    <p>Recent Posts</p>
    <p>Product Updates</p>
    <p>WordPress</p>
    <p>Developer</p>
    <p>Top Tools</p>
</div>


    <div className='sm:hidden md:block grid-span-1 text-[#dfe6e9]  p-10'>
    <p className='footerHead font-bold' >Community</p>
    <p> Facebook Group</p>
    <p>Integrations</p>
    <p>Reviews</p>
    <p>Community</p>
    <p>System</p>

    </div>



    <div className='sm:hidden md:block grid-span-1 text-[#dfe6e9] p-10'>
    <p className='footerHead font-bold' >Company</p>
    <p>About Us</p>
    <p>Contact Us</p>
    <p>Terms of Service</p>
    <p>Policy</p>
    <p>Community</p>

    </div>
    
    </div>
  )
}

export default Footer