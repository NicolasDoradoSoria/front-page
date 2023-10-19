import { Image } from '@nextui-org/react'
import React from 'react'

//algún día haremos un mail

function Contact() {
  return (
    <div className="Container bg-purple-900 h-[450px] flex">
    <div className="Presupuesto basis-1/2 py-5 flex flex-col gap-4 justify-center items-end">
    <Image className='w-[150px]' src='https://www.hidalgotitlan.gob.mx/assets/imgs/presupuesto.png' alt='LogoPresupuesto'></Image>
      <h1 className='text-3xl text-end w-3/5 font-black'>Presupuesto sin compromiso</h1>
      <p className='text-s text-end my-1 w-3/5'>Tanto si estás pensando en la creación de una página web para tu negocio, como si quieres dar un empujon a tu plan de marketing digital, en RENF podemos ayudarte.
        ¡Envianos tus un mail y nos pondremos en contacto contigo!</p>
    </div>
    <div className="Informacion basis-1/2 flex-col flex justify-center items-center gap-5">
    <div className="Email flex justify-center items-center gap-2">
    <Image className='w-[40px]' src='https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png' alt='LogoEmail'></Image>
    <h2 className='text-2xl font-semibold'>Contacto@RENFDesign.com.ar</h2>
    </div>
    <div className="WhatsApp flex justify-center items-center gap-2">
    <Image className='w-[35px]' src="http://pluspng.com/img-png/whatsapp-hd-png-logo-do-whatsapp-png-6-1600.png" alt="contacto whatsapp" />
    <h2 className="text-xl font-semibold">11-2535-4852</h2>
    </div>
    </div>
    </div>
  )
}

export default Contact