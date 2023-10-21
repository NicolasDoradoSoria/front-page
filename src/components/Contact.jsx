import { Image } from '@nextui-org/react'
import React from 'react'

//algún día haremos un mail

function Contact() {
  return (
    <div className="Container bg-purple-900 h-fit flex flex-wrap justify-center z-100" id='Contact'>
      <div className="Presupuesto basis-1/3 py-5 px-1 flex flex-col gap-4 m-w-fit z-10">
        <Image className='w-[150px]' src='https://www.hidalgotitlan.gob.mx/assets/imgs/presupuesto.png' alt='LogoPresupuesto'></Image>
        <h1 className='text-3xl font-black'>Presupuesto sin compromiso</h1>
        <p className='text-s my-1'>Tanto si estás pensando en la creación de una página web para tu negocio, como si queres dar un empujon a tu plan de marketing digital, en RENF podemos ayudarte.
          ¡Envianos tus datos en un mail y nos pondremos en contacto contigo!</p>
      </div>
      <div className="Informacion basis-2/3 flex-col flex justify-center items-center gap-5 m-w-fit z-10">
        <div className="Email flex justify-center items-center gap-2">
          <Image className='w-[35px]' src='https://www.freepnglogos.com/uploads/gmail-email-logo-png-16.png' alt='LogoEmail'></Image>
          <h2 className='text-l font-semibold'>CONTACTO@RENFDESIGN.COM.AR</h2>
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