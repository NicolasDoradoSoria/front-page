import { Button } from "@nextui-org/react";
import Contact from "@/components/Contact";
import AboutUs from "@/components/AboutUs";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <AboutUs />
        <Contact />
      </Layout>
    </>
  )
}
