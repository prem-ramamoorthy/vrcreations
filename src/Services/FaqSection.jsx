import data from '../data/Services/serviceFaq.json'
import { useState, useEffect } from 'react'
import {ChevronDown} from 'lucide-react'

function FaqSection() {

    const [faqs, setfaqs] = useState([]);

    useEffect(() => {
        setfaqs(data);
    }, [])

    const FaqComponents = faqs.map((faq, index) => {
        return (
            <div className="faq-item" key={index}>
                <button className="faq-question">
                    {faq.question}
                    <ChevronDown style={{width: "20px", height: "20px"}} />
                </button>
                <div className="faq-answer">
                    {faq.answer}
                </div>
            </div>
        );
    })

    return (
        <section className="faq-section">
            <div className="container">
                <div className="hero-content">
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Frequently Asked Questions</h2>
                    <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: "0" }}>Get answers to common questions</p>
                </div>

                <div className="faq-grid">
                    {FaqComponents}
                </div>
            </div>
        </section>
    )
}

export default FaqSection