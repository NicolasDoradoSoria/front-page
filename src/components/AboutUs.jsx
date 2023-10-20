import React from 'react'
import {Card} from '@nextui-org/react'

//Completar las cards con nuestra info

function AboutUs() {

const Equipo = [{
  name: "Nicolas Dorado Soria",
  job: "Programador Back-End",
  img: ""
}, {
  name: "Florencia Allami",
  job: "Programadora Front-End",
  img: ""
},{
  name: "Ezequiel Viera",
  job: "Programador Front-End",
  img: ""
},{
  name: "Reych Perez",
  job: "Programador",
  img: ""
}]
  


  return (
    <div className="Contenedor flex flex-col justify-center h-[350px] gap-7 bg-gradient-to-r from-purple-400 to-purple-900">
    <div className="Contexto flex flex-col justify-center items-center gap-4">
    <h1 className='text-5xl font-bold'>Sobre nosotros:</h1>
<p className='w-3/5 font-light'>Somos un equipo de cuatro estudiantes apasionados por la programación y el diseño web. 
Nuestra historia comenzó en las aulas de la universidad, donde compartimos un interés 
común por la tecnología y el deseo de convertirnos en expertos en el mundo digital. 
Nos dimos cuenta de que nuestro camino iba más allá de las aulas y que teníamos un 
objetivo en común: ofrecer soluciones de diseño web innovadoras y atractivas.</p>
    </div>
    <div className="Tarjetas flex flex-row justify-center gap-5">
        {Equipo.map((member, index) => (
          <Card key={index} className='w-1/5 flex justify-center items-center'>
          <img src={member.img} alt="" />
          <h3>{member.name}</h3>
          <span>{member.job}</span>
          </Card> ))}
    </div>
    </div>
  )
}

export default AboutUs