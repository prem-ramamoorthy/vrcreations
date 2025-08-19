import { useState, useEffect } from "react"
import data from '/src/data/aboutUs/valueCardDetails.json'
import * as Icons from 'lucide-react'

function ValuesSection() {

    const [valuedetails, setValueDeatils] = useState([]);

    useEffect(() => {
        setValueDeatils(data);
    }, [])

    const cardDetails = valuedetails.map((value, index) => {
        const Icon = Icons[(value.icon || "").charAt(0).toUpperCase() + (value.icon || "").slice(1)] || Icons.Code;
        return (
            <div className="value-card" key={index}>
                <div className="value-icon">
                    <Icon style={{ width: "28px", height: "28px", color: "white" }} />
                </div>
                <div className="value-title">{value.title}</div>
                <div className="value-desc">{value.description}</div>
            </div>
        );
    });

    return (
        <section className="values-section">
            <div className="container">
                <div className="hero-content">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Our Values</h2>
                    <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: "0" }}>The principles that guide our work</p>
                </div>
                <div className="values-grid">
                    {cardDetails}
                </div>
            </div>
        </section>
    )
}

export default ValuesSection