import { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import data from '../data/MainFooter.json';

function Footer() {

    const [footerContent, setFooterContent] = useState();

    useEffect(() => {
        setFooterContent(data);
    }, []);

    const socialLinkComponent = data.socialLinks.map((link, index) => {
        const Icon = Icons[(link.icon || "").charAt(0).toUpperCase() + (link.icon || "").slice(1)] || Icons.Code;
        return (
            <a href={link.link} className="social-link" key={index}>
                <Icon className="icon" />
            </a>
        );
    });

    const contactUsComponent = data.ContactUs.map((contact, index) => {
        const Icon = Icons[(contact.icon || "").charAt(0).toUpperCase() + (contact.icon || "").slice(1)] || Icons.Code;
        return (
            <div className="footer-contact" key={index}>
                <Icon className="icon"/>
                <span>{contact.details}</span>
            </div>
        )
    });

    const companyComponent = data.Company.map((company , index) => {
        return (
            <li key={index}><a href={company.link} className="footer-link">{company.name}</a></li>
        )
    })

    const legalComponent = data.Legal.map((legal , index) => {
        return (
            <li key={index}><a href={legal.link} className="footer-link">{legal.name}</a></li>
        )
    })

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div>
                        <div className="footer-brand">
                            <div className="logo">
                                <div className="logo-icon">
                                    <a href="/index.html">
                                        <img src="src/assets/logo-inverted.png" alt="VR Creations Logo" height="50"
                                            width="90" />
                                    </a>
                                </div>
                                <span className="logo-text">CREATIONS</span>
                            </div>
                        </div>
                        <p className="footer-description">
                            Empowering students with professional-grade project solutions.
                            From software to hardware, documentation to prototypes - we deliver excellence.
                        </p>
                        <div className="social-links">
                            {socialLinkComponent}
                        </div>
                    </div>

                    <div>
                        <h3 className="footer-section-title">Contact Us</h3>
                        {contactUsComponent}
                    </div>

                    <div>
                        <h3 className="footer-section-title">Company</h3>
                        <ul className="footer-links">
                            {companyComponent}
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-section-title">Legal</h3>
                        <ul className="footer-links">
                            {legalComponent}
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-bottom-text">
                        © 2024 VR Creations. All rights reserved. Empowering academic excellence through innovation.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer