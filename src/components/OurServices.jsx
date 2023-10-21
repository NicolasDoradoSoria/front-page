import { Card, Image } from '@nextui-org/react'
import React from 'react'

//ordenar las cards, mejorar su contenido

function OurServices() {
  return (
    <div className='GrillaServicios flex flex-row flex-wrap'>
    <div className="Grilla1 w-1/5 bg-purple-100">
      <Image className='' src='https://th.bing.com/th/id/OIG.42ktnmOPOfuXlZw21yhj?pid=ImgGn'></Image>
    </div>
    <div className="Grilla2 w-1/5 bg-purple-300">
    <h1>Hola</h1>
    </div>
    <div className="Grilla3 w-1/5 bg-purple-500">
    <h1>Hola</h1>
    </div>
    <div className="Grilla4 w-1/5 bg-purple-700">
    <h1>Hola</h1>
    </div>
    <div className="Grilla5 w-1/5 bg-black">
    <h1>Hola</h1>
    </div>
    </div>
    
  )
}

export default OurServices