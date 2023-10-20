import React from 'react'
import {Image} from "@nextui-org/react";
//fondo divertido, fullscreen, que se vea lindo

function Logo() {
  return (
    <div className='front page layer'>
      {/* <h1>Diseño de paginas web empresariales en Argentina</h1> */}
      {/* <h6>Tienda online, aplicaciónes de inventario, y productos personalizados</h6> */}
      <Image
      className='max-w-full max-h-full'
        alt="NextUI hero Image"
        src="/logo.jpeg" />
    </div>
  )
}

export default Logo