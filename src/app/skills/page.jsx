import React from 'react'

//? Herramientas
import { AiFillGithub } from "react-icons/ai";
import { FaGitAlt } from "react-icons/fa";
import { DiNpm } from "react-icons/di";
import { BsTrello } from "react-icons/bs"
import { BsSlack } from "react-icons/bs"

//? Front
import {FaReact} from 'react-icons/fa'
import {SiNextdotjs} from 'react-icons/si'
import {TbBrandRedux} from 'react-icons/tb'
import {BiLogoCss3} from 'react-icons/bi'
import {SiTailwindcss} from 'react-icons/si'
import {BiLogoJavascript} from 'react-icons/bi'
import {AiFillHtml5} from 'react-icons/ai'
import {FaNode} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiPrisma} from 'react-icons/si'
import {BiLogoPostgresql} from 'react-icons/bi'



const Habilidades = () => {
  return (
  <section className='flex flex-wrap items-center bg-prueba h-full py-32 '>
    <div className='mx-2'>
      <h1 className='text-6xl mb-8 text-violetname'>HABILIDADES</h1>
     <h2 className='text-2xl text-violetmorelow'>LENGUAJES DE PROGRAMACIÓN</h2>
      <div className='flex mt-1 mb-5'>
       <p className='flex items-center text-slate-200 text-sm border border-orange-600 bg-orange-600 w-20 h-6'>{<AiFillHtml5 className='ml-3'/>}<span className='ml-1'>HTML</span></p>
       <p className='flex items-center text-slate-200 text-sm border border-sky-600 bg-sky-600 w-16 h-6 mx-2'>{<BiLogoCss3 className='ml-2.5' />} <span className='ml-1'>CSS</span></p>
       <p className='flex items-center text-slate-200 text-sm border border-gray-600 bg-yellow-600 w-28 h-6'>{<BiLogoJavascript className='ml-2.5 text-yellow-300' />}<span className='ml-1'>JAVASCRIPT</span></p>
      </div>
      <h2 className='text-2xl text-violetmorelow'>FRAMEWORKS Y LIBRERÍAS</h2>
      <div className='flex flex-wrap mt-1 mb-5'>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-sky-600 bg-sky-600 w-20 h-6'>{<FaReact className='ml-2 text-blue-300' />} <span className='ml-1'>REACT</span></p>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-violet-500 bg-violet-500 w-20 h-6 mx-2'>{<TbBrandRedux className='ml-2 text-violet-800' />} <span className='ml-1'>REDUX</span></p>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-gray-800 bg-gray-800 w-20 h-6'>{<SiNextdotjs className='ml-2.5 text-gray-950' />}<span className='ml-1.5'>NEXT</span></p>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-cyan-600 bg-cyan-600 w-24 h-6 mx-2'>{<SiTailwindcss className='ml-2 text-cyan-400'/>} <span className='ml-1'>TAILWIND</span></p>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-green-800 bg-green-800 w-20 h-6'>{<FaNode className='ml-2.5 text-lg' />} <span className='ml-1'>NODE</span></p>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-gray-700 bg-gray-800 w-24 h-6 mx-2'>{<SiExpress className='ml-2 text-black' />} <span className='ml-1'>EXPRESS</span></p>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-sky-700 bg-sky-600 w-24 h-6'>{<SiPrisma className='ml-2 text-sky-800' />} <span className='ml-1'>PRISMA</span></p>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-sky-600 bg-sky-600 w-28 h-6 mx-2'>{<BiLogoPostgresql className='ml-1 text-sky-800' />} <span className='ml-1'>POSTGRESQL</span></p>

      </div>

      
      <h2 className='text-2xl text-violetmorelow'>TECNOLOGIAS Y HERRAMIENTAS</h2>
        <div className='flex flex-wrap mt-1 mb-5'>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-gray-800 bg-gray-800 h-6 w-20'>{<AiFillGithub className='ml-1.5' />}<span className='ml-1'>GITHUB</span></p>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-red-600 bg-red-500 h-6 w-14 mx-2'>{<FaGitAlt className='ml-2 text-orange-800' />} <span className='ml-1'>GIT</span></p>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-red-600 bg-red-500 h-6 w-16'>{<DiNpm className='ml-1.5 text-orange-900 text-lg'/>} <span className='ml-1'>NPM</span></p>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-sky-600 bg-sky-500 h-6 w-20 mx-2'>{<BsTrello className='ml-1.5 text-sky-700'/>} <span className='ml-1'>TRELLO</span></p>
        <p className='flex items-center my-1 text-slate-200 text-sm border border-pink-500 bg-pink-500 h-6 w-20'>{<BsSlack className='ml-2.5 text-pink-200'/>} <span className='ml-1'>SLACK</span></p>
        </div>
    </div>
  </section>
  )
}

export default Habilidades