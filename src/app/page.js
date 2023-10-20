import Contact from "@/components/Contact";
import AboutUs from "@/components/AboutUs";
import Layout from "@/components/Layout";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <AboutUs />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}
