import Hero from './Hero'
import Header from '../header/Header'
import Footer from '../Footer/FooterCommon'
import ServiceSection from './ServiceSection'
import { useEffect } from 'react'
import Process from './Process'
import FaqSection from './FaqSection'

function ServicePage() {

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/src/styles/serviceStyel.css"
        document.head.appendChild(link);

        const link2 = document.createElement("link");
        link2.rel = "stylesheet";
        link2.href = "/src/styles/headerStyle.css";
        document.head.appendChild(link2);

        const link3 = document.createElement("link");
        link3.rel = "stylesheet";
        link3.href = "/src/styles/footerStyle.css";
        document.head.appendChild(link3);

        return () => {
            document.head.removeChild(link);
            document.head.removeChild(link2);
            document.head.removeChild(link3);
        };
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <ServiceSection />
            <Process/>
            <FaqSection />
            <Footer />
        </>
    )
}

export default ServicePage