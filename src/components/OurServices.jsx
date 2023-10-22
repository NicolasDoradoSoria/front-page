import { Card, Image } from '@nextui-org/react'
import React from 'react'

//ordenar las cards, mejorar su contenido

function OurServices() {
  return (
    <div id='OurServices' className='GrillaServicios flex flex-row flex-wrap z-10 font-normal text-3xl text-white text-center'>
      <div className="Grilla1 w-1/4 bg-purple-200">
        <img className='' src='https://th.bing.com/th/id/OIG.42ktnmOPOfuXlZw21yhj?pid=ImgGn'></img>
      </div>
        <div className="Grilla2 w-1/4 bg-purple-400 flex-col flex justify-center items-center">
        <h1 className="z-10">Realizamos diseños web/páginas web institucionales, comercios online (E-commerce) y de catálogos de productos</h1>
      </div>
      <div className="Grilla3 w-1/4 bg-pink-300 flex-col flex justify-center gap-5 items-center">
        <Image className="w-[250px]" src='https://pluspng.com/img-png/computer-network-clipart-clip-art-900.png' alt='redes'></Image>
        <h1 className="z-10">Alojamiento y dominios</h1>
      </div>
      <div className="Grilla4 w-1/4 bg-orange-300 flex-col flex justify-center items-center">
        <Image className="w-[200px]" src='https://cdn.onlinewebfonts.com/svg/img_501919.png'></Image>
        <h1 className="z-10">Software a medida</h1>
      </div>
      <div className="Grilla5 w-1/2 bg-indigo-500 pt-20 pb-20 flex flex-col items-center justify-center">
        <h1 className="z-10">Trabajaremos contigo codo a codo para desarrollar una estrategia de marketing potente, que amplíe tu alcance y evoque el compromiso de tus consumidores</h1>
      </div>
      <div className="Grilla6 w-1/2 bg-purple-600 pt-20 pb-20 items-center flex flex-col gap-4">
        <Image className='w-[150px]' src='https://www.pngmart.com/files/5/Piggy-Transparent-Background.png'></Image>
        <h1 className="z-10">Somos conscientes de que no todas las empresas tienen un amplio presupuesto para el diseño de su sitio web. Por eso, ofrecemos soluciones de diseño web económicas. Nuestros diseños son sencillos y elegantes, con funcionalidades básicas pero esenciales. Ofrecemos una excelente relación calidad-precio sin comprometer la calidad</h1>    
      </div>
    </div>
    
  )
}

export default OurServices