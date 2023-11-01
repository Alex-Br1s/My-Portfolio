'use client'

import React, {useState} from 'react'
import Image from 'next/image'

import { AiFillGithub } from "react-icons/ai";
import { FaLink } from 'react-icons/fa'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

//?Front
import {FaReact} from 'react-icons/fa'
import {TbBrandRedux} from 'react-icons/tb'
import {BiLogoCss3} from 'react-icons/bi'
import {SiTailwindcss} from 'react-icons/si'
//?Back
import {FaNode} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
//?DB
import {BiLogoPostgresql} from 'react-icons/bi'
import {SiSequelize} from 'react-icons/si'
//?Images
import pfecoWisez from '../../../image/ecoWisez.png'
import pfecoWiseDarkzz from '../../../image/ecoWise_Darkzz.png'
import pfecoWiseProduct from '../../../image/ecoWise_product.png'
import pfecoWiseCart from '../../../image/ecoWise_Cart.png'
import pfecoWiseAdmin from '../../../image/ecoWiseAdmin.png'
import pfecoWiseAdminAP from '../../../image/ecoWiseAdminAP.png'
import pfecoWiseAdminDLP from '../../../image/ecoWiseLP.png'
import pfecoWiseAdminDLU from '../../../image/ecoWiseLU.png'

const ProjectEcoWise = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const sliders = [
    {
      url: pfecoWisez
    },
    {
      url: pfecoWiseDarkzz
    },
    {
      url: pfecoWiseProduct
    },
    {
      url: pfecoWiseCart
    },
    {
      url: pfecoWiseAdmin
    },
    {
      url: pfecoWiseAdminAP
    },
    {
      url: pfecoWiseAdminDLP
    },
    {
      url: pfecoWiseAdminDLU
    }
  ]


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newSlide = isFirstSlide ? sliders.length - 1 : currentIndex - 1
    setCurrentIndex(newSlide)
  }
  const nextSlide = () => {
    const isFirstSlide = currentIndex === sliders.length - 1;
    const newSlide = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide)
  }

  
  return (
    <div className='border w-80 h-96 relative mx-2 my-2'>
     <div className='relative'>
      <Image src={sliders[currentIndex].url} alt='pf-Soyhenry' className='h-44 ' />
  
      <div className='absolute top-1/2 -translate-y-1/2 -left-1 text-violetname  cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
  
      <div className='absolute top-1/2 -translate-y-1/2 -right-1 text-violetname  cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>

      <h4 className='pl-3 text-2xl text-violetname'>PF ecoWise</h4>
      <p className='text-sm pl-3 text-violetmorelow'>Un E-commerce de productos sustentables como proyecto final del bootcamp Soy-Henry. <span className='text-celestelastname'>Con caracteristicas como: Login, Búsquedas, Filtros, Ordenamiento, Paginación, Creación de productos, Reseñas, Pasarela de pagos, Modo oscuro y Panel de administrador.</span></p>

    <div className='flex justify-center -mt-1'>
      <button className='text-2xl m-1 text-blue-500'>{<FaReact className='cursor-default' />}</button>
      <button className='text-2xl m-1 text-violet-600'>{<TbBrandRedux className='cursor-default' />}</button>
      <button className='text-2xl m-1 text-sky-500'>{<BiLogoCss3 className='cursor-default' />}</button>
      <button className='text-2xl m-1 text-green-300'>{<SiTailwindcss className='cursor-default' />}</button>
      <button className='text-2xl m-1 text-green-600'>{<FaNode className='cursor-default' />}</button>
      <button className='text-2xl m-1'>{<SiExpress className='cursor-default' />}</button>
      <button className='text-2xl m-1 text-blue-400'>{<BiLogoPostgresql className='cursor-default' />}</button> 
      <button className='text-2xl m-1 text-sky-600'>{<SiSequelize className='cursor-default' />}</button>
    </div>
   
     <div className='flex justify-center '>
      <a href='https://github.com/lucas1visa/ecoWise' target='_blank' className='text-2xl mx-1 text-white'>{<AiFillGithub />}</a>
      <a href='https://ecowise-web-site.vercel.app/' target='_blank' className='text-2xl mx-1 text-gray-500'>{<FaLink />}</a>
    </div>
    </div>
  )
}

export default ProjectEcoWise