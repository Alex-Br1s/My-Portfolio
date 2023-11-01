'use client'

import React, {useState} from 'react'
import Image from 'next/image'

import { AiFillGithub } from "react-icons/ai";
/* import { FaLink } from 'react-icons/fa' */
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'

import {FaReact} from 'react-icons/fa'
import {TbBrandRedux} from 'react-icons/tb'
import {BiLogoCss3} from 'react-icons/bi'
//?Back
import {FaNode} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
//?DB
import {BiLogoPostgresql} from 'react-icons/bi'
import {SiSequelize} from 'react-icons/si'

//?Images
import piPokemon from '../../../image/pi_Pokemon.png' 
import piPokemonDetail from '../../../image/pi_PokemonDetail.png'
import piPokemonForm from '../../../image/pi_PokemonForm.png'
import piPokemonPag from '../../../image/PI-PokemonPag.png'

const ProjectPokemon = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const sliders = [
        {
          url: piPokemon
        },
        {
          url: piPokemonDetail
        },
        {
          url: piPokemonForm
        },
        {
          url : piPokemonPag
        }
    ]

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;//? Preguntamos si el estado local es === 0
        const newSlide = isFirstSlide ? sliders.length - 1 : currentIndex - 1; //? Si es true le restamos uno al array de imagenes(sliders) y si es false le restamos uno al estado local
        setCurrentIndex(newSlide)//? Seteamos para repetir el proceso
    }

    const nextSlide = () => {
        const isFirstSlide = currentIndex === sliders.length - 1;//? Preguntamos si el estado es igual a la cantidad de items dentro del array
        const newSlide = isFirstSlide ? 0 : currentIndex + 1; //? Si es true newSlide es 0 para luego ser seteado y si es false avanzamos un item
        setCurrentIndex(newSlide)//? Lo seteamos al estado local para continuar con el ciclo
    }


    return (
    <div className='border w-80 h-96 relative my-2 mx-2'>
    <div className='relative'>
    <Image src={sliders[currentIndex].url} alt='pf-Soyhenry' className='h-44 ' /> 
 
     <div className='absolute top-1/2 -translate-y-1/2 -left-1 text-violetname  cursor-pointer'>
       <BsChevronCompactLeft onClick={prevSlide} size={30} />
     </div>
 
     <div className='absolute top-1/2 -translate-y-1/2 -right-1 text-violetname  cursor-pointer'>
       <BsChevronCompactRight onClick={nextSlide} size={30} />
     </div>
   </div>

     <h4 className='pl-3 text-2xl text-violetname'>PI Pokemons</h4>
     <p className='text-sm pl-3 text-violetmorelow'>Una aplicación web sobre tematica Pokemones como proyecto indivual del bootcamp Soy-Henry. <span className='text-celestelastname'>Con caracteristicas tales como: Búsquedas, Filtros, Ordenamiento, Paginación y Creación de pokemones.</span></p>

   <div className='flex justify-center mt-4'>
     <button className='text-2xl m-1 text-blue-500'>{<FaReact className='cursor-default' />}</button>
     <button className='text-2xl m-1 text-violet-600'>{<TbBrandRedux className='cursor-default' />}</button>
     <button className='text-2xl m-1 text-sky-500'>{<BiLogoCss3 className='cursor-default' />}</button>
     <button className='text-2xl m-1 text-green-600'>{<FaNode className='cursor-default' />}</button>
     <button className='text-2xl m-1'>{<SiExpress className='cursor-default' />}</button>
     <button className='text-2xl m-1 text-blue-400'>{<BiLogoPostgresql className='cursor-default' />}</button> 
     <button className='text-2xl m-1 text-sky-600'>{<SiSequelize className='cursor-default' />}</button>
   </div>
  
    <div className='flex justify-center '>
     <a href='https://github.com/Alex-Br1s/PI-Pokemons' target='_blank' className='text-2xl mx-1 text-white'>{<AiFillGithub />}</a>
  {/*    <a href='https://ecowise-web-site.vercel.app/' target='_blank' className='text-2xl mx-1 text-gray-500'>{<FaLink />}</a> */}
   </div>
   </div>
  )
}

export default ProjectPokemon