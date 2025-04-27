import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Ourservice from "../components/landing/Ourservice";
import Choose from "../components/landing/Choose";
import Pricing from "../components/landing/Pricing";
import Ourteam from "../components/landing/Ourteam";
import Testimonial from "../components/landing/Testimonial";
import Footer from "../components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Ourservice />
      <Choose />
      <Pricing />
      <Ourteam />
      <Testimonial />
      <Footer />
    </>
  );
}
