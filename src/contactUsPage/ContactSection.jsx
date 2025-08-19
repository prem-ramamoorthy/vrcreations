import ContactInfo from "./Contact/ContactInfo";
import ContactForm from "./Contact/ContactForm";

function ContactSection() {
  return (
    <section className="contact-section">
        <div className="container">
            <div className="contact-grid">
                <ContactForm/>
                <ContactInfo/>
            </div>
        </div>
    </section>
  ) ;
}

export default ContactSection ;