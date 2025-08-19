import { useState, useEffect } from "react";
import data from '../data/Services/services.json'
import * as Icons from "lucide-react";

function ServiceSection() {

    const [Services, setServices] = useState([]);

    useEffect(() => {
        setServices(data);
    }, [])

    const ServiceCardComponents = Services.map((service, index) => {
        const Icon = Icons[(service.icon || "").charAt(0).toUpperCase() + (service.icon || "").slice(1)] || Icons.Code;

        const IconCheck = Icons[("check" || "").charAt(0).toUpperCase() + ("check" || "").slice(1)] || Icons.Code;

        const featureComponents = service.features.map((feature , index) => {
            return (
                <li key={index}><IconCheck style={{ width: "16px", height: "16px", color: "hsl(var(--vr-purple))" }} />
                {feature}</li>
            ) ;
        })

        return (
            <div className="service-card" key={index}>
                <div className="service-icon">
                    <Icon style={{ width: "28px", height: "28px", color: "white" }} />
                </div>
                <div className="service-title">{service.title}</div>
                <div className="service-desc">{service.description}</div>
                <ul className="service-features">
                    {featureComponents}
                </ul>
                <div className="service-price">
                    <span className="price-text">{service.price}</span>
                </div>
            </div>
        );
    })

    return (
        <section className="services-section">
            <div className="container">
                <div className="hero-content">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>What We Offer</h2>
                    <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: "0" }}>Professional solutions for every
                        aspect of your project</p>
                </div>

                <div className="services-grid">
                    {ServiceCardComponents}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection