import { useState, useEffect } from "react"
import data from '../data/MainpageCtaInfo.json'
import { MessageCircle, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

function Contact() {

    const [ctaInfo, setCtaInfo] = useState([]);
    useEffect(() => {
        setCtaInfo(data);
    }, []);

    const ctaInfoComponents = ctaInfo.map((info, index) => {
        return (
            <div className="cta-info-item" key={index}>
                <h4 className="cta-info-title">{info.heading}</h4>
                <p className="cta-info-text">{info.description}</p>
            </div>
        )
    })

    return (
        <section className="cta" id="contact">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">Ready for Your Next Project?</h2>
                    <p className="cta-subtitle">
                        Let's get started! Share your project requirements and we'll bring your ideas to life
                        with professional quality and academic excellence.
                    </p>

                    <div className="cta-buttons">
                        <NavLink to="/contactus" className="btn btn-gradient">
                            <MessageCircle className="icon" />
                            Contact Us
                            <ArrowRight className="icon" />
                        </NavLink>
                        <NavLink to="/contactus" className="btn btn-outline-white" style={{ border: "3px solid white" }}>
                            Get Free Consultation
                        </NavLink>
                    </div>
                    <div className="cta-info">
                        {ctaInfoComponents}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact ;