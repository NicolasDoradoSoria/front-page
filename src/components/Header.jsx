import React from 'react'
import {Image, Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@nextui-org/react'

// falta poner el logo

function Header() {
  return (
    <Navbar>
        <NavbarBrand className='gap-4'>
          <Image className='w-[40px]' src='https://th.bing.com/th/id/OIG.42ktnmOPOfuXlZw21yhj?pid=ImgGn' alt='LogoEmail'></Image>
          <h1 className='text-3xl font-bold'>RENF DESIGN</h1>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarItem>Nuestros Servicios</NavbarItem>
            <NavbarItem>Portafolio</NavbarItem>
            <NavbarItem>Sobre nosotros</NavbarItem>
            <NavbarItem>Contacto</NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default Header