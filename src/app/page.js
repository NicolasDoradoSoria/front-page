'use client'

import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import AboutUs from "@/views/AboutUs";
import Contact from "@/views/Contact";
import Footer from "@/views/Footer";
import OurServices from "@/views/OurServices";
import 'atropos/css'
import './globals.css'
import MembersList from "@/components/MembersList";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <AboutUs />
        <MembersList />
        <OurServices />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}
