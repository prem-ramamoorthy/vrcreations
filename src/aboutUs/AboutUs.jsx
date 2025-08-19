import Hero from './Hero'
import AboutSection from './AboutSection'
import Header from '../header/Header'
import { useEffect } from 'react';
import Footer from '../Footer/FooterCommon';
import TeamSection from './TeamSection';
import ValuesSection from './ValuesSection';

function AboutUs() {

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/styles/aboutusStyle.css";
        document.head.appendChild(link);

        const link2 = document.createElement("link");
        link2.rel = "stylesheet";
        link2.href = "/styles/headerStyle.css";
        document.head.appendChild(link2);

        const link3 = document.createElement("link");
        link3.rel = "stylesheet";
        link3.href = "/styles/footerStyle.css";
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
            <AboutSection />
            <TeamSection/>
            <ValuesSection/>
            <Footer/>
        </>
    )
}

export default AboutUs