import '../styles/serviceStyel.css'
import Hero from './Hero'
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import ServiceSection from './ServiceSection'
import { useEffect } from 'react'
import Process from './Process'
import FaqSection from './FaqSection'

function ServicePage() {

    return (
        <div className = "service-page">
            <Header />
            <Hero />
            <ServiceSection />
            <Process/>
            <FaqSection />
            <Footer />
        </div>
    )
}

export default ServicePage