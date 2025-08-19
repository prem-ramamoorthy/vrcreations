import { useState, useEffect } from "react"
import data from '/src/data/contactUs/ContactForm.json'
import { Send } from 'lucide-react'

function ContactForm() {
    const [projectType, setProjectType] = useState([]);
    const [projectTime, setProjectTime] = useState([]);
    const [budget, setBudget] = useState([]);

    useEffect(() => {
        if (data) {
            setProjectType(data.projectTypes);
            setProjectTime(data.projectTime);
            setBudget(data.budget);
        }
    }, [data]);

    const typeComponent = projectType.map((type, index) => {
        return (<option value={type.value} key={index}>{type.name}</option>);
    });

    const timeComponent = projectTime.map((time, index) => {
        return (<option value={time.value} key={index}>{time.name}</option>);
    });

    const budgetComponent = budget.map((budgetElement, index) => {
        return (<option value={budgetElement.value} key={index}>{budgetElement.name}</option>);
    });

    return (
        <div className="contact-form">
            <h2 style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "1.5rem",
                color: "hsl(var(--foreground))",
            }}
            >
                Send Us a Message
            </h2>
            <form>
                <div className="form-group">
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input type="text" id="name" className="form-input" required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input type="email" id="email" className="form-input" required />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" className="form-input" />
                </div>
                <div className="form-groupa">
                    <label className="form-label" htmlFor="project-type">Project Type *</label>
                    <select id="project-type" className="form-select" required>
                        {typeComponent}
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="timeline">Project Timeline</label>
                    <select id="timeline" className="form-select">
                        {timeComponent}
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="budget">Budget Range</label>
                    <select id="budget" className="form-select">
                        {budgetComponent}
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="message">Project Details *</label>
                    <textarea id="message" className="form-textarea"
                        placeholder="Please describe your project requirements, goals, and any specific technologies or features you need..."
                        required></textarea>
                </div>
                <button type="submit" className="form-button">
                    Send Message
                    <Send style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "8px",
                    }} />
                </button>
            </form>
        </div>
    )
}

export default ContactForm