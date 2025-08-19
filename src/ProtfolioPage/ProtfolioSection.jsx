import { useState, useEffect } from "react";
import data from '/src/data/Protfolio/Projects.json';
import * as Icons from "lucide-react";

function ProtfolioSection() {

    const [cardDetails, setCardDetails] = useState([]);

    useEffect(() => {
        setCardDetails(data);
    }, [])

    const cardComponents = cardDetails.map((card, index) => {
        const Icon = Icons[(card.icon || "").charAt(0).toUpperCase() + (card.icon || "").slice(1)] || Icons.Code;

        const tagComponents = card.techTag.map((tag, index) => {
            return (<span className="tech-tag" key={index}>{tag}</span>);
        });

        const linkComponents = card.links.map((link, index) => {
            const Icon = Icons[(link.icon || "").charAt(0).toUpperCase() + (link.icon || "").slice(1)] || Icons.Code;
            return (
                <a href={link.link} className="project-link" key={index}>
                    <Icon style={{ width: "16px", height: "16px" }}/>
                </a>
            )
        });

        return (
            <div key={index} className="project-card">
                <div className="project-image">
                    <div className="project-category">{card.category}</div>
                    <Icon style={{ width: "60px", height: "60px", color: "white" }} />
                </div>
                <div className="project-content">
                    <div className="project-title">{card.projectTitle}</div>
                    <div className="project-desc">{card.description}</div>
                    <div className="project-tech">
                        {tagComponents}
                    </div>
                    <div className="project-footer">
                        <div className="project-links">
                            {linkComponents}
                        </div>
                        <div className="project-grade">{card.grade}</div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <section className="portfolio-section">
            <div className="container">
                <div className="portfolio-grid">
                    {cardComponents}
                </div>
            </div>
        </section>
    )
}

export default ProtfolioSection