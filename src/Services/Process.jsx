import { useState, useEffect } from "react"
import data from '../data/Services/process.json'

function Process() {

    const [processes, setprocesses] = useState([]);

    useEffect(() => {
        setprocesses(data);
    }, [])

    const processComponenets = processes.map((process, index) => {
        return (
            <div className="process-step" key={index}>
                <div className="step-number">{index+1}</div>
                <div className="step-title">{process.title}</div>
                <div className="step-desc">{process.description}</div>
            </div>
        );
    })

    return (
        <section className="process-section">
            <div className="container">
                <div className="hero-content">
                    <h2 style={{fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem"}}>Our Process</h2>
                    <p style={{color: "hsl(var(--muted-foreground))", marginBottom: "0"}}>How we deliver exceptional results</p>
                </div>

                <div className="process-grid">
                    {processComponenets}
                </div>
            </div>
        </section>
    )
}

export default Process