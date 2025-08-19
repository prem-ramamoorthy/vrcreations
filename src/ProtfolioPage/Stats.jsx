import data from '/src/data/Protfolio/Stats.json'
import { useState, useEffect } from 'react'

function Stats() {

    const [stats, setstats] = useState([]);

    useEffect(() => {
        setstats(data);
    });

    const statsComponents = stats.map((stat, index) => {
        return (
            <div className="stat-card" key={index}>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
            </div>
        );
    });

    return (
        <section className="stats-section">
            <div className="container">
                <div className="hero-content">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Project Success Stats</h2>
                    <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: "0" }}>Numbers that speak for our quality</p>
                </div>
                <div className="stats-grid">
                    {statsComponents}
                </div>
            </div>
        </section>
    )
}

export default Stats