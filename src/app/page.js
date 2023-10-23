import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import AboutUs from "@/views/AboutUs";
import Contact from "@/views/Contact";
import Footer from "@/views/Footer";
import OurServices from "@/views/OurServices";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <AboutUs />
        <OurServices />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}
