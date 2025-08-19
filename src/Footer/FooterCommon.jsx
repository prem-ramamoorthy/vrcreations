import data from '../data/FooterCommon.json'
import { useState, useEffect } from 'react'

function FooterCommon() {

    const [details , setDeatails] = useState({}) ;
    
    useEffect(()=>{
        setDeatails(data) ;
    } , [])
    
    const quickLinksComponents = data['Quick Links'].map((links , index) => {
        return (<li key={index}><a href={links.url}>{links.label}</a></li>) ;
    })

    const servicesComponents = data.Services.map((links , index) => {
        return (<li key={index}><a href={links.url}>{links.label}</a></li>) ;
    })

    const contactComponents = data['Contact Info'].map((links , index) => {
        return (<li key={index}>{links}</li>) ;
    })

    return (
        <div className='footer-page'>
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-section">
                            <h4>VR Creations</h4>
                            <p style={{ color: "hsl(var(--muted-foreground))", marginBottom: "1rem" }}>Empowering students with
                                professional project solutions from concept to completion.</p>
                        </div>
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                {quickLinksComponents}
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Services</h4>
                            <ul>
                                {servicesComponents}
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Contact Info</h4>
                            <ul>
                                {contactComponents}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 VR Creations. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterCommon