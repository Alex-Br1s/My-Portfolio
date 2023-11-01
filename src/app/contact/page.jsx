import React from 'react'

import { AiOutlineLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs"

const Contacto = () => {
  return (
    <div className='flex items-center py-48 h-full mx-2'>
      <div className='flex flex-col mx-2'>
        <h1 className='text-5xl mb-10 text-violetname'>CONTÁCTAME!</h1>
        <p className='flex items-center text-violetmorelow'> <span><BiLogoGmail className='mr-1 text-red-500' /></span> GMAIL : <a target='_bkank' href='https://mail.google.com/' className='text-violetname ml-1'> alexbris21@gmail.com</a> </p>
        <p className='flex items-center text-violetmorelow my-5'> <span><AiOutlineLinkedin className='mr-1 text-sky-600' /></span> LINKEDIN : <a target='_bkank' href='https://www.linkedin.com/in/alexander-emanuel-bris-313655266/' className='text-violetname ml-1'>in/alexander-emanuel-bris</a></p>
        <p className='flex items-center text-violetmorelow'> <span><BsWhatsapp className='mr-1 text-green-600' /></span> WHATSAPP : <a target='_bkank' href='https://wa.me/2215050615'  className='text-violetname ml-1'> +54 2215050615</a></p>
      </div>
    </div>
  )
}

export default Contacto