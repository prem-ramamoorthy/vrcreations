import data from '/src/data/Protfolio/Stats.json'
import { useState, useEffect } from 'react'
import {Users} from 'lucide-react'

function AboutSection() {


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
        <section className="about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-text">
                        <h2>Who We Are</h2>
                        <p>VR Creations is a dedicated team of experienced students passionate about helping other students
                            achieve academic success through innovative project solutions.</p>
                        <p>Founded by industry experts with years of experience in software development, hardware
                            engineering, and technical documentation, we understand the challenges students face in today's
                            competitive academic environment.</p>
                        <p>Our mission is to bridge the gap between theoretical knowledge and practical implementation,
                            providing students with professional-grade project solutions that meet the highest academic
                            standards.</p>
                    </div>
                    <div className="about-image">
                        <div
                            style={{width: "100%", height: "300px", background: "var(--gradient-primary)", borderRadius: "1rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <img href="/assets/Suit.jpg" style={{width: "80px", height: "80px", color: "white"}} />
                        </div>
                    </div> 
                </div>

                <div className="about-stats">
                    {statsComponents}
                </div>
            </div>
        </section>
    )
}

export default AboutSection
