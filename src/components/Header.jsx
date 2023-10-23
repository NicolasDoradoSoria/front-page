"use client"
import React, { useRef } from 'react'
import { Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import '../app/globals.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { useScroll, motion, useSpring, useMotionValueEvent } from "framer-motion"
// falta poner el logo

function Header() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })

  return (
    <>
      {/* <motion.div ref={ref} className="progress-bar" style={{ scaleX: scrollYProgress, opacity: scrollYProgress }}> */}
        <Navbar>
          <NavbarBrand className='gap-4'>
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
      {/* </motion.div> */}

    </>
  )
}

export default Header