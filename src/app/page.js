import Contact from "@/components/Contact";
import AboutUs from "@/components/AboutUs";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import OurServices from "@/components/OurServices";

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
