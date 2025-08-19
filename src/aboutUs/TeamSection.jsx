import { useState, useEffect } from "react"
import data from '/src/data/aboutUs/teamdetails.json'
import * as Icons from 'lucide-react'

function TeamSection() {

    const [teamdetails, setteamdetails] = useState([]);

    useEffect(() => {
        setteamdetails(data);
    }, []);

    const teamCompomnents = teamdetails.map((team, index) => {
        const Icon = Icons[(team.icon || "").charAt(0).toUpperCase() + (team.icon || "").slice(1)] || Icons.Code;
        return (
            <div className="team-card" key={index}>
                <div className="team-avatar">
                    <Icon style={{ width: "32px", height: "32px", color: "white" }} />
                </div>
                <div className="team-name">{team.name}</div>
                <div className="team-role">{team.role}</div>
                <div className="team-desc">{team.description}</div>
            </div>
        );
    });

    return (
        <section className="team-section">
            <div className="container">
                <div className="hero-content">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Our Expert Team</h2>
                    <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: "0" }}>Meet the professionals behind your success</p>
                </div>
                <div className="team-grid">
                    {teamCompomnents}
                </div>
            </div>
        </section>
    )
}

export default TeamSection