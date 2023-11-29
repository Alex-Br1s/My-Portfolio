'use client'
import React from 'react'
import Link from 'next/link'
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Alexander = () => {
  return (
    <div className='flex items-center py-32 h-full'>
      <section className='mx-2'>
        <h1 className='mb-10 text-6xl'><span className='text-violetname'>ALEXANDER</span> <span className='text-celestelastname'>BRIS</span></h1>
        <p className='mb-5 text-violetmorelow'>BIENVENIDX A MI PORTAFOLIO COMO FULL-STACK DEVELOPER</p>
        <p className='mb-10 text-violetmorelow'>Contactame <a href='mailto:hola21@gmail.com' className='text-celestelastname'>alexbris21@gmail.com</a></p>
        <Link target='_blank' href="/CV Alexander Emanuel Bris.pdf" download>
          <button className="border-2 rounded-lg p-2 bg-button text-white mb-10">
            Descarga mi CV
          </button>
        </Link>

        <div className='flex '>
        <Link target="_blank" href="https://mail.google.com/" 
            className="text-center cursor-pointer text-4xl text-violetname">
              <BiLogoGmail />
        </Link>
        <Link target="_blank" href="https://www.linkedin.com/in/alexander-emanuel-bris-313655266/"
            className="text-center cursor-pointer text-4xl mx-3 text-violetname">
              <AiOutlineLinkedin />
        </Link>
        <Link target="_blank" href="https://github.com/Alex-Br1s"
            className="text-center cursor-pointer text-4xl text-violetname">
              <AiFillGithub />
        </Link>
        </div>
      </section>
    </div>
  )
}

export default Alexander