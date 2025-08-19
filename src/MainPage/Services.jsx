import { useState, useEffect } from "react";
import data from "../data/mainpageServices.json";
import * as Icons from "lucide-react";

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        setServices(data);
    }, []);

    const serviceComponents = services.map((service , index) => {
        const Icon = Icons[(service.icon || "").charAt(0).toUpperCase() + (service.icon || "").slice(1)] || Icons.Code;
        const ulcomponents = service.features.map((feature, idx) => {
            return (<li className="service-feature" key={idx}>{feature}</li>);
        });
        return (
            <div className="service-card" key={index}>
                <div className="service-card-icon">
                    <Icon className="icon" />
                </div>
                <h3 className="service-card-title">{service.header}</h3>
                <p className="service-card-description">
                    {service.description}
                </p>
                <ul className="service-features">
                    {ulcomponents}
                </ul>
            </div>
        )
    });

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Complete Project Solutions</h2>
                    <p className="section-subtitle">
                        From initial concept to final delivery, we provide end-to-end solutions
                        for all your college project needs.
                    </p>
                </div>

                <div className="services-grid">
                    {serviceComponents}
                </div>
            </div>
        </section>
    )
}

export default Services