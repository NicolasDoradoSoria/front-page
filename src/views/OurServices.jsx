'use client'

import { Image } from '@nextui-org/react'
import React from 'react'
import '../app/globals.css'
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer";

//ordenar las cards, mejorar su contenido

function OurServices() {

  const [ref, inView] = useInView({
    triggerOnce: false, // La animación se activa una sola vez cuando el componente entra en la vista
  });

  return (
    <motion.div 
    ref={ref}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
id="OurServices" className='GrillaServicios grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 z-10 font-normal text-md md:text-2xl text-white text-center'>
      <div className="Grilla1 bg-indigo-100 p-3">
        <Image className='w-[100%] h-auto' src='https://th.bing.com/th/id/OIG.42ktnmOPOfuXlZw21yhj?pid=ImgGn' alt=''></Image>
      </div>
        <div className="Grilla2 bg-purple-400 pt-20 pb-20 flex-col flex justify-center items-center p-3">
        <h1 className="z-10">Realizamos diseños web/páginas web institucionales, comercios online (E-commerce) y de catálogos de productos</h1>
      </div>
      <div className="Grilla3 bg-pink-300 flex-col flex justify-center gap-5 items-center p-3">
        <Image className="w-[250px]" src='https://cdn.pixabay.com/photo/2013/04/01/09/16/server-98466_960_720.png' alt=''></Image>
        <h1 className="z-10">Alojamiento y dominios</h1>
      </div>
      <div className="Grilla4 bg-orange-300 flex-col flex justify-center items-center p-3">
        <Image className="w-[200px]" src='https://cdn.onlinewebfonts.com/svg/img_501919.png' alt=''></Image>
        <h1 className="z-10">Software a medida</h1>
      </div>
      <div className="Grilla5 bg-indigo-500 pt-20 pb-20 flex flex-col items-center justify-center sm:col-span-2 p-3">
        <h1 className="z-10">Trabajaremos contigo codo a codo para desarrollar una estrategia de marketing potente, que amplíe tu alcance y evoque el compromiso de tus consumidores</h1>
      </div>
      <div className="Grilla6 bg-purple-600 pt-20 pb-20 items-center flex flex-col gap-4 sm:col-span-2 p-3">
        <Image className='w-[150px]' src='https://www.pngmart.com/files/5/Piggy-Transparent-Background.png' alt=''></Image>
        <h1 className="z-10">Somos conscientes de que no todas las empresas tienen un amplio presupuesto para el diseño de su sitio web. Por eso, ofrecemos soluciones de diseño web económicas. Nuestros diseños son sencillos y elegantes, con funcionalidades básicas pero esenciales. Ofrecemos una excelente relación calidad-precio sin comprometer la calidad</h1>    
      </div>
    </motion.div>
    
  )
}

export default OurServices