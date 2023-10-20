import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from '@nextui-org/react'

// falta poner el logo

function Header() {
  return (
    <Navbar>
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