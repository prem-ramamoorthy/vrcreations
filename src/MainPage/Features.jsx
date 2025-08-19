import { useState, useEffect } from "react"
import data from '../data/features.json'
import * as Icons from "lucide-react";

function Features() {

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        setFeatures(data);
    }, [])

    const featuresComponent = data.map((feature, index) => {
        const Icon = Icons[(feature.icon || "").charAt(0).toUpperCase() + (feature.icon || "").slice(1)] || Icons.Code;
        return (
            <div className="feature-card" key={index}>
                <div className="feature-icon">
                    <Icon className="icon-xl" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">
                    {feature.description}
                </p>
            </div>
        );
    })

    return (
        <section className="features">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Why Choose VR Creations?</h2>
                    <p className="section-subtitle">
                        We're committed to your academic success with professional-grade solutions
                        and dedicated support throughout your project journey.
                    </p>
                </div>

                <div className="features-grid">
                    {featuresComponent}
                </div>
            </div>
        </section>
    )
}

export default Features