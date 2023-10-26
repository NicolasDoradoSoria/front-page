import { Textarea, Input, Button, Card, CardBody } from '@nextui-org/react'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFormContact from '@/hooks/useFormContact';

export const FormContact = () => {
  const { form, sendEmail } = useFormContact()

  return (
    <Card className='p-5 bg-white bg-opacity-50 w-full'>
     <CardBody>

      <div className="flex flex-col mb-6 md:mb-0">
        <form ref={form} onSubmit={sendEmail}>
          <Input isRequired type="text" name="user_name" className='mb-5 font-bold text-black' variant="underlined" label="ingrese su Nombre" color='danger' />
          <Input isRequired type="email" name="user_email" className='mb-5 text-black' variant="underlined" label="ingrese su email" color='danger' />
          <Textarea isRequired className='text-black' variant='bordered' name="message" label="Tu mensaje" color='danger'></Textarea>
          <Button className='mt-5 bg-orange-500 font-semibold text-black' type='submit'>Enviar</Button>
        </form>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
     </CardBody>
    </Card>

  )
}
