import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useFormContact = () => {
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
            console.log(error);
          }
        );
    };
  
    return {
        
    }
}
 
export default useFormContact;