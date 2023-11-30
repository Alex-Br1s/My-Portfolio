'use client'

import React, {useState} from 'react'
import Image from 'next/image'

//?Images
import meTask from '../../../image/meTasks.png'
import meTasksNew from '../../../image/meTasksNew.png'
import meTasksEdit from '../../../image/meTasksEdit.png'
//?Icons
import {BiLogoJavascript} from 'react-icons/bi'
import {SiNextdotjs} from 'react-icons/si'
import {SiPrisma} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoPostgresql} from 'react-icons/bi'
//?Extra Icons
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from 'react-icons/fa'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

const ProjectMeTasks = () => {

   const [currentIndex, setCurrentIndex] = useState(0)

   const sliders = [
    {
        url : meTask
    },
    {
        url : meTasksNew
    },
    {
        url : meTasksEdit
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
  
      <div className='absolute top-1/2 -translate-y-1/2 -left-1 text-violetname cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
  
      <div className='absolute top-1/2 -translate-y-1/2 -right-1 text-violetname cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>

      <h4 className='pl-3 text-2xl text-violetname'>My-Tasks</h4>
      <p className='text-sm pl-3 text-violetmorelow'>
      Un web que te permite crear tus propias tareas, con la capacidad de un conjunto completo de acciones CRUD (Crear, Leer, Actualizar y Eliminar). <span className='text-celestelastname'>Esto significa que tendrás las características para agregar, consultar, modificar y eliminar tareas según tus necesidades.</span></p>
    <div className='flex justify-center -mt-1'>
      <button className='text-2xl m-1 text-orange-600'>{<AiFillHtml5 className='cursor-default' />}</button>
      <button className='text-2xl m-1 text-yellow-500'>{<BiLogoJavascript className='cursor-default' />}</button>
      <button className='text-2xl m-1 text-gray-800'>{<SiNextdotjs className='cursor-default' />}</button>
      <button className='text-2xl m-1 text-green-300'>{<SiTailwindcss className='cursor-default' />}</button>
      <button className='text-2xl m-1 text-sky-700'>{<SiPrisma className='cursor-default' />}</button>
      <button className='text-2xl m-1 text-blue-400'>{<BiLogoPostgresql className='cursor-default' />}</button> 
    </div>
   
     <div className='flex justify-center '>
      <a href='https://github.com/Alex-Br1s/meTasks' target='_blank' className='text-2xl mx-1 text-white'>{<AiFillGithub />}</a>
      <a href='https://my-new-tasks.vercel.app/' target='_blank' className='text-2xl mx-1 text-gray-500'>{<FaLink />}</a>
    </div>
    </div>
   )
}

export default ProjectMeTasks