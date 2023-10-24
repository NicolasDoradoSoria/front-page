"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import '../app/globals.css'
import { useInView } from "framer-motion"
// falta poner el logo

function Header({ color }) {
  return (
    <>
      <Navbar className={color ? "scrolled-navbar transition-all duration-300" : "transition-all duration-300"} isBordered={true}>
        <NavbarBrand className='gap-4' >
          <Image width={40} src='https://th.bing.com/th/id/OIG.42ktnmOPOfuXlZw21yhj?pid=ImgGn' alt='LogoEmail'></Image>
          <h1 className='text-3xl font-bold'>RENF DESIGN</h1>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link href="#OurServices" underline="hover" color='foreground' className='font-semibold'>Nuestros Servicios</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#AboutUs" underline="hover" color='foreground' className='font-semibold'>Sobre nosotros</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#Contact" underline="hover" color='foreground' className='font-semibold'>Contacto</Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

    </>
  )
}

export default Header