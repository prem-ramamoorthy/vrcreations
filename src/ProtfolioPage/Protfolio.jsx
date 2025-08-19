import Header from '../header/Header'
import Hero from './Hero'
import FilterSection from './FilterSection'
import ProtfolioSection from './ProtfolioSection'
import Stats from './Stats'
import Footer from '../Footer/FooterCommon';
import { useEffect } from 'react'

function Protfolio() {

    useEffect(() => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/src/styles/protfolioStyle.css";
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
            <FilterSection />
            <ProtfolioSection />
            <Stats />
            <Footer />
        </>
    )
}

export default Protfolio