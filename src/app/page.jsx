import AboutUs from "../views/AboutUs";
import Banner from "../components/Banner";
import Contact from "../views/Contact";
import Footer from "../views/Footer";
import Layout from "../components/Layout";

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
