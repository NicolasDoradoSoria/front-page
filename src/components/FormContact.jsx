import { Textarea, Input, Button } from '@nextui-org/react'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FormContact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_nx67e66",
      "template_mqcoy4m",
      form.current,
      "uT_y_QsR1LBMnw-Bx"
    )
    .then(
      (result) => {
        console.log(result.text);
        toast.success('Mensaje Enviado!', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
          form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
};

  return (
    <div className="flex-col w-full mb-6 md:mb-0">
    <form ref={form} onSubmit={sendEmail}>
      <Input isRequired type="text" name="user_name"  className='mb-5 font-bold' color='warning' variant="underlined" label="Nombre"/>
      <Input isRequired type="email" name="user_email" className='mb-5' color='warning' variant="underlined" label="Email"/>
      <Textarea isRequired variant='bordered' name="message" color='warning' label="Tu mensaje"></Textarea>
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

  )
}
