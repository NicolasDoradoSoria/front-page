import { Card } from '@nextui-org/react'
import React from 'react'

//ordenar las cards, mejorar su contenido

function OurServices() {
  return (
    <div>
      <h2>Nuestros Servicios</h2>

      <Card>
        Páginas amoldadas a tus necesidades, hechas por un equipo profesional
      </Card>

      <Card>
        Comunicación sobre la construcción de la página, para dar total atención a sus necesidades
      </Card>

      <Card>
        Hecho principalmente en Next.js y React, la tecnología utilizada en Facebook
      </Card>

      <Card>
        Diseño responsive, adaptable a todos los dispositivos
      </Card>
    </div>
    
  )
}

export default OurServices