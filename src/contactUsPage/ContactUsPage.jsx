import Hero from "./Hero"
import ContactSection from "./ContactSection"
import FaqSection from './FaqSection'
import Header from '../header/Header'
import CtaSection from './CtaSection'
import Footer from '../Footer/Footer'
import { useEffect } from "react";
import '../styles/contactStyle.css'
import '../styles/footerStyle.css'

function ContactUsPage() {

  return (
    <div className="contact-us-page ">
      <Header />
      <Hero />
      <ContactSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default ContactUsPage