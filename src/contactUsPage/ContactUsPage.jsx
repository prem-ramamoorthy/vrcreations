import Hero from "./Hero"
import ContactSection from "./ContactSection"
import FaqSection from './FaqSection'
import Header from '../header/Header'
import CtaSection from './CtaSection'
import Footer from '../Footer/Footer'
import { useEffect } from "react";

function ContactUsPage() {

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/src/styles/contactStyle.css";
    document.head.appendChild(link);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    link2.href = "/src/styles/headerStyle.css";
    document.head.appendChild(link2);

    const link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href = "/src/styles/footerStyle.css";
    document.head.appendChild(link3);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <ContactSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  )
}

export default ContactUsPage