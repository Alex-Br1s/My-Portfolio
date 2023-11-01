import React from 'react'
import ProjectEcoWise from '../components/ProjectEcoWise'
import ProjectPokemon from '../components/ProjectPokemon'
import ProjectMeTasks from '../components/ProjectMeTasks'

const Projects = () => {
  return (
    <div className='flex flex-wrap items-center h-full py-24'>
      <section className='mx-2'>
      <h3 className='text-6xl mb-10 text-violetname'>MI PORTAFOLIO</h3>
      <br />
      <br />
      <br />
      <div className='flex flex-wrap'>
      <ProjectEcoWise />
      <ProjectPokemon />
      <ProjectMeTasks />
      </div>
      </section>
    </div>
  )
}

export default Projects