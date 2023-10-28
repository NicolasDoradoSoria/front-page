import { FormContact } from '@/components/FormContact'
import Motion from '@/components/Motion'
import { Image } from '@nextui-org/react'
import React from 'react'

//algún día haremos un mail
function Contact() {
  return (
    <Motion style={"bg-purple-900 h-fit flex items-center flex-wrap justify-center pt-20 pb-20 z-100 w-full"} idMotion={"Contact"}>
      <div className="contact-div flex items-end flex-col z-10 gap-4 w-1/2 ">
        <Image className=' w-[150px]' src='https://www.hidalgotitlan.gob.mx/assets/imgs/presupuesto.png' alt='LogoPresupuesto'></Image>
        <h1 className='contact-h1 text-3xl font-black'>Presupuesto sin compromiso</h1>
        <p className='contact-p text-right text-s my-1 md:w-4/5'>Tanto si estás pensando en la creación de una página web para tu negocio, como si queres dar un empujon a tu plan de marketing digital, en RENF podemos ayudarte.
          ¡Completa el formulario y nos pondremos en contacto contigo!</p>
      </div>
      <div className="m-auto z-10 ">
        <FormContact />
      </div>
    </Motion>
  )
}

export default Contact