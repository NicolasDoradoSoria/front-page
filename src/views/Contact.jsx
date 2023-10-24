import { FormContact } from '@/components/FormContact'
import Motion from '@/components/Motion'
import { Image } from '@nextui-org/react'
import React from 'react'

//algún día haremos un mail
function Contact() {
  return (
    <Motion style={"bg-purple-900 h-fit flex flex-wrap justify-center pt-20 pb-20 z-100"} idMotion={"Contact"}>
      <div className="presupuesto basis-1/2 py-5 px-1 flex flex-col gap-4 m-w-fit z-10 mr-10">
        <Image className='w-[150px]' src='https://www.hidalgotitlan.gob.mx/assets/imgs/presupuesto.png' alt='LogoPresupuesto'></Image>
        <h1 className='text-3xl font-black'>Presupuesto sin compromiso</h1>
        <p className='text-s my-1 md:w-4/5'>Tanto si estás pensando en la creación de una página web para tu negocio, como si queres dar un empujon a tu plan de marketing digital, en RENF podemos ayudarte.
          ¡Completa el formulario y nos pondremos en contacto contigo!</p>
      </div>
      <div className="m-auto flex ml-21 z-10">
        <FormContact/>
      </div>
    </Motion>
  )
}

export default Contact