import {Calendar , Phone}  from 'lucide-react'

function CtaSection() {
  return (
    <section className="cta-section">
        <div className="container cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-desc">Join hundreds of students who have achieved academic excellence with our help</p>
            <div className="cta-buttons">
                <a href="#" className="cta-button">
                    <Calendar style={{width: "20px",height: "20px"}}/>
                    Schedule Free Consultation
                </a>
                <a href="#" className="cta-button secondary">
                    <Phone style={{width: "20px",height: "20px"}}/>
                    Call Now
                </a>
            </div>
        </div>
    </section>
  )
}

export default CtaSection