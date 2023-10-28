import React from 'react'
import '../styles/AboutUs.css'
import Motion from '@/components/Motion'

//Completar las cards con nuestra info
function AboutUs() {
  return (
    <div className={"pb-20 pt-20 bg-gradient-to-r from-purple-400 to-purple-900"}  >
      <Motion idMotion="AboutUs">
        <h1 className='text-3xl md:text-5xl font-bold text-center z-10 relative'>Sobre nosotros:</h1>
        <p className='text-md md:text-lg md:w-3/5 p-3 md:text-start text-center font-light z-10 m-auto relative'>Somos un equipo de cuatro estudiantes apasionados por la programación y el diseño web.
          Nuestra historia comenzó en las aulas de la universidad, donde compartimos un interés
          común por la tecnología y el deseo de convertirnos en expertos en el mundo digital.
          Nos dimos cuenta de que nuestro camino iba más allá de las aulas y que teníamos un
          objetivo en común: ofrecer soluciones de diseño web innovadoras y atractivas.</p>
      </Motion>
    </div>
  )
}

export default AboutUs