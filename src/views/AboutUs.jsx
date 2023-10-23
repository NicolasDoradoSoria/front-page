'use client'
import React from 'react'
import '../styles/AboutUs.css'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";

//Completar las cards con nuestra info
function AboutUs() {

  const [ref, inView] = useInView({
    triggerOnce: false, // La animación se activa una sola vez cuando el componente entra en la vista
  });

  return (
    <>
      <motion.div ref={ref}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }} id="AboutUs" className="pb-20 pt-20 bg-gradient-to-r from-purple-400 to-purple-900">
        <h1 className='text-3xl md:text-5xl font-bold text-center z-10 relative'>Sobre nosotros:</h1>
        <p className='text-md md:text-lg md:w-3/5 p-3 md:text-start text-center font-light z-10 m-auto relative'>Somos un equipo de cuatro estudiantes apasionados por la programación y el diseño web.
          Nuestra historia comenzó en las aulas de la universidad, donde compartimos un interés
          común por la tecnología y el deseo de convertirnos en expertos en el mundo digital.
          Nos dimos cuenta de que nuestro camino iba más allá de las aulas y que teníamos un
          objetivo en común: ofrecer soluciones de diseño web innovadoras y atractivas.</p>
      </motion.div>
    </>
  )
}

export default AboutUs