import { useState, useEffect } from "react";
import data from '/src/data/Protfolio/Projects.json';
import * as Icons from "lucide-react";

function ProtfolioSection({ activeFilter }) {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    setCardDetails(data);
  }, []);

  // Filter cards based on activeFilter
  const filteredCards = cardDetails.filter(card =>
    !activeFilter || activeFilter === 'All Projects' || card.category.toLowerCase() === activeFilter.toLowerCase()
  );

  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-grid">
          {filteredCards.map((card, index) => {
            const Icon = Icons[(card.icon || "").charAt(0).toUpperCase() + (card.icon || "").slice(1)] || Icons.Code;

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
                    {card.techTag.map((tag, idx) => (
                      <span className="tech-tag" key={idx}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <div className="project-links">
                      {card.links.map((link, idx) => {
                        const LinkIcon = Icons[(link.icon || "").charAt(0).toUpperCase() + (link.icon || "").slice(1)] || Icons.Code;
                        return (
                          <a href={link.link} className="project-link" key={idx}>
                            <LinkIcon style={{ width: "16px", height: "16px" }} />
                          </a>
                        )
                      })}
                    </div>
                    <div className="project-grade">{card.grade}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProtfolioSection;
