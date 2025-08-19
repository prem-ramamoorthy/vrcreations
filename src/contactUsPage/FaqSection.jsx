import data from '/src/data/contactUs/FaqQuestions.json'
import { useState, useEffect } from 'react'
import {ChevronDown} from 'lucide-react'

function FaqSection() {

    const [Faqs, setFaqs] = useState([]);

    useEffect(() => {
        setFaqs(data);
    }, []);

    const faqComponents = Faqs.map((faq, index) => {
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
                    <h2 style={{fontSize:"2.5rem", fontWeight: "bold", marginBottom: "1rem"}}>Quick Questions</h2>
                    <p style={{color: "hsl(var(--muted-foreground))", marginBottom: "0"}}>Get instant answers to common
                        questions</p>
                </div>

                <div className="faq-grid">
                    {faqComponents}
                </div>
            </div>
        </section>
    )
}

export default FaqSection